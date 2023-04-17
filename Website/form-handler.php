
<?php 
$name = $_POST['name'];
$visitor_email = $_POST['email']; 
$subject = $_POST['university'];
$message = $_POST['message'];


$email_from = 'info@yourwebsite.com';

$email_subject = 'New Form Submission';

$email_body = "User Name: $name.\n".
            "User Email: $visitor_email.\n".
            "University: $subject.\n".
            "User Message: $message.\n";


$to = 'uni.web40@gmail.com';
I
$headers = "From: $email_from \r\n";


$headers .= "Reply-To: $visitor_email \r\n";


mail($to, $email_subject, $email_body, $headers);


header("Location: contact.html");

?>