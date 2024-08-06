// ------------------------------------------------------------------ Cursor
let cursor = document.querySelector('#cursor')
let customCursor = document.querySelectorAll('#custom-cursor')
document.querySelector('body').addEventListener('mousemove',(e)=>{
    gsap.to(cursor,{
        x:(e.x - 10),
        y:(e.y - 120)
    })
})

customCursor.forEach(element => {
    element.addEventListener('mouseenter',(e)=>{
        gsap.to(cursor,{
            display: 'flex'
        })
    })
    element.addEventListener('mouseleave',(e)=>{
        gsap.to(cursor,{
            display: 'none'
        })
    })
});

// ------------------------------------------------------------------ loader animation
gsap.to("#loader",{
    height: 0,
    duration: 1,
    delay: 1.8
})
for (let i = 1; i < 10; i++) {
    setTimeout(() => {
        gsap.from(`.load-img-${i}`,{
            display: "block",
            duration:0.2,
        })  
    }, i*200);
}
for (let i = 1; i < 10; i++) {
    setTimeout(() => {
        gsap.to(`.load-img-${i}`,{
            display: "none",
            duration:0.2,
        })  
    }, (i*200)+200);
}

// ------------------------------------------------------------------ Navbar scroll hide/show
var lastScrollTop;
navbar = document.getElementById('navbar');

let navOnScroll = (scrollTop)=>{
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        navbar.style.top='-100px';
    }
    else{
        navbar.style.top='0';
    }
    lastScrollTop = scrollTop;
}

window.addEventListener('scroll',navOnScroll);

// ------------------------------------------------------------------ Nav button opening/closing animation for small screen
let tlBtn1 = new gsap.timeline()
let tlBtn2 = new gsap.timeline()
tlBtn1.to("#nav-btn #line-1",{
    duration:0.2,
    margin:0,
})
tlBtn1.to("#nav-btn #line-1",{
    duration:0.7,
    transform: "rotate(45deg) translate(-8px, 3px)",
})
tlBtn2.to("#nav-btn #line-2",{
    duration:0.2,
    margin:0,
})
tlBtn2.to("#nav-btn #line-2",{
    duration:0.7,
    transform: "rotate(-45deg) translate(0px, -12px)",
})
tlBtn1.paused(true)
tlBtn2.paused(true)

// ------------------------------------------------------------------ nav Show Hide animation for small screen
let navSmall = new gsap.timeline()
navSmall.to('#nav-small', {
    duration:0.7,
    x:"0%"
})
navSmall.from('#nav-small ul li a',{
    duration:0.5,
    y:50,
    stagger:0.1
})
navSmall.paused(true)

// ------------------------------------------------------------------ Nav button for small screen
let navBtn = document.getElementById('nav-btn');
navBtn.addEventListener('click', () => {
    if (navBtn.classList.contains('open')) {
        tlBtn1.play()
        tlBtn2.play()
        navSmall.play()
        window.removeEventListener('scroll',navOnScroll)
    } else {
        tlBtn1.reverse();
        tlBtn2.reverse();
        navSmall.reverse()
        window.addEventListener('scroll',navOnScroll)
    }
    navBtn.classList.toggle('open');
});

// ------------------------------------------------------------------ Hello animation
gsap.from("#hero h1 span",{
    duration: 1,
    delay:2.6,
    y:60,
    opacity:0,
    stagger:0.1
})
// ------------------------------------------------------------------ brand video
gsap.to("#brand-video",{
    duration: 1,
    width: "100%",
    scrollTrigger:{
        trigger:"#brand-video",
        scroller: "body",
        scrub: 2
    }
})
// ------------------------------------------------------------------ tagline
gsap.from("#tagline h2 span",{
    duration: 1,
    y:100,
    delay:0.5,
    scrollTrigger:{
        trigger:"#tagline h2",
        scroller: "body",
        scrub: 2
    }
})
// ------------------------------------------------------------------ Experience
gsap.to("#expertise h1",{
    x:"-150%",
    scrollTrigger:{
        trigger:"#expertise",
        scroller:"body",
        start:"top -0%",
        end:"top -400%",
        scrub:1,
        pin:true
    }
})
// ------------------------------------------------------------------ get in touch
gsap.from("#last-heading span",{
    duration: 2,
    y:100,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#last-heading",
        scroller: "body",
        scrub: 2
    }
})