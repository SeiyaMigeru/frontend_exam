<?php
header('Content-Type: application/json');

$input = json_decode(file_get_contents('php://input'), true);
$email = $input['email'];

// Simple email validation
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $result = 'false';
  $message = 'Email is not valid';
} else {
  $result = 'true';
  $message = 'Email is valid';
}

// Log to CSV file
$logData = date('Y/m/d, H:i:s') . ', ' . $email . ', ' . $result . "\n";
file_put_contents('log.csv', $logData, FILE_APPEND);

// Return response
echo json_encode(array(
  'error' => $result === 'false',
  'message' => $message
));
?>
