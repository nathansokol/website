var mobile_SS = ["login.png", "home.png", "course.png", "course2.png", "players.png", "play1.png", "profile.png"];
var showCounter = 0;
$(document).ready(function(){
	$('#mobileShow').on('click', function(){
		showCounter++;
		if(showCounter == 7) {
			showCounter = 0;
		}
		var src = "../../images/mobile_SS/" + mobile_SS[showCounter];
		$('#mobileShow').attr('src', src);

	});
});