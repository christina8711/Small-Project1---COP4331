<?php
    $inData = getRequestInfo();

    $contactName = $inData["contactName"];
    $phonenum = $inData["phonenum"];
    $emailaddress = $inData["emailaddress"];
    $organization = $inData["organization"];
    $country = $inData["country"];


    $conn = new mysqli("localhost", "admin", "admin", "SmallProject");
    {
        returnWithError( $conn->connect_error );
    }
    else
    {
		$ret = $conn->prepare("SELECT contactName FROM Contacts WHERE ID=?");
	        $ret->bind_param("s", $id);
	        $ret->execute();
	        $ret->store_result();

		if( $ret->num_rows > 0){
			$stmt = $conn->prepare("UPDATE Contacts SET contactName=?, Phone=?, Email=?, Organization=?, Country =? WHERE id=?");
			$stmt->bind_param("ssssss", $contactName, $phonenum, $emailaddress, $country, $organization, $id);
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
