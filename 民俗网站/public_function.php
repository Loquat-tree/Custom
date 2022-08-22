<?php
header('content-type:text/html;charset=utf-8');
error_reporting(E_ALL ^ E_DEPRECATED);
//封装数据库连接初始化函数
function dbinit(){
//连接数据库
$link=mysql_connect('localhost','root','');
//判断连接是否成功
if(!$link){
	die('连接数据库失败！'.mysql_error());
}
//设置字符集，选择数据库
mysql_query('set names utf8');
mysql_query('use php');
}
//封装执行SQL语句函数
function query($sql){
	if($result=mysql_query($sql)){
		//SQL执行成功
		return $result;
	}else{
		//SQL执行不成功
		echo 'SQL执行失败！<br>';
		echo '错误的SQL：'.$sql.'<br>';
		echo '错误的代码：'.mysql_errno().'<br>';
		echo '错误的信息:'.mysql_error().'<br>';
		die;
	}
}
//封装处理多条数据的函数
function fetchAll($sql){
	if($result=query($sql)){
		//执行成功，遍历结果集
		$rows=array();
		while($row=mysql_fetch_array($result,MYSQL_ASSOC)){
			$rows[]=$row;
		}
		//释放结果集资源
		mysql_free_result($result);
		return $rows;
	}else{
		//执行不成功
		return false;
	}
}
//封装处理单条数据的函数
function fetchRow($sql){
	if($result=query($sql)){
		$row=mysql_fetch_array($result,MYSQL_ASSOC);
		return $row;
	}else{
		return false;
	}
}
//封装处理一个数据的函数
function fetchColumn($sql){
	if($result=query($sql)){
		$row=mysql_fetch_row($result);
		return $row[0];
	}else{
		return false;
	}
}
//封装表单数据安全性过滤函数
function safeHandle($data){
	//过滤字符串中的HTML特殊字符；
	$data=htmlspecialchars($data);
	//转义字符串中的SQL特殊字符
	$data=mysql_real_escape_string($data);
	return $data;
}
?>