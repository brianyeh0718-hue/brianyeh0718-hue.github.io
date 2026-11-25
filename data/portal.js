/* 依 subjects.js 產生科目區塊；每個科目網站的冊別與章節從該網站的 data/chapters.js 自動讀取 */
(function(){
  var esc=function(s){var d=document.createElement('div');d.textContent=s==null?'':String(s);return d.innerHTML;};
  var P=window.PORTAL, nav=document.getElementById('subjNav'), box=document.getElementById('subjects');
  nav.innerHTML=P.subjects.map(function(s){return '<a href="#'+s.id+'" style="--sc:'+s.color+'"><b>'+s.icon+'</b>'+esc(s.name)+'</a>';}).join('');
  box.innerHTML=P.subjects.map(function(s){
    var cards=s.sites.length?s.sites.map(function(t){
      return '<div class="site" id="site-'+t.repo+'"><div class="site-head"><a href="/'+t.repo+'/">'+esc(t.name)+'</a><span class="badge">'+esc(t.note||'')+'</span></div>'
        +'<div class="site-body"><div class="loading">讀取章節中…</div></div><a class="go" href="/'+t.repo+'/">進入'+esc(t.name)+'網站 →</a></div>';
    }).join(''):'<div class="site soon"><div class="site-head"><span>準備中</span></div><div class="site-body"><p class="d">之後上線的'+esc(s.name)+'章節會出現在這裡。</p></div></div>';
    return '<section class="subj" id="'+s.id+'" style="--sc:'+s.color+'"><h2><span class="ic">'+s.icon+'</span>'+esc(s.name)+'</h2><div class="sites">'+cards+'</div></section>';
  }).join('');
  P.subjects.forEach(function(s){s.sites.forEach(function(t){
    var body=document.querySelector('#site-'+t.repo+' .site-body');
    fetch('/'+t.repo+'/data/chapters.js',{cache:'no-cache'}).then(function(r){if(!r.ok)throw 0;return r.text();}).then(function(code){
      var w={};new Function('window',code)(w);var books=(w.SITE&&w.SITE.books)||[];
      var html='';
      books.forEach(function(b){
        var ready=b.chapters.filter(function(c){return c.ready;});
        html+='<div class="bk"><a class="bk-t" href="/'+t.repo+'/'+b.path+'">'+esc(b.title)+'</a><span class="bk-g">'+esc(b.grade||'')+'・已上線 '+ready.length+'</span>';
        html+=ready.length?'<div class="chips">'+ready.map(function(c){return '<a class="chip" href="/'+t.repo+'/'+c.path+'"><b>'+esc(c.no)+'</b>'+esc(c.title)+'</a>';}).join('')+'</div>':'<div class="d">章節準備中</div>';
        html+='</div>';
      });
      body.innerHTML=html||'<p class="d">章節準備中</p>';
    }).catch(function(){body.innerHTML='<p class="d">（無法讀取章節清單，請直接進入網站）</p>';});
  });});
})();
