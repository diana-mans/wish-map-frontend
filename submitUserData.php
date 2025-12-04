<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Получение данных из POST-запроса
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $fullName = $_POST['fullName'];
    $utm_source = $_POST['utm_source'];

    // Подготовка данных для отправки
    $userData = [
        'user' => [
            'email' => $email,
            'phone' => $phone,
            'full_name' => $fullName,
        ],
        'system' => [
            'refresh_if_exists' => 0
        ],
        'deal' => [
            'offer_code' => 'dream',
            'deal_cost' => '0',
            'deal_status' => 'payed',
            'addfields' => [
                'custom_utm_source' => $utm_source // Переменная utm_source
            ]
        ]
    ];

    $accountName = 'antiage-kitchen'; // Ваш аккаунт
    $secretKey = 'AykhPbZe4GPPS6w5L6bwvmm51IrhueXgy17HN4N1WmP3FtBARndjnYgxKH0aWJg80ZO4tlctT97WiTPjZWwN0QdkIGhYCDYwVjQGS9yKYRCPyeti1yY0Q4MaMLUJV5ad';

    // Кодирование данных в Base64
    $encodedData = base64_encode(json_encode($userData));

    // Подготовка параметров запроса
    $params = [
        'action' => 'add',
        'key' => $secretKey,
        'params' => $encodedData
    ];

    // URL для запроса
    $url = "https://{$accountName}.ru/pl/api/deals";

    // Инициализация cURL сессии
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($params));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/x-www-form-urlencoded']);

    // Отправка запроса
    $response = curl_exec($ch);
    curl_close($ch);

    // Вывод ответа сервера
    echo 'Ответ сервера: ' . $response;
} else {
    echo 'Ошибка: Неверный метод запроса.';
}
?>
