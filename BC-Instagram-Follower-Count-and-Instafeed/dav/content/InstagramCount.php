<?php
	
/*
<IfModule mod_headers.c>
	SetEnvIf Origin "http(s)?://(www\.)?(domain1.org|domain2.com|domain3.net)$" AccessControlAllowOrigin=$0$1
	Header add Access-Control-Allow-Origin %{AccessControlAllowOrigin}e env=AccessControlAllowOrigin
	Header set Access-Control-Allow-Credentials true
</IfModule>
*/
//header('Access-Control-Allow-Origin: '.$_SERVER['HTTP_ORIGIN']);

/*
  header always append Access-Control-Allow-Origin: "example1.com"
  header always append Access-Control-Allow-Origin: "example2.com"
  header always append Access-Control-Allow-Origin: "example3.com"
*/


/*
	define("USER_ID", "884494772")
	define("CLIENT_ID", "YOUR CLIENT ID");
	define("CLIENT_SECRET", "YOUR CLIENT SECRET");
	define("REDIRECT_URL", "YOUR REDIRECT URL");
*/
  
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: application/json');
	$insta_count_obj = file_get_contents("https://api.instagram.com/v1/users/884494772/?access_token=1202155813.467ede5.8cc95a8e2bb54cec8c85a0c155f7e2e7");
	$insta_media_obj = file_get_contents("https://api.instagram.com/v1/users/884494772/media/recent/?access_token=1202155813.467ede5.8cc95a8e2bb54cec8c85a0c155f7e2e7&scope=public_content");
	$insta_meta_array = array("about" => json_decode($insta_count_obj, true));
	$insta_about_array = array("media" => json_decode($insta_media_obj, true));
	$insta_api_data = json_encode(
		array_merge(
			$insta_meta_array,
			$insta_about_array
			)
		);
	
	echo $insta_api_data;

?>
