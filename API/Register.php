<?php
    $inData = getRequestInfo();

    $firstname = $inData["firstname"];
    $lastame = $inData["lastname"];
    $login = $inData["username"];
    $password = $inData["password"];
n
    $conn = new mysqli("localhost", "admin", "admin", "SmallProject"); 	
    if( $conn->connect_error )
	{
		returnWithError( $conn->connect_error, 404);
	}
	else
	{
		$checkStmt = $conn->prepare("SELECT Login FROM Users WHERE Login = ?");
		$checkStmt->bind_param("s", $login);
		$checkStmt->execute();
		$checkStmt->store_result();

		if( $checkStmt->num_rows > 0 )
		{
			$checkStmt->close();
			$conn->close();
			returnWithError("Username already taken", 409);
			return;
		}

		$stmt = $conn->prepare("INSERT into Users (FirstName, LastName, Login, Password) VALUES(?,?,?,?)");
		$stmt->bind_param("ssss", $firstname, $lastname, $login, $password );
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
	
	function returnWithError( $err, $statusCode = 200)
	{
		http_response_code($statusCode);
		$retValue = '{"error":"' . $err . '"}';
		sendResultInfoAsJson( $retValue );
	}


?>
