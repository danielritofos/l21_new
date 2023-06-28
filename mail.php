<?php
// Получение данных из POST-запроса
$email = $_POST['email'];
$message = $_POST['message'];

// Проверка и валидация данных
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	// Возвращаем ошибку, если email неправильный
	http_response_code(400);
	echo 'Invalid email address.';
	exit();
}

// Формирование тела письма
$mailBody = "Email: " . $email . "\n";
$mailBody .= "Message: " . $message . "\n";

// Адрес, на который будут отправляться данные формы
$to = 'l21ua.tech@gmail.com';

// Заголовки письма
$headers = 'From: ' . $email . "\r\n" .
	'Reply-To: ' . $email . "\r\n" .
	'X-Mailer: PHP/' . phpversion();

// Отправка письма
$mailSent = mail($to, 'Form Submission', $mailBody, $headers);

if ($mailSent) {
	// Ответ в случае успешной отправки
	http_response_code(200);
	echo 'Form submitted successfully!';
} else {
	// Ответ в случае ошибки при отправке
	http_response_code(500);
	echo 'Error occurred while submitting the form.';
}
?>