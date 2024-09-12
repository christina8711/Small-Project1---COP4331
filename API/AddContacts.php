<?php
    $inData = getRequestInfo();

    $firstName = $inData["firstName"];
    $lastName = $inData["lastName"];
    $phone = $inData["phone"];
    $email = $inData["email"];
    $organization = $inData["organization"];
    $country = $inData["contry"];


    $conn = new mysqli("localhost", "admin", "admin", "SmallProject"); 
    if( $conn->connect_error )
    {
        returnWithError( $conn->connect_error);
    }
    else
    {
        $stmt = $conn->prepare("INSERT into Contacts (FirstName, LastName, Phone, Email, Organization, Country) VALUES(?,?,?,?,?,?)");
		$stmt->bind_param("ssssss", $firstName, $lastName, $phone, $email, $organization, $country);
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

    function returnWithError( $err)
    {
        $retValue = '{"error":"' . $err . '"}';
        sendResultInfoAsJson( $retValue );
    }
?>
