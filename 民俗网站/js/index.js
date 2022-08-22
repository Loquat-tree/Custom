/* var curImg=0;
var imgLength=document.getElementById("banner").getElementsByTagName("li").length;
var bottomli=document.getElementById("bottom"+curImg);
bootomli.setAttribute("style","background-color: white");
var time=setInterval(bannerImg,3000);
function bannerImg(){
	if (curImg<imgLength-1) {
		curImg++;
	} else{
		curImg=0;
	}
	document.getElementById("banner"+curImg).setAttribute("class","in");
	if (curImg==0) {
		document.getElementById("banner"+5).setAttribute("class","out");
	} else{
		document.getElementById("banner"+(curImg-1)).setAttribute("class","out");
	}
	for(var i=0;i<6;i++){
		document.getElementById("bottom"+i).setAttribute("style","background-color:gray")
	}
	document.getElementById("bottom"+curImg).setAttribute("style","background-color:white");
	document.getElementsById("next").onclick = function(){
		clearInterval(time);
		bannerImg();
		time = setInterval(bannerImg,3000);
	}
	document.getElementsById("pre").onclick = function(){
	    clearInterval(time);
	    if(curImg==0)
	    {
	        curImg = imgLength-1;
	    }else{
	        curImg--;
	    }
	    document.getElementById("banner"+curImg).setAttribute("class","in");
	    if(curImg==imgLength-1)
	    {
	        document.getElementById("banner"+0).setAttribute("class","out");
	    }else{
	        document.getElementById("banner"+(curImg+1)).setAttribute("class","out");
	    }
	    for(var i = 0 ; i < 6 ; i ++){
	        document.getElementById("bottom"+i).setAttribute("style","background-color:gray");
	    }
	    document.getElementById("bottom"+curImg).setAttribute("style","background-color:white");
	    time = setInterval(bannerImg,3000)
	} */
	window.addEventListener("scroll",function(){
		var nav =document.getElementById("nav");
		nav.classList.toggle("nav",window.scrollY <0);
		nav.classList.toggle("nav1",window.scrollY > 0);
	})
	/* banner轮播图 */
	//记录当前的位置
	var curImg = 0;
	//获取轮播图照片的个数
	var imgLength = document.getElementById("banner").getElementsByTagName("li").length;
	//设置底部第一个选中按钮的样式
	var bottomli = document.getElementById("bottom"+curImg);
	bottomli.setAttribute("style","background-color:white");
	var time = setInterval(bannerImg,3000);  
	function bannerImg(){
	    if(curImg<imgLength-1){
	        curImg++;
	    }else{
	        curImg = 0;
	    }
	    document.getElementById("banner"+curImg).setAttribute("class","in");
	    if(curImg==0){
	        document.getElementById("banner"+5).setAttribute("class","out");
	    }else{
	        document.getElementById("banner"+(curImg-1)).setAttribute("class","out");
	    }
	    //设置底下的圆形原先的样式
	    for(var i = 0 ;i < 6 ; i++){
	        document.getElementById("bottom"+i).setAttribute("style","background-color:gray")
	    }
	    //设置选中的样式
	    document.getElementById("bottom"+curImg).setAttribute("style","background-color:white");
	}    
	//点击下一张
	document.getElementById("next").onclick = function(){
	    //清除时间定时器
	    clearInterval(time);
	    bannerImg();
	    time = setInterval(bannerImg,3000);
	}
	//点击上一张
	document.getElementById("pre").onclick = function(){
	    clearInterval(time);
	    if(curImg==0)
	    {
	        curImg = imgLength-1;
	    }else{
	        curImg--;
	    }
	    document.getElementById("banner"+curImg).setAttribute("class","in");
	    if(curImg==imgLength-1)
	    {
	        document.getElementById("banner"+0).setAttribute("class","out");
	    }else{
	        document.getElementById("banner"+(curImg+1)).setAttribute("class","out");
	    }
	    for(var i = 0 ; i < 6 ; i ++){
	        document.getElementById("bottom"+i).setAttribute("style","background-color:gray");
	    }
	    document.getElementById("bottom"+curImg).setAttribute("style","background-color:white");
	    time = setInterval(bannerImg,3000)
	} 	      