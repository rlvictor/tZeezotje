<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$text = $_POST['textarea'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';


$mail->isSMTP();                                      
$mail->Host = 'smtp.yandex.ru';  
$mail->SMTPAuth = true;                               
                        
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;                                    
    

$mail->isHTML(true);                                  
$mail->Subject = 'send from tzezotje';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	E-mail: ' . $email . ' <br>
	Телефон: ' . $phone . '<br> 
	Сообщение: ' . $text . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>