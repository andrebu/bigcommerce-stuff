<?php
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');    
  $instaAPI = file_get_contents("https://api.instagram.com/v1/users/1202155813/?access_token=1202155813.467ede5.8cc95a8e2bb54cec8c85a0c155f7e2e7"); // Add your ID & Access Token   
  echo json_encode($instaAPI);
?>
