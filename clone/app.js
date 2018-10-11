(function(){

	var $menuToggle = document.querySelector('.toggle');
	
	$menuToggle.addEventListener('click',function(){
		document.querySelector('[data-js=menu-ul]').classList.toggle('active');
	});
})()