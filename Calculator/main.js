// console.log('here');
// var inp = function(){
// 	// var $this = $(this);
// 	var num = this.text();
// 	$('pre#show-express').text($('pre#show-express').val() + num);
// }

// var btns = document.getElementsByName('button');
// console.log(btns);
// console.log(btns.length);
// for(var i = 0; i < btns.length; i ++){
// 	console.log(btns[i].innerText);
// 	btns[i].onclick = function(){
// 		console.log(this);
// 	// var $this = $(this);
// 		var num = this.text();
// 		$('pre#show-express').text($('pre#show-express').val() + num);
// 	}
// }
$(document).ready(function(){
	$('#input-btns').hide();
	$('#show-express').change(function() {
		var express = $(this).val();
		console.log(express);
		var result = eval(express);
		console.log(result);
		$('#show-result').text(result);
	});
});