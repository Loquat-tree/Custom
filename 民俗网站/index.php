<?php
header('content-type:text/html;charset=utf-8');
session_start();
if(isset($_SESSION['admininfo'])){
	$login=true;
	$admininfo=$_SESSION['admininfo'];
}else{
	$login=FALSE;
}
if(isset($_GET['action']) && isset($_GET['action'])=='logout'){
	unset($_SESSION['admininfo']);
	session_destroy();
	echo "<script>alert('退出成功！')</script>";
	header("refresh:0;url=login.php");
	die;
}
define('APP', 'test');
require 'index_html.php';
?>