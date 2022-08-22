<?php if(!defined('APP')) die('error!');?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>用户管理系统</title>
	<script src="./js/jquery.min.js"></script>
	<style type="text/css">
		*{margin:0;padding:0;}
		body{color:#555;min-width:592px;background-image: url(img/bg.png);font-family:Helvetica,simsun;}
		#top{height:60px;background:#555;line-height:60px;color:#fff;font-size:16px;}
		#top h1{width:300px;font-size:24px;color:#FFF;margin-left:40px;font-weight:bold;letter-spacing: 2px;float: left ;}
		#top ul{float:right;width:300px;margin-right:50px;}
		#top li{float:left;margin-left:15px;list-style: none;}
		a{color:#CCC;text-decoration:none;}
		a:hover{color:#fff;text-decoration:underline;}
		#main{height:100%;position:absolute;top:60px;left:0px;right:0px;bottom:0px;min-width:700px;}
		#left{width:20%;height:100%;min-width:100px;border: 1px solid #eee;box-shadow: 0px 1px 0px #ffffff;border-radius:3px;background:#fff;}
		#left .head{height:36px;padding-left:10px;padding-top:15px;background:url(img/bg.png);color:#333;text-shadow: 1px 1px 1px #aaa; border-bottom: 2px solid #eee;}
		.head img{width:17px;height:14px;display:block;margin:4px 10px ;float:left;}
		#left li a{ padding-left:25px;height:35px;display:block;text-decoration:none;color:#444;text-indent:20px;line-height:35px;border-bottom:1px solid #eee;}
		#left a:hover{background: #eee;font-weight: 600;color: #000;}
		#right{height:100%;position:absolute;top: 0px;right:0px;left:20%;font-size:15px;border: 2px solid #eee;}
	</style>
</head>
<body>
<div id="top">
	<h1>用户后台管理系统</h1>
	<ul>
		<li>欢迎您：<a href="admin.php" target="right"><?php echo $admininfo['name']; ?></a></li>
		<li><a href="index.html">前台首页</a></li>
		<li><a href="index.php?action=logout">退出</a></li>
	</ul>
</div>
<div id="main">
	<div id="left">
			<div class="head"><img src="img/icon.png"/>管理菜单</div>
			<ul><li class="change"><a href="./sysinfo.php" target="right">后台首页</a></li>
				<li class="change"><a href="./showList.php" target="right">用户列表</a></li>
				<li class="change"><a href="./empAdd.php" target="right">添加用户</a></li>
				<li class="change"><a href="./building.html" target="right">用户搜索</a></li>
				<li class="change"><a href="./building.html" target="right">系统设置</a></li>
				<li class="change"><a href="./building.html" target="right">修改密码</a></li>
				<li class="change"><a href="./building.html" target="right">数据备份</a></li>
			</ul>
	</div>
	<div id="right">
		<iframe scrolling="auto" src="sysinfo.php" name="right" width="100%" height="100%" frameborder="0"></iframe>
	</div>
</div>
</body>
</html>