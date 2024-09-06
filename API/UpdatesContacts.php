<?php
    $inData = getRequestInfo();

    $firstName = $inData["firstName"];
    $lastName = $inData["lastName"];
    $phone = $inData["phone"];
    $email = $inData["email"];
    $organization = $inData["organization"];
    $country = $inData["country"];


    $conn = new mysqli("localhost", "username", "password", "SmallProject");
    {
        returnWithError( $conn->connect_error );
    }
    else
    {
        //stuff goes here that i dont feel like writing rn 
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
