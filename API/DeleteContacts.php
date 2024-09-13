<?php
    $inData = getRequestInfo();

    $userID = $inData["userID"];


    $conn = new mysqli("localhost", "root", "", "SmallProject");
    {
        returnWithError( $conn->connect_error );
    }
    else
    {
        $stmt = $conn->prepare("DELETE FROM Contacts WHERE ID = ?"); 
        $stmt->bind_param("s", $userID);
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
