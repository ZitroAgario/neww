$( document ).ready(function(){
	var cards=document.querySelectorAll('.card');

	for (var e of cards) {
		e.on("click", foo(cards.indexOf(e)))
	}

	

})
	function foo(i){
		console.log(i)
	}