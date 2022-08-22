function show(d1){
	if(document.getElementById(d1).style.display=='block'){
		document.getElementById(d1).style.display='none';  //触动的层如果处于显示状态，即隐藏
	}else{
		document.getElementById(d1).style.display='block'; 	 //触动的层如果处于隐藏状态，即显示
	}
}
