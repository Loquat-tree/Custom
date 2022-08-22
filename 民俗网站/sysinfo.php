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
		.sys_info{border-bottom: solid #aaa 1px;padding-top:5px;padding-bottom:15px; background-color:#fff;margin-bottom:20px;}
		dt{border-bottom: solid #eee 1px;text-align:left; padding:15px;text-indent:15px;font-weight:bold;font-size: 16px;}
		label{color:#999;line-height: 35px; padding-left: 15px;width: 15%;text-align: right;float: left; margin-right: 8px;}
		dd{line-height:35px;width: 90%;text-align: left;}
	</style>
</head>
<body>
<div class="welcome">欢迎访问后台首页！请从左侧选择具体管理操作。</div>
		<dl class="sys_info">
			<dt>服务器信息</dt>
			<label>系统运行环境：</label><dd><?php echo apache_get_version();?></dd>
			<label>操作系统类型：</label><dd><?php echo PHP_OS;?></dd>
			<label>系统版本：</label><dd>v-0.1</dd>
			<label>系统Zend版本：</label><dd>Zend/<?php echo Zend_Version();?></dd>
			<label>服务器时间：</label><dd><?php echo gmdate('Y-m-d H:i:s',time()+3600*8);?></dd>
			<label>服务器域名和端口：</label><dd><?php echo $_SERVER['SERVER_NAME'].':'.$_SERVER["SERVER_PORT"];?></dd>
			<label>服务器IP地址：</label><dd><?php echo GetHostByName($_SERVER['SERVER_NAME']);?></dd>
			<label>服务器语言：</label><dd><?php echo $_SERVER['HTTP_ACCEPT_LANGUAGE'];?></dd>
			<label>文件上传限制：</label><dd>2M</dd>
			<label>脚本执行时限：</label><dd>30秒</dd>
		</dl>
</body>
</html>