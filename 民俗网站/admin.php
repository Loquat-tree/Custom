<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>后台管理系统</title>
	<script src="./js/jquery.min.js"></script>
	<style type="text/css">
		*{margin:0;padding:0;}
		body{color:#555;min-width:592px;background-image: url(img/bg.png);font-family:Helvetica,simsun;}
		.welcome{padding-left:60px;font-family: "黑体"; color:#000;font-size: 16px;height: 50px;line-height: 50px;border-bottom: 2px solid #eee;background: url(img/broad.jpg) no-repeat 20px 10px;background-color: #F5F5F5;}
		.admin_info{border-bottom: solid #aaa 1px;padding-top:5px;padding-bottom:15px; background-color:#fff;margin-bottom:20px;}
		dt{border-bottom: solid #eee 1px;text-align:left; padding:15px;text-indent:15px;font-weight:bold;font-size: 16px;}
		label{color:#999;line-height: 35px; padding-left: 15px;width: 15%;text-align: right;float: left; margin-right: 8px;}
		dd{line-height:35px;width: 90%;text-align: left;}
	</style>
</head>
<body>
	<?php session_start(); $admininfo=$_SESSION['admininfo']?$_SESSION['admininfo']:''?>
<div class="welcome">欢迎访问后台首页！请从左侧选择具体管理操作。</div>
		<dl class="admin_info">
			<dt>管理员账户信息</dt>
			<label>管理员账户ID：</label><dd><?php echo $admininfo['id'];?></dd>
			<label>管理员账户名：</label><dd><?php echo $admininfo['name'];?></dd>
			<label>账户类型：</label><dd><?php echo $admininfo['type'];?></dd>
			<label>账号创建时间：</label><dd><?php echo $admininfo['createtime'];?></dd>
			<label>登录系统时间：</label><dd><?php echo gmdate('Y-m-d H:i:s', time() + 3600 * 8);?></dd>
		</dl>
</body>
</html>