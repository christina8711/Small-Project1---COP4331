<?php
    $inData = getRequestInfo();
    $searchResults = "";
	$searchCount = 0;

    $conn = new mysqli("localhost", "root", "", "test"); 
    if( $conn->connect_error )
    {
        returnWithError( $conn->connect_error);
    }
    else
    {
        $stmt = $conn->prepare("SELECT * FROM contacts WHERE ID = ?");
        $stmt->bind_param("s", $inData["userID"]);
        $stmt->execute();
        $result = $stmt->get_result();
        while($row = $result->fetch_assoc()){
            if( $searchCount > 0 )
		    {
                $searchResults .= ',';
		    }
            $searchCount++;
            $searchResults .= '{"ID":"' . $row["ID"] . '", "Name":"' . $row["Name"] . '", "Phone":"' . $row["Phone"] . '", "Email":"' . $row["Email"] . '", "Organization":"' . $row["Organization"] . '"}';
        }
        if( $searchCount == 0 ){
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

    function returnWithError( $err)
    {
        $retValue = '{"error":"' . $err . '"}';
        sendResultInfoAsJson( $retValue );
    }

    function returnWithInfo($info) {
        $retValue = '{"results":[' . $info . ']}'; 
        sendResultInfoAsJson($retValue);
    }
?>
