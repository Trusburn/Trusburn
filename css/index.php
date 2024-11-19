<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $comment = $_POST['comment'];

    $conn = new mysqli("localhost", "root", "", "portfolio");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $stmt = $conn->prepare("INSERT INTO comments (name, email, comment) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $comment);
    $stmt->execute();
    $stmt->close();
    $conn->close();

    header("Location: index.html");
?>