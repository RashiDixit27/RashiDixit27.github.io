<?php $name = $_POST['ipt1'];
$email = $_POST['ipt2'];
$message = $_POST['ipt3'];
$formcontent="From: $name \n Message: $message";
$recipient = "rashimdixit@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
?>