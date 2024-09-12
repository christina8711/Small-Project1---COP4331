<?php
    $inData = getRequestInfo();
    error_log("Request data received: " . json_encode($inData)); // Log incoming request data

    $firstname = $inData["firstname"];
    $lastname = $inData["lastname"];
    $login = $inData["username"];
    $password = $inData["password"];

    error_log("Extracted data - Firstname: $firstname, Lastname: $lastname, Login: $login"); // Log extracted variables

    $conn = new mysqli("localhost", "admin", "admin", "SmallProject");
    if ($conn->connect_error) {
        error_log("Connection failed: " . $conn->connect_error); // Log database connection error
        returnWithError($conn->connect_error, 404);
    } else {
        error_log("Connected to database successfully"); // Log successful database connection

        // Check if the user already exists
        $checkStmt = $conn->prepare("SELECT Login FROM Users WHERE Login = ?");
        $checkStmt->bind_param("s", $login);
        $checkStmt->execute();
        $checkStmt->store_result();

        if ($checkStmt->num_rows > 0) {
            error_log("User already exists: " . $login); // Log that the user already exists
            $checkStmt->close();
            $conn->close();
            returnWithError("Username already taken", 409);
            return;
        }

        // Insert the new user
        $stmt = $conn->prepare("INSERT into Users (FirstName, LastName, Login, Password) VALUES(?,?,?,?)");
        if (!$stmt) {
            error_log("SQL statement preparation failed: " . $conn->error); // Log SQL error
        } else {
            $stmt->bind_param("ssss", $firstname, $lastname, $login, $password);
            if ($stmt->execute()) {
                error_log("User successfully added: " . $login); // Log successful user registration
            } else {
                error_log("Insert execution failed: " . $stmt->error); // Log insertion failure
            }
            $stmt->close();
        }

        $conn->close();
        returnWithError("");
    }

    function getRequestInfo() {
        return json_decode(file_get_contents('php://input'), true);
    }

    function sendResultInfoAsJson($obj) {
        header('Content-type: application/json');
        echo $obj;
    }

    function returnWithError($err, $statusCode = 200) {
        http_response_code($statusCode);
        $retValue = '{"error":"' . $err . '"}';
        sendResultInfoAsJson($retValue);
        error_log("Error returned: " . $err); // Log the error being returned
    }
?>
