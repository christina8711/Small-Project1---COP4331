<?php  
    // i will get to this page later seems like brunos alr got some logic going here so i will leave it be for now 
    $username = $_POST['username'];
    $password = $_POST['password'];

    //Update with own database this was for my local test
    $connection = new mysqli("localhost", "root", "", "test");

    if($connection->connect_error){
        die("Connection failed: " . $connection->connect_error);
    }
    else{
        $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
        $result = $connection->query($sql);

        if($result->num_rows > 0){
            echo "Login successful";
        }
        else{
            echo "Login failed";
        }
    }
?>