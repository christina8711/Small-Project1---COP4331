<?php
    $inData = getRequestInfo();

    // Retrieve the input data sent by the frontend
    $contactName = $inData["contactName"];
    $phonenum = $inData["phonenum"];
    $emailaddress = $inData["emailaddress"];
    $organization = $inData["organization"];
    $country = $inData["country"];  // Fix the typo here from 'contry' to 'country'
    $UserID = $inData["UserID"];

    // Database connection
    $conn = new mysqli("localhost", "admin", "admin", "SmallProject");

    // Check if the connection to the database failed
    if ($conn->connect_error) 
    {
        returnWithError($conn->connect_error);
    } 
    else 
    {
        // Prepare the SQL statement to insert the contact into the database
        $stmt = $conn->prepare("INSERT INTO Contacts (Name, Phone, Email, Organization, Country, UserID) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssss", $contactName, $phonenum, $emailaddress, $organization, $country, $UserID);
        
        // Execute the query and check for success
        if ($stmt->execute()) 
        {
            // Return success message if the contact was added
            returnWithMessage("Contact added successfully");
        } 
        else 
        {
            // Return an error if the insertion failed
            returnWithError("Failed to add contact");
        }

        // Close the statement and connection
        $stmt->close();
        $conn->close();
    }

    // Function to retrieve the request information
    function getRequestInfo() 
    {
        return json_decode(file_get_contents('php://input'), true);
    }

    // Function to send result as JSON
    function sendResultInfoAsJson($obj) 
    {
        header('Content-Type: application/json');
        echo $obj;
    }

    // Function to return an error as JSON
    function returnWithError($err) 
    {
        $retValue = '{"error":"' . $err . '"}';
        sendResultInfoAsJson($retValue);
    }

    // Function to return a success message as JSON
    function returnWithMessage($msg) 
    {
        $retValue = '{"message":"' . $msg . '"}';
        sendResultInfoAsJson($retValue);
    }
?>
