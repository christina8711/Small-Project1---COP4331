<?php
    $inData = getRequestInfo();

    $contactName = $inData["contactName"];
    $UserID = $inData["UserID"];


    $conn = new mysqli("localhost", "admin", "admin", "SmallProject");
    {
        returnWithError( $conn->connect_error );
    }
    else
    {
		$checkStmt = $conn->prepare("SELECT Name FROM Contacts WHERE Name = ? AND UserID = ? ");
		$checkStmt->bind_param("ss", $contactName, $UserID);
		$checkStmt->execute();
		$checkStmt->store_result();

		if( $checkStmt->num_rows == 0 )
		{
			$checkStmt->close();
			$conn->close();
			returnWithError("No Contact found with this information");
			return;
		}

        $stmt = $conn->prepare("DELETE from Contacts where Name = ? AND UserID = ?");
		$stmt->bind_param("sss", $contactName, $UserID);
		$stmt->execute();
		$stmt->close();
		$conn->close();
		returnWithError("");

    }

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
