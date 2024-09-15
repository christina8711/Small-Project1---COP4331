<?php
    $inData = getRequestInfo();

    $contactName = $inData["Name"];
    $phonenum = $inData["Phone"];
    $emailaddress = $inData["Email"];
    $organization = $inData["org"];
    $id = $inData["ContactID"];

    $conn = new mysqli("localhost", "admin", "admin", "SmallProject");
    if( $conn->connect_error )
    {
        returnWithError( $conn->connect_error);
    }
    else
    {
		$ret = $conn->prepare("SELECT Name FROM Contacts WHERE ID=?");
	        $ret->bind_param("s", $id);
	        $ret->execute();
	        $ret->store_result();

		if( $ret->num_rows > 0){
			$stmt = $conn->prepare("UPDATE Contacts SET Name=?, Phone=?, Email=?, Organization=? WHERE id=?");
			$stmt->bind_param("sssss", $contactName, $phonenum, $emailaddress, $organization, $id);
			$stmt->execute();
			$stmt->close();
			$conn->close();
			returnWithError("");
		}
		else{
			$ret->close();
			$conn->close();
			returnWithError("No Contact found with this ID");
		}    }

    function getRequestInfo()
    {
        return json_decode(file_get_contents('php://input'), true);
    }

    function sendResultInfoAsJson( $obj )
    {
        header('Content-type: application/json');
        echo $obj;
    }

    function returnWithError( $err )
    {
        $retValue = '{"error":"' . $err . '"}';
        sendResultInfoAsJson( $retValue );
    }
?>
