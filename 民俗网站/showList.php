<?php
header('content-type:text/html;charset=utf-8');
error_reporting(E_ALL ^ E_DEPRECATED);
require './public_function.php';
require './page_function.php';
//初始化数据库连接
dbinit();

//分页功能
$page_size = 10; //每页显示3条信息
$page_count = fetchColumn('select count(*) from emp_info'); //查询所有记录条数
$page_max = ceil($page_count/$page_size); //计算最大页码值
$page = (int)(isset($_GET['page']) ? $_GET['page'] : ''); //获取当前访问的页码
$page = max($page,1); //页码值最小为1
$page = min($page,$page_max); //页码值最大为$max_page
$page_html = makePageHtml($page,$page_max); //调用函数生成分页链接
$limit_sql = 'limit '.(($page-1)*$page_size).','.$page_size; //拼接SQL

//排序：允许排序的字段
$fields=array('e_id','e_name','e_sex','e_birth','e_dept','e_entry');
//初始化排序语句
$sql_order='';
//判断排序字段$order和方式$sort
$order=isset($_GET['order'])?$_GET['order']:'';
$sort=isset($_GET['sort'])?$_GET['sort']:'';
//判断排序字段$order是否是合法的字段，并更新排序方式
if(in_array($order, $fields)){
	if($sort=='desc'){
		$sql_order="order by $order desc";
		$sort='asc';
	}else{
		$sql_order="order by $order asc";
		$sort="desc";
	}
}
//查询：保存查询条件
$where="";
if(isset($_GET['keyword'])){
	$keyword=$_GET['keyword'];
	$keyword=mysql_real_escape_string($keyword);
	$where="where e_name like '%$keyword%'";
}
$sql="select * from emp_info $sql_order $where $limit_sql";
$emp_info=fetchAll($sql);
//加载HTML显示模板文件
define('APP', 'itcast');
require './list_html.php';
?>