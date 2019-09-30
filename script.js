init = function(){
   setTimeout(function(){
	   allAnimations();
   }, 400);
}

function allAnimations() {

    var animCount = 0;
    var animTimer = setInterval(function(){ theTimer() }, 50),
	
		bg1 = document.getElementById('bg1'),
		content = document.getElementById('ctnt'),
		content1 = document.getElementById('ctnt2'),
		bg2 = document.getElementById('bg2');

		
	//  timings

	function theTimer() {
		if (animCount == 5) { 
			bg1.setAttribute('class', 'transition-7 img1Scale');
			content.setAttribute('class', 'transition-6 fade-in');
		} else if(animCount == 60){
			bg1.setAttribute('class', 'transition-7 img1Scale fade-out');
			ctnt.setAttribute('class', 'transition-6 fade-out');
		} else if(animCount == 65){
			bg2.setAttribute('class', 'transition-7 fade-in img1Scale');
			content1.setAttribute('class', 'transition-6 fade-in');
		} else if (animCount == 120) {
			clearInterval(animTimer);
		}
		animCount++;
	}
}
