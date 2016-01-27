console.log('here');
var inp = function(){
	// var $this = $(this);
	var num = this.text();
	$('pre#show-express').text($('pre#show-express').val() + num);
}

var btns = document.getElementsByName('button');
console.log(btns);
console.log(btns.length);
for(var i = 0; i < btns.length; i ++){
	console.log(btns[i].innerText);
	btns[i].onclick = function(){
		console.log(this);
	// var $this = $(this);
		var num = this.text();
		$('pre#show-express').text($('pre#show-express').val() + num);
	}
}