<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    // Recipient email
    $to = "nikhilsurvanshi137@gmail.com";  // Replace with your email address

    // Subject
    $subject = "New Email Notification";

    // Message
    $message = "You have a new subscriber: " . $email;

    // Headers
    $headers = "From: no-reply@example.com\r\n" .
               "Reply-To: no-reply@example.com\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Your data is successfully submitted";
    } else {
        echo "There was a problem submitting your data. Please try again.";
    }
} else {
    echo "Invalid request";
}
?>