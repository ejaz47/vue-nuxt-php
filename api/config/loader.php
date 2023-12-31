<?php

function loadConfig($environment = 'prod') {
    $config = require 'config.php';
    $configDev = require 'config.dev.php';
    $configProd = require 'config.prod.php';

    if ($environment === 'dev') {
        $config = array_merge($config, $configDev);
    } elseif ($environment === 'prod') {
        $config = array_merge($config, $configProd);
    }

    return $config;
}