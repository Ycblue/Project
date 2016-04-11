$(document).ready(function(){
	$("#p1").on({
		"mouseover": function(){
			$("#pic").attr('src',"Pictures/x1.jpeg");
            document.getElementById('intro').innerHTML = '組長<br>田靖瑜<br><br>政治107<br><br>興趣 - 看電影<br>';
		}
	})
	$("#p2").on({
		"mouseover": function(){
			$("#pic").attr('src',"Pictures/x2.jpeg");
            document.getElementById('intro').innerHTML = '組員<br>胡方哲<br><br>政治106<br><br>興趣 - 打棒球<br>';    
		}
	})
	$("#p3").on({
		"mouseover": function(){
			$("#pic").attr('src',"Pictures/x3.jpeg");
            document.getElementById('intro').innerHTML = '組員<br>李玟<br><br>工設107<br><br>興趣 - 攝影<br>';
		}
	})
	$("#p4").on({
		"mouseover": function(){
			$("#pic").attr('src',"Pictures/x4.jpeg");
            document.getElementById('intro').innerHTML = '組員<br>溫順強<br><br>工設107<br><br>興趣 - 旅行<br>';
		}
	})
	$("#p5").on({
		"mouseover": function(){
			$("#pic").attr('src',"Pictures/x5.jpg");
            document.getElementById('intro').innerHTML = '組員<br>吳映諦<br><br>電機105<br><br>興趣 - 看書<br>';
		}
	})
	$("#p6").on({
		"mouseover": function(){
			$("#pic").attr('src',"Pictures/x6.jpeg");
            document.getElementById('intro').innerHTML = '組員<br>許曜雲<br><br>電機105<br><br>興趣 - 打電動<br>';
		}
	})
	$("#p7").on({
		"mouseover": function(){
			$("#pic").attr('src',"Pictures/x7.jpeg");
            document.getElementById('intro').innerHTML = '組員<br>藍佑嘉<br><br>電機105<br><br>興趣 - 打籃球<br>';
		}
	})
});