const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');if(toggle){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open?'true':'false')})}document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav?.classList.remove('open')}));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
const year=document.querySelector('[data-year]');if(year)year.textContent=new Date().getFullYear();
function serviceForm(service){const s=document.querySelector('#service');if(s){s.value=service;document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'});}}
window.serviceForm=serviceForm;
