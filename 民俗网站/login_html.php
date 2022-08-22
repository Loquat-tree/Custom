<?php if(!defined('APP')) die('error!');?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<link rel="stylesheet" type="text/css" href="css/login.css"/>
	</head>
	<body>
		<div class="login-box">
		<form method="post" >	      
		    <div class="nav">
				<a href="01.html" id="on">Login</a>
			    <a href="register.html" id="off">Register</a>
			</div>
			<div class="item">  
		    <input type="text"  name="username" id="username" autocomplete="off" required />  
		    <label for="username">Username</label>
		</div>
			<div class="item">
		    <input type="password" name="password" id="password" autocomplete="off" required /> 
		    <label for="password">Password</label> 	
		</div>
			<div class="item1">
			<div class="flash1">
				<label>验证码：</label>
				<input type="text" name="code" id="code" />
			</div>			
			<div class="flash">
				<div class="ph"><img src="./lib/code.php" id="code_img"/></div>
				<div class="word"><a href="#" id="change">点击刷新</a></div>
			</div>
		</div>
		<button type="submit" class="btn" OnClick="Button1_Click" value="Login"> Login
		   <span></span>
		   <span></span>
		   <span></span>
		   <span></span>
		     </button>
		<div class="btn download_btn">scan it</div>
		<div class="QRcode"><img src="img/QRcode.png" width="240" height="240" /></div>
		</form>	 
        </div>    
		<script src="js/jquery-1.12.4/jquery.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/QRcode.js"></script>
		<script type="application/javascript">			
			var change=document.getElementById("change");
			var img=document.getElementById("code_img");
			change.onclick=function(){
				img.src="./lib/code.php?t="+Math.random();
				return false;
			}
			</script>        
	</body>

	
</html>
