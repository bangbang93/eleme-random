var randomRest = function (){
	var rests = document.querySelectorAll('.rstblock');
	var i = Math.round(Math.random() * rests.length + 1);
	var event = document.createEvent('MouseEvents');
	event.initMouseEvent('click', true, true, window, 1,rests.offsetTop, rests.offsetLeft, rests.offsetTop, rests.offsetLeft, false, false, true, false, 0 ,null);
	rests[i].dispatchEvent(event);
	if (rests[i].onclick){
		rests[i].onclick;
	}
	if (rests[i].href){
		window.location = rests[i].href;
	}
}

var button = document.createElement('button');
button.style.position = 'absolute';
button.style.float = 'left';
button.style.top = 0;
button.style.left = 0;
button.innerText = '随机餐厅';
button.onclick = randomRest;
document.body.appendChild(button);