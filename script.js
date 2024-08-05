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

// Navbar scroll hide/show
var lastScrollTop;
navbar = document.getElementById('navbar');
window.addEventListener('scroll',function(){
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if(scrollTop > lastScrollTop){
    navbar.style.top='-100px';
}
else{
    navbar.style.top='0';
}
lastScrollTop = scrollTop;
});

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
// Hello animation
gsap.from("#hero h1 span",{
    duration: 1,
    delay:2.6,
    y:60,
    opacity:0,
    stagger:0.1
})
// brand video
gsap.to("#brand-video",{
    duration: 1,
    width: "100%",
    scrollTrigger:{
        trigger:"#brand-video",
        scroller: "body",
        scrub: 2
    }
})
// tagline
gsap.from("#tagline h2 span",{
    duration: 2,
    y:200,
    delay:0.8,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#tagline h2",
        scroller: "body",
        scrub: 2
    }
})
// Experience
gsap.to("#expertise h1",{
    x:"-130%",
    scrollTrigger:{
        trigger:"#expertise",
        scroller:"body",
        start:"top -0%",
        end:"top -400%",
        scrub:1,
        pin:true
    }
})
// get in touch
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