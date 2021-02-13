<?php

class DatabasePDOConfiguration{

    private $connection

    private $host = "localhost";
    private $username = "root";
    private $dbName = "users";
    private $password = "";

    $db = new mysqli('localhost', $username, $dbName, $password) or die("Unable to connect");

}

?>