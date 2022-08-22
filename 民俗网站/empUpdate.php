<?php
header('content-type:text/html;charset=utf-8');
require './public_function.php';
dbinit();
$e_id=isset($_GET['e_id'])?intval($_GET['e_id']):0;
if(!empty($_POST)){
	$fields=array('e_name','e_sex','e_dept','e_birth','e_entry');
	$values=array();
	foreach($fields as $k=>$v){
		$data=isset($_POST[$v])?$_POST[$v]:'';
		if($data=='') {
			echo "<script>alert('字段不能为空！')</script>";
			header("refresh:0;url=empAdd.php");
			die;
		}
		$data=safeHandle($data);
		$values[]="`$v`='$data'";
	}
	$values=implode(",", $values);
	$sql="update emp_info set $values where e_id=$e_id";
	if($res=query($sql)){
		echo "<script>alert('修改用户信息成功！')</script>";
		header("refresh:0;url=showList.php");
	}else{
		echo "<script>alert('修改用户信息失败！')</script>";
		die;
	}	
}else{
	$sql="select * from emp_info where e_id=$e_id";
	$emp_info=fetchRow($sql);
	define('APP', 'test');
	require './update_html.php';
}
?>