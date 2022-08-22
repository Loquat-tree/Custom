<?php
header('content-type:text/html;charset=utf-8');
require './public_function.php';
dbinit();
session_start();
if(!empty($_POST)){
	$username=isset($_POST['username'])? trim($_POST['username']):'';
	$password=isset($_POST['password'])?trim($_POST['password']):'';
	$username=safeHandle($username);
	$password=safeHandle($password);
	$sql="select * from admin where admin_name='$username'";
	if($row=fetchrow($sql)){
		if($password==$row['admin_pw']){
			$code=isset($_POST['code'])?trim($_POST['code']):'';
			if(empty($_SESSION['captcha_code'])){
				echo "<script>alert('验证码已经过期！')</script>";
				die;
			}
			if(strtolower($code)!=strtolower($_SESSION['captcha_code'])){
				echo "<script>alert('验证码不正确！')</script>";
				header("refresh:0;url=login.php");
				die;
			}
			unset($_SESSION['chaptcha_code']);
			$time=gmdate('Y-m-d H:i:s',time()+3600*8);
			$_SESSION['admininfo']=array(
			  'id'=>$row['admin_id'],
			  'name'=>$row['admin_name'],
			  'createtime'=>$row['create_time'],
			  'type'=>$row['admin_type'],
			  "logintime"=>$time
			);
			echo "<script>alert('管理员，欢迎登录后台管理系统！')</script>";
			header("refresh:0;url=index.php");
			die;
		}else{
			echo "<script>alert('密码不正确！')</script>";
			header("refresh:0;url=login.php");
		}
	}else{
		echo "<script>alert('用户名不存在！')</script>";
		header("refresh:0;url=login.php");
	}
}
define('APP', 'php');
require 'login_html.php';
?>