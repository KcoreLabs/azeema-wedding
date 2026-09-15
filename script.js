const ceremony = new Date('2026-12-27T10:30:00+05:30').getTime();
function updateCountdown(){
  const remaining = Math.max(0, ceremony-Date.now());
  const values = [Math.floor(remaining/86400000),Math.floor(remaining/3600000)%24,Math.floor(remaining/60000)%60,Math.floor(remaining/1000)%60];
  ['days','hours','minutes','seconds'].forEach((id,i)=>document.getElementById(id).textContent=String(values[i]).padStart(2,'0'));
  if(!remaining) document.getElementById('countdown-label').textContent='WITH PRAYERS FOR A BEAUTIFUL LIFE TOGETHER';
}
updateCountdown();setInterval(updateCountdown,1000);
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  document.documentElement.classList.add('js-motion');
  const observer = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));
}
