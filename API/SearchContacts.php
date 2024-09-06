<?php
    $inData = getRequestInfo();
    $searchResults = "";
	$searchCount = 0;

    $conn = new mysqli("localhost", "username", "password", "SmallProject"); 
    if( $conn->connect_error )
    {
        returnWithError( $conn->connect_error);
    }
    else
    {
        //stuff goes here

        if( $searchCount == 0 )
		{
			returnWithError( "No Records Found" );
		}
		else
		{
			returnWithInfo( $searchResults );
		}
        
		$stmt->close();
		$conn->close();
    }

    // Helper functions
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
