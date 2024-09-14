<?php  
    $data = json_decode(file_get_contents("php://input"));
    $UserID = 0;
    $firstName = "";
    $lastName = "";
    //Update with own database this was for my local test
    $connection = new mysqli("localhost", "admin", "admin", "SmallProject");

    if($connection->connect_error){
        die("Connection failed: " . $connection->connect_error);
    }
    else if($data->username == NULL || $data->password == NULL){
        $response = array(
            'UserID' => -1,
        );
        echo json_encode($response);
    }
    else{
        $stmt = $connection->prepare("SELECT ID FROM Users WHERE Login = ? AND Password = ?");
        $stmt->bind_param("ss", $data->username, $data->password);
        $stmt->execute();
        $result = $stmt->get_result();

        if( $row = $result->fetch_assoc()){
            $user_id = $row['ID'];

            $response = array(
                'UserID' => $user_id,
            );

            echo json_encode($response);
        }
        else{
            $response = array(
                'UserID' => -1,
            );
            echo json_encode($response);
        }
        $stmt->close();
        $connection->close();
    }
?>