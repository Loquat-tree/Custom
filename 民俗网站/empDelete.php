<?php
header('content-type:text/html;charset=utf-8');
require './public_function.php';
dbinit();
$e_id=isset($_GET['e_id'])?intval($_GET['e_id']):0;
$sql="delete from emp_info where e_id=$e_id";
if($res=query($sql)){
	echo "<script>alert('删除员工成功！')</script>";
	header("refresh:0;url=showList.php");
}else{
	echo "<script>alert('删除员工失败！')</script>";
	die;
}	
?>