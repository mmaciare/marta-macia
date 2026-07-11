(function(){
var root=document.documentElement;
var toggle=document.getElementById('themeToggle');
function applyTheme(){
var dark=root.getAttribute('data-theme')==='dark';
toggle.textContent=dark?toggle.getAttribute('data-light'):toggle.getAttribute('data-dark');
}
applyTheme();
toggle.addEventListener('click',function(){
var dark=root.getAttribute('data-theme')==='dark';
if(dark){root.removeAttribute('data-theme');}else{root.setAttribute('data-theme','dark');}
try{localStorage.setItem('marta_theme',dark?'light':'dark')}catch(e){}
applyTheme();
});
var m=location.pathname.match(/\/(en|ca)\//);
var here=m?m[1]:'es';
document.querySelectorAll('.lbtn').forEach(function(b){
var l=b.getAttribute('data-lang');
if(l===here)b.classList.add('on');
b.addEventListener('click',function(){
try{localStorage.setItem('marta_lang',l)}catch(e){}
var base=location.pathname.replace(/(en|ca)\/(index\.html)?$/,'').replace(/index\.html$/,'');
location.href=base+(l==='es'?'':l+'/');
});
});
})();
