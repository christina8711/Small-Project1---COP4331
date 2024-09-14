<?php
    $inData = getRequestInfo();

    $IDarray = $inData["ID"];
    $ID = 0;


    $conn = new mysqli("localhost", "admin", "admin", "SmallProject");
    if( $conn->connect_error )
    {
        returnWithError( $conn->connect_error);
    }
    else
    {
        foreach($IDarray as $key => $value)
        {
            $ID = $value;
            $checkStmt = $conn->prepare("SELECT Name FROM Contacts WHERE ID = ? ");
		$checkStmt->bind_param("s", $ID);
		$checkStmt->execute();
		$checkStmt->store_result();

		if( $checkStmt->num_rows == 0 )
		{
			$checkStmt->close();
			$conn->close();
			returnWithError("No Contact found with this information");
			return;
		}

        $stmt = $conn->prepare("DELETE from Contacts WHERE ID = ?");
		$stmt->bind_param("s", $ID);
		$stmt->execute();
		$stmt->close();
		$conn->close();
		returnWithError("");
        }

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
