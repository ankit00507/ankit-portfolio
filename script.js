/* Portfolio behaviour. You normally don't need to edit this file —
   add your projects in data.js instead. */
(function(){
  const $ = (s,r=document)=>r.querySelector(s);
  const grid=$('#grid'), filters=$('#filters'), modal=$('#modal'), body=$('#m-body');
  let current='All', list=[], openIndex=0;

  // Escape text so project data can't break the page
  const esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

  /* ---- Filter buttons (built from the "app" field in data.js) ---- */
  const apps=['All',...new Set(PROJECTS.map(p=>p.app))];
  filters.innerHTML=apps.map(a=>`<button type="button" aria-pressed="${a==='All'}" data-app="${esc(a)}">${esc(a==='All'?'All work':a)}</button>`).join('');
  filters.addEventListener('click',e=>{
    const b=e.target.closest('button'); if(!b) return;
    current=b.dataset.app;
    filters.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x===b));
    render();
  });

  /* ---- Project grid ---- */
  function render(){
    list=PROJECTS.filter(p=>current==='All'||p.app===current);
    grid.innerHTML=list.map((p,i)=>`
      <button type="button" class="tile ${esc(p.size||'wide')}" data-i="${i}" aria-label="Open ${esc(p.title)}">
        <div class="img"><img src="${esc(p.thumb)}" alt="${esc(p.title)} — ${esc(p.category)}" loading="lazy"></div>
        <div class="meta"><h3>${esc(p.title)}</h3><span>${esc(p.category)}, ${esc(p.year)}</span></div>
        <span class="app">${esc(p.app)}</span>
      </button>`).join('');
  }
  grid.addEventListener('click',e=>{const t=e.target.closest('.tile'); if(t) show(+t.dataset.i);});

  /* ---- Project detail modal ---- */
  function show(i){
    openIndex=(i+list.length)%list.length;
    const p=list[openIndex];
    body.innerHTML=`
      <p class="m-sub">${esc(p.category)}, ${esc(p.year)}</p>
      <h2 id="m-title">${esc(p.title)}</h2>
      <p>${esc(p.description)}</p>
      <div class="m-imgs">${[p.thumb,...p.gallery].map((g,n)=>`<img src="${esc(g)}" alt="${esc(p.title)} mockup ${n+1}" loading="lazy">`).join('')}</div>
      <div class="m-cols"><div><h4>Design process</h4><p>${esc(p.process)}</p></div>
      <div><h4>Tools used</h4><p>${p.tools.map(esc).join(', ')}</p></div></div>
      <div class="m-nav"><button type="button" data-d="-1">Previous project</button><button type="button" data-d="1">Next project</button></div>`;
    if(!modal.open) modal.showModal();
    modal.scrollTop=0;
  }
  body.addEventListener('click',e=>{const b=e.target.closest('[data-d]'); if(b) show(openIndex+ +b.dataset.d);});
  $('#close').addEventListener('click',()=>modal.close());
  modal.addEventListener('click',e=>{if(e.target===modal) modal.close();}); // click outside to close
  document.addEventListener('keydown',e=>{if(!modal.open) return; if(e.key==='ArrowRight') show(openIndex+1); if(e.key==='ArrowLeft') show(openIndex-1);});

  /* ---- Skills ---- */
  const cloud=$('#skills'), note=$('#skill-note');
  cloud.innerHTML=SKILLS.map(([n],i)=>`<button type="button" aria-pressed="false" data-i="${i}">${esc(n)}</button>${i<SKILLS.length-1?' ':''}`).join('');
  const setNote=i=>{note.textContent=SKILLS[i][1]};
  cloud.addEventListener('mouseover',e=>{const b=e.target.closest('button'); if(b) setNote(b.dataset.i);});
  cloud.addEventListener('click',e=>{const b=e.target.closest('button'); if(!b) return;
    cloud.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x===b)); setNote(b.dataset.i);});

  /* ---- Nav: mobile menu, shadow on scroll, active link ---- */
  const nav=$('#nav'), burger=$('#burger'), menu=$('#menu');
  burger.addEventListener('click',()=>{const o=menu.classList.toggle('open'); burger.setAttribute('aria-expanded',o); burger.firstElementChild.textContent=o?'Close':'Menu';});
  menu.addEventListener('click',e=>{if(e.target.tagName==='A'){menu.classList.remove('open'); burger.setAttribute('aria-expanded',false); burger.firstElementChild.textContent='Menu';}});
  addEventListener('scroll',()=>nav.classList.toggle('stuck',scrollY>10),{passive:true});
  const links=[...menu.querySelectorAll('a[href^="#"]')];
  const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting)
    links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+en.target.id));}),{rootMargin:'-45% 0px -50% 0px'});
  ['home','work','about','contact'].forEach(id=>io.observe(document.getElementById(id)));

  $('#year').textContent=new Date().getFullYear();
  render();
})();
