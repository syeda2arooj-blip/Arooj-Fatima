const nav=document.getElementById('nav'),menu=document.getElementById('menu');menu.onclick=()=>nav.classList.toggle('open');document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));

const themeToggle=document.getElementById("themeToggle");
if(localStorage.getItem("arooj-theme")==="dark")document.body.classList.add("theme-dark");
function setThemeIcon(){if(themeToggle)themeToggle.textContent=document.body.classList.contains("theme-dark")?"☀":"☾";}
setThemeIcon();
themeToggle?.addEventListener("click",()=>{
 document.body.classList.toggle("theme-dark");
 localStorage.setItem("arooj-theme",document.body.classList.contains("theme-dark")?"dark":"light");
 setThemeIcon();
});
