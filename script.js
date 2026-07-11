(function(){
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
