<?php
    $inData = getRequestInfo();

    $firstName = $inData["firstName"];
    $lastName = $inData["lastName"];
    $username = $inData["username"];
    $password = $inData["password"];


    $conn = new mysqli("localhost", "username", "password", "SmallProject"); 
    if( $conn->connect_error )
    {
        returnWithError( $conn->connect_error, 404);
    }
    else
    {
        // reminder: add here logic to check whether a username already exists in system
        $checkstmt->execute();

        
        if( $checkStmt->num_rows > 0 )
		{
			$checkStmt->close();
			$conn->close();
			returnWithError("Username already taken", 409);
			return;
		}

        // reminder: more stuff needs to b done here (inserting into users paet)
        $stmt->close();
        $conn->close();
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

    function returnWithError( $err, $statusCode = 200)
    {
        http_response_code($statusCode);
        $retValue = '{"error":"' . $err . '"}';
        sendResultInfoAsJson( $retValue );
    }
?>
