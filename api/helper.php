<?php

// Function to get a PDO object based on the environment
function getPdoObject($config)
{
    $database = $config["database"];

    $host = $database["host"];
    $port = $database["port"];
    $dbname = $database["database"];
    $user = $database["username"];
    $password = $database["password"];

    $dsn = "mysql:host=$host;port=$port;dbname=$dbname";
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    return $pdo;
}