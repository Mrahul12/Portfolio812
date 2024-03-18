

const typed = new Typed('.span', {
  strings: ["Web Designer.","Web Developer.", "Firebase Backend Developer.","Figma Designer."],
  typeSpeed: 150,
  backspeed:150,
  loop:true,
});


const aboutext=document.querySelector('.aboutext');
const texts = "A determined and passionate developer , I have completed Bachelor of technical degree (Computer Science) from Anand college of engineering and management kapurthala,punjab .Passionate about implementing and launching new projects , accept challenges for growth of the organization.";

let indexs = 0;
 function type()  {
  aboutext.textContent = texts.slice(0, indexs++);
  if (indexs <= texts.length) {
    setTimeout(type, 50);
  }
}

type();

// ===========toogle menu========

let toogles=document.querySelector('.toggle');
let closed=document.querySelector('.closed');
let nav=document.querySelector('nav');
toogles.addEventListener('click',()=>{
  if(nav.style.display='none'){
    toogles.style.display='none';
    nav.style.display='flex';
    closed.style.display='block';
   
  
  }
})
closed.addEventListener('click',()=>{
  if(nav.style.display='flex'){
    nav.style.display='none'
    toogles.style.display='block';
    closed.style.display='none';
     }
})

let body=document.querySelector('body');
body.addEventListener('contextmenu',(e)=>{
e.preventDefault();
})
body.addEventListener('selectstart',(e)=>{
e.preventDefault();
// let h=e.originalTarget.baseURI;
// h.select();
  
})




