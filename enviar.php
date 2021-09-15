<?php

$name = $_POST ['name'];
$email = $_POST ['email'];
$subject = $_POST ['subject'];
$message = $_POST ['message'];

require './PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer();
$mail -> isSMTP();
$mail -> Host = '';
$mail -> SMTPAuth = '' ;
$mail -> SMTPSecure = '';
$mail -> CharSet = 'UTF-8';
$mail -> Port = '' ;
$mail -> Username = '';
$mail -> Password = '';

$mail -> setFrom($mail-> Username, 'devedles@gmail.com');
$mail->addAddress('devedles@gmail.com');
$mail->Subject = $subject;

$conteudo = "Nova Mensagem recebida de Nome: $name Email: $email

Mensagem: $message
";

$mail->isHTML(true);
$mail->Body = $conteudo;

if($mail->send()){
    echo "Message has been sent!";

}else {
    echo "Error to sent message!"; $mail->ErrorInfo;
}