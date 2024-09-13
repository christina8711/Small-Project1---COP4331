<?php
    $inData = getRequestInfo();

    $contactName = $inData["contactName"];
    $phonenum = $inData["phonenum"];
    $emailaddress = $inData["email"];
    $organization = $inData["organization"];
    $country = $inData["country"];
    $UserID = $inData["userID"];



    $conn = new mysqli("localhost", "root", "", "SmallProject"); 
    if( $conn->connect_error )
    {
        returnWithError( $conn->connect_error);
    }
    else
    {
        $stmt = $conn->prepare("INSERT INTO contacts (Name, Phone, Email, Organization, Country, UserID) VALUES(?,?,?,?,?,?)");
		$stmt->bind_param("ssssss", $contactName, $phonenum, $emailaddress, $organization, $country, $UserID);
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
