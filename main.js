// animation apparition au scroll

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", ()=>{

cards.forEach(card => {

let top = card.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

card.style.opacity = "1";
card.style.transform = "translateY(0)";

}

});

});

const elements = document.querySelectorAll(".card,.software-item");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

elements.forEach(el=>observer.observe(el));

// Menu burger toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('header nav');
if(navToggle && nav){
	navToggle.addEventListener('click', ()=>{
		nav.classList.toggle('open');
		navToggle.classList.toggle('open');
	});
	// close menu when clicking a link
	nav.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
		nav.classList.remove('open');
		navToggle.classList.remove('open');
	}));
}

// calculate header height and set CSS variable so sections start below header
function updateHeaderHeightVar(){
  const header = document.querySelector('header');
  if(!header) return;
  const h = header.getBoundingClientRect().height;
  document.documentElement.style.setProperty('--header-h', `${Math.ceil(h)}px`);
}

window.addEventListener('load', updateHeaderHeightVar);
window.addEventListener('resize', ()=>{
  // small debounce
  clearTimeout(window._updHdr);
  window._updHdr = setTimeout(updateHeaderHeightVar, 120);
});