var form = document.getElementById("form");
var i;

const stop_button = document.getElementById("stop_button");
const delete_button = document.getElementById("delete_button");
const pause_button = document.getElementById("pause_button");
const resume_button = document.getElementById("resume_button");

function form_initialize(){
	i = 1;
	form = document.getElementById("form");
}

stop_button.addEventListener('click', function(){
	const request = new XMLHttpRequest();

	request.addEventListener("load", reqListener);
	request.open("GET", "http://localhost:5000/stop");
	request.send();
});

delete_button.addEventListener('click', function(){
	const request = new XMLHttpRequest();

	request.addEventListener("load", reqListener);
	request.open("GET", "http://localhost:5000/delete");
	request.send();
});

pause_button.addEventListener('click', function(){
	const request = new XMLHttpRequest();

	request.addEventListener("load", reqListener);
	request.open("GET", "http://localhost:5000/pause");
	request.send();
});


resume_button.addEventListener('click', function(){
	const request = new XMLHttpRequest();

	request.addEventListener("load", reqListener);
	request.open("GET", "http://localhost:5000/resume");
	request.send();
});


form.addEventListener("submit", function(event){
	event.preventDefault();
	form_initialize();
	submit_handler();
});

function reqListener(){
	console.log(this.responseText);
}
function submit_handler(){ 
	setTimeout(printer, 1);
}
function printer(){ 
	const request = new XMLHttpRequest();

	request.addEventListener("load", reqListener);
	request.open("POST", "http://localhost:5000/");
	request.send(new FormData(form));
    if(i >= 100){
     	return ;
    }else{
    	i++;
     	submit_handler();
    }
}

