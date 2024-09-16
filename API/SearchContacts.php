<?php
    $inData = getRequestInfo();
    $searchResults = "";
	$searchCount = 0;

    $conn = new mysqli("localhost", "admin", "admin", "SmallProject"); 
    if( $conn->connect_error )
    {
        returnWithError( $conn->connect_error);
    }
    else
    {
        $stmt = $conn->prepare("SELECT * FROM Contacts WHERE (Name like ? OR Email like ? OR Phone like ? OR Organization like ? OR Country like ?) AND UserID=?");
		$contactName = "%" . $inData["search"] . "%";
		$stmt->bind_param("ssssss", $contactName, $contactName, $contactName, $contactName, $contactName, $inData["userID"]);
		$stmt->execute();

        $result = $stmt->get_result();

        while($row = $result->fetch_assoc())
		{
			if( $searchCount > 0 )
			{
				$searchResults .= ",";
			}
			$searchCount++;
			$searchResults .= '{"Name" : "' . $row["Name"]. '", "Phone" : "' . $row["Phone"]. '", "Email" : "' . $row["Email"]. '", "ID" : "' . $row["ID"] . '", "Country" : "' . $row["Country"]. '", "Organization" : "' . $row["Organization"]. '"}';
		}
		
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

    function returnWithError( $err )
	{
		$retValue = '{"id":0,"name":"","error":"' . $err . '"}';
		sendResultInfoAsJson( $retValue );
	}
	
	function returnWithInfo( $firstName )
	{
		$retValue = '{"results":[' . $firstName . '],"error":""}';
		sendResultInfoAsJson( $retValue );
	}

	function sendResultInfoAsJson( $obj )
	{
		header('Content-type: application/json');
		echo $obj;
	}
?>
