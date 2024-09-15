<?php
    $inData = getRequestInfo();

    $contactName = $inData["contactName"];
    $phonenum = $inData["phonenum"];
    $emailaddress = $inData["email"];
    $organization = $inData["organization"];
    $UserID = $inData["userID"];
    $country = $inData["country"];



    $conn = new mysqli("localhost", "admin", "admin", "SmallProject"); 
    if( $conn->connect_error )
    {
        returnWithError( $conn->connect_error);
    }
    else
    {
        $stmt = $conn->prepare("INSERT INTO Contacts (Name, Phone, Email, Organization, UserID, Country) VALUES(?,?,?,?,?,?)");
		$stmt->bind_param("ssssss", $contactName, $phonenum, $emailaddress, $organization, $UserID, $country);
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
