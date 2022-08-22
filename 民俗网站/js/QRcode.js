$(".download_btn").click(function(){
	if($(".QRcode").css("display")=="none"){
			$(".QRcode").show();
			$(".download_btn").text("Close it");
		}else{
			$(".QRcode").hide();
			$(".download_btn").text("scan it");
		}
})			