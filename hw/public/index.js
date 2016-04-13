$(document).ready(function(){

	$("#enter").click(function(){
		var id = $('#ID').val();
	
	$.post('/ask',{ID:id}).done(function(res){
			console.log('ok');
			$(".outbox").append('<p>' + res.name + '</p>');
		});
	
	});
});
