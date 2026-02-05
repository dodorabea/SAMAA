const tll = gsap.timeline({
    paused: "true"
});
tll.to("#percent, #bar",{
    duration:.2,
    opacity: 0,
    zIndex: -1
});
tll.to("#preloader",{
    duration: .8,
    width: "0%"
});
tll.from(".container_loading",{
    duration: 1.5,
    y: "-150%"
},"-=.2");
tll.to(".container_loading .content-intro-section",{
    opacity:1,
    duration: 1.5,
   
  
},"-=.2");
var width = 1;
var bar = document.getElementById("barconfrm");
var id;
function move(){
    id = setInterval(frame,10);

}
function frame(){
    if(width>=100){
        clearInterval(id);
        tll.play();
    }
    else{
        width++;
        bar.style.width = width + "%";
        document.getElementById("percent").innerHTML = width + "%";
    }
}
/*====================Menue================================*/

const open = document.querySelector('.container_nav');
		const close = document.querySelector('.close');
		var tl = gsap.timeline({ defaults: { duration: .3, ease: 'expo.inOut' } });
		open.addEventListener('click', () => {
			if (tl.reversed()) {
				tl.play();
			} else {
				tl.to('nav', { right: 0 })
					.to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: 0 }, '-=0')
                    .to('nav  p', { opacity: 1, pointerEvents: 'all', stagger: 0 }, '-=0')
					.to('.close', { opacity: 1, pointerEvents: 'all' }, "-=0")
					.to('.collapsed_logo img', { opacity: 1 }, '-=0');
			}
		});

		close.addEventListener('click', () => {
			tl.reverse();
		});


       
          
/*=================================scroll header=======================*/
ScrollTrigger.create({
    start: 'top -70',
    end: 99999,
    toggleClass: {
        className: 'header--scrolled',
        targets: '.header'
    }
});
/*=======================AOS====================*/
