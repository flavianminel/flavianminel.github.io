(function(){
  var u='minel.flavian', d='gmail.com', m=document.getElementById('mail');
  if(m){var a=document.createElement('a'); a.href='mailto:'+u+'@'+d; a.textContent=u+'@'+d; m.innerHTML=''; m.appendChild(a);}
  document.querySelectorAll('[data-theme-toggle]').forEach(function(b){
    b.addEventListener('click',function(){
      var r=document.documentElement, cur=r.getAttribute('data-theme');
      if(!cur){cur=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}
      var next=cur==='dark'?'light':'dark'; r.setAttribute('data-theme',next);
      try{localStorage.setItem('theme',next);}catch(e){}
    });
  });
  var links=[].slice.call(document.querySelectorAll('nav a'));
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(l){l.setAttribute('aria-current', l.getAttribute('href')==='#'+e.target.id?'true':'false');});}});},{rootMargin:'-30% 0px -60% 0px'});
    document.querySelectorAll('main section').forEach(function(s){io.observe(s);});
  }
})();
