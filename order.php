<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

$configPath = __DIR__ . '/config.php';
if (!file_exists($configPath)) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Missing config.php']);
    exit;
}

require $configPath;

$data = json_decode(file_get_contents('php://input'), true);

$name = trim($data['name'] ?? '');
$phone = trim($data['phone'] ?? '');
$productName = trim($data['product_name'] ?? '');
$locale = trim($data['locale'] ?? '');
$location = trim($data['location'] ?? '');

if ($name === '' || $phone === '' || $productName === '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
    exit;
}

if (empty($telegramBotToken) || empty($telegramChatId)) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Telegram config is empty']);
    exit;
}

$message = implode("\n", [
    'New Vertex order',
    'Product: ' . $productName,
    'Name: ' . $name,
    'Phone: ' . $phone,
    'Locale: ' . $locale,
    'Location: ' . $location,
    'Time: ' . date('c')
]);

$payload = json_encode([
    'chat_id' => $telegramChatId,
    'text' => $message
], JSON_UNESCAPED_UNICODE);

$ch = curl_init('https://api.telegram.org/bot' . $telegramBotToken . '/sendMessage');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($response === false || $httpCode >= 400) {
    http_response_code(502);
    echo json_encode([
        'ok' => false,
        'error' => 'Telegram request failed',
        'details' => $curlError ?: $response
    ]);
    exit;
}

echo json_encode(['ok' => true]);
