<?php  
    $data = json_decode(file_get_contents("php://input"));
    $user_id = 0;
    $firstName = "";
    $lastName = "";
    //Update with own database this was for my local test
    $connection = new mysqli("localhost", "root", "", "test");

    if($connection->connect_error){
        die("Connection failed: " . $connection->connect_error);
    }
    else{
        $stmt = $connection->prepare("SELECT user_id FROM users WHERE username = ? AND password = ?");
        $stmt->bind_param("ss", $data->username, $data->password);
        $stmt->execute();
        $result = $stmt->get_result();

        if( $row = $result->fetch_assoc()){
            $user_id = $row['user_id'];

            $response = array(
                'user_id' => $user_id,
            );

            echo json_encode($response);
        }
        else{
            $response = array(
                'user_id' => -1,
            );
            echo json_encode($response);
        }
        $stmt->close();
        $connection->close();
    }
?>