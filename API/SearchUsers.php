<?php
    $inData = getRequestInfo();

    $searchResults = "";
	$searchCount = 0;


    $conn = new mysqli("localhost", "admin", "admin", "SmallProject"); 
    if( $conn->connect_error )
    {
        returnWithError( $conn->connect_error );
    }
    else
    {
        $stmt = $conn->prepare("SELECT * from Users where Login=?");
		$userName = "%" . $inData["username"] . "%";
		$stmt->bind_param("s", $inData["username"]);
		$stmt->execute()

        $result = $stmt->get_result();

        // reminder: do the search results logic here
		
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

        // reminder: insert values here
        $retValue = '{"error":"' . $err . '"}';
        sendResultInfoAsJson( $retValue );
    }

	function returnWithInfo( $searchResults )
	{
		$retValue = '{"results":[' . $searchResults . '],"error":""}';
		sendResultInfoAsJson( $retValue );
	}

?>
