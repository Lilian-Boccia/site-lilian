const reveals=[...document.querySelectorAll('.reveal')];
const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.12});
reveals.forEach(el=>io.observe(el));
const bar=document.querySelector('#scrollbar');
const paras=[...document.querySelectorAll('[data-parallax]')];
function onScroll(){
  const h=document.documentElement.scrollHeight-innerHeight;
  if(bar) bar.style.width=`${Math.max(0,Math.min(100,(scrollY/h)*100))}%`;
  if(matchMedia('(min-width: 981px)').matches){
    paras.forEach(el=>{const speed=parseFloat(el.dataset.parallax);el.style.transform=`translate3d(0,${scrollY*speed}px,0)`})
  } else {
    paras.forEach(el=>{el.style.transform='none'})
  }
}
document.addEventListener('scroll',onScroll,{passive:true});
window.addEventListener('resize',onScroll,{passive:true});
onScroll();
document.querySelectorAll('.accordion button').forEach(btn=>btn.addEventListener('click',()=>btn.classList.toggle('open')));
