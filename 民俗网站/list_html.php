<?php if(!defined('APP')) die('error'); ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>用户信息列表</title>
		<style type="text/css">
			#box{
				width: 98%;
				margin: auto;
				padding: 10px;
				text-align: center;
				background: #fff;
			}
			table{
				width: 100%;
				border: 1px solid #999;
				border-collapse: collapse;
			}
			table th,table td{
				height: 20px;
				border: 1px solid #999;
				text-align: center;
			}
			table th{
				background: #eee;
				height: 30px;
			}
			.search{
				float: right;
				font-size: 16px;
				margin: 15px 0px;
			}
			.search input{
				margin-left:5px;
				line-height: 20px;
			}
			#page{
				margin: 8px 0px;
				text-align: right;
			}
			#page a{
				margin-left: 8px;
			}
			#add{
				text-align: right;
			}
		</style>
	</head>
	<body>
		<div id="box">
			<h1>用户信息列表</h1>
			<form action="./showList.php" method="get">
				<div class="search">
					<label>快速查询：</label><input type="text" name="keyword" id="keyword" /><input type="submit" name="sb" id="sb" value="提交" />
				</div>
			</form>
			<table>
				<tr>
					<th><a href="./showList.php?order=e_id&sort=<?php echo ($order=='e_id')? $sort : 'desc';?>">ID</a></th><th><a href="./showList.php?order=e_name&sort=<?php echo ($order=='e_name')? $sort : 'desc';?>">姓名</a></th><th><a href="./showList.php?order=e_sex&sort=<?php echo ($order=='e_sex')? $sort : 'desc';?>">性别</a></th><th><a href="./showList.php?order=e_dept&sort=<?php echo ($order=='e_dept')? $sort : 'desc';?>">所在地</a></th><th><a href="./showList.php?order=e_birth&sort=<?php echo ($order=='e_birth')? $sort : 'desc';?>">出生日期</a></th><th><a href="./showList.php?order=e_entry&sort=<?php echo ($order=='e_entry')? $sort : 'desc';?>">注册时间</a></th><th>相关操作</th>
				</tr>
				<?php if(!empty($emp_info)){ ?>
					<?php foreach($emp_info as $row){ ?>
				<tr>
					<td><?php echo $row['e_id'];?></td>
					<td><?php echo $row['e_name'];?></td>
					<td><?php echo $row['e_sex'];?></td>
					<td><?php echo $row['e_dept'];?></td>
					<td><?php echo $row['e_birth'];?></td>
					<td><?php echo $row['e_entry'];?></td>
					<td><img src="images/edt.gif"><a href="empUpdate.php?e_id=<?php echo $row['e_id']; ?>">编辑</a>&nbsp;&nbsp;<img src="images/del.gif"><a href="empDelete.php?e_id=<?php echo $row['e_id']; ?>">删除</a></td>
				</tr>
				<?php } ?>
				<?php }else{ ?>
					<tr><td colspan="7">暂无员工数据！</td></tr>
				<?php }?>
			</table>
			<div id="page"><?php echo $page_html; ?></div>
			<div id="add"><a href="empAdd.php">添加用户</a></div>
		</div>
	</body>
</html>
