<?php
function makePageHtml($page,$max_page){
		$next_page=$page+1;
		if($next_page>$max_page)
		$next_page=$max_page;
		$pre_page=$page-1;
		if($pre_page<1) $pre_page=1;
		$page_html='<a href="?page=1">首页</a>';
		$page_html.='<a href="?page='.$pre_page.'">上一页</a>';
		$page_html.='<a href="?page='.$page.'">'.$page.' of '.$max_page.'</a>';
		$page_html.='<a href="?page='.$next_page.'">下一页</a>';
		$page_html.='<a href="?page='.$max_page.'">尾页</a>';
		return $page_html;
}
function make_limit_sql($page,$page_size){
		return 'limit '.(($page-1)*$page_size).','.$page_size;
}
?>