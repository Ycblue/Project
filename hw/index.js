$(document).ready(function(){
	$("#button").click(function(){
		$.ajax({
            method: "POST",/*HTTP method for request*/
            url: "game.php",
        	dataType: 'text',
    	    data: {call: login(),actions: "game_login"}
        }).done(function(data){
        	if(data.charAt(0)=="{")
        	{
        		window.alert(JSON.parse(data).ID+"�C���A��");
        		userdata = data;
        	}
        	else window.alert(data);
        });
    });
});