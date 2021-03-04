
// target element

// const menu = document.querySelector('.menu')
// var nav = document.querySelector('.dummy-nav')
// const exit = document.querySelector('.exit')

// excute function

// menu.addEventListener('click',() =>{
//     nav.style.right = 0
// });


// exit.addEventListener('click',() =>{
//     console.log('dipu');
//     nav.style.right = -120 +'%'
// });



$(document).ready(function() {


    $('.menu').click(() =>{
        $('.dummy-nav').css('right','0')
    });


    $('.exit').click(() =>{
        $('.dummy-nav').css('right','-120%')
    })
	/* This is basic - uses default settings */
	
    $('.fancy').fancybox();
    
    $('.video').fancybox()
	
	/* Using custom settings */
	
	// $("a#inline").fancybox({
	// 	'hideOnContentClick': true
	// });

	/* Apply fancybox to multiple items */
	
	// $("a.group").fancybox({
	// 	'transitionIn'	:	'elastic',
	// 	'transitionOut'	:	'elastic',
	// 	'speedIn'		:	600, 
	// 	'speedOut'		:	200, 
	// 	'overlayShow'	:	false
	});