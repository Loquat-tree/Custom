<?php
header('content-type:text/html;charset=utf-8');
require './public_function.php';
dbinit();
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
		$fields[$k]="`$v`";
		$values[]="'$data'";
	}
	$fields=implode(",", $fields);
	$values=implode(",", $values);
	$sql="insert into emp_info ($fields) values ($values)";
	if($res=query($sql)){
		echo "<script>alert('添加用户信息成功！')</script>";
		header("refresh:0;url=showList.php");
}
}
define('APP', 'test');
require './add_html.php';
?>