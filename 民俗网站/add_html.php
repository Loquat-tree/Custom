<?php if(!defined('APP')) die('error'); ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<style type="text/css">
		body{background-color: #eee;margin: 0;padding: 0;border: 0;}
		#box{width: 400px;margin: 15px auto; padding: 20px;border: 1px solid #ccc;background-color: #fff;}
		#box h1{font-size: 25px;text-align: center;}
		.tab{margin: auto;border-collapse: separate;border-spacing: 2px 10px;}
		.tab th{font-weight: normal;text-align: right;}
		.tab input[type='text'],.tab input[type='date']{width: 180px;height: 22px;padding-left: 4px;}
		.tab select{width: 190px;height: 25px;padding-left: 4px;}
		.btn{background-color: #0099ff;color: #fff;width: 80px;height: 30px;margin: 10px 5px;cursor: pointer;text-align: center;}
		.b{text-align: center;}
	</style>
	<body>
		<div id="box">
			<h1>添加用户信息</h1>
			<form action="./empAdd.php" method="post">
				<table class="tab">
					<tr><th>姓名：</th><td><input type="text" name="e_name" id="e_name" /></td></tr>
					<tr><th>性别：</th><td><input type="radio" name="e_sex" id="e_sex" value="男" checked="checked" />男<input type="radio" name="e_sex" id="e_sex" value="女"/>女</td></tr>
					<tr><th>所在地：</th><td><select name="e_dept" id="e_dept"><option value="">--------请选择------------</option><option value="安徽">安徽</option><option value="北京">北京</option><option value="重庆">重庆</option><option value="广东">广东</option><option value="广西">广西</option><option value="贵州">贵州</option></select></td></tr>
					<tr><th>出生日期：</th><td><input type="date" name="e_birth" id="e_birth" /></td></tr>
					<tr><th>注册时间：</th><td><input type="date" name="e_entry" id="e_entry" /></td></tr>
					<tr><td class="b" colspan="2"><input type="submit"  value="保存资料" class="btn" /><input type="reset" value="重新填写" class="btn" /></td></tr>
				</table>
				<div id="return"><a href="showList.php">返回首页</a></div>
			</form>
		</div>
	</body>
</html>
