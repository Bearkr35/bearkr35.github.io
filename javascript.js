function powerClick(el){
    el.style.background='gold';
    el.style.color='red';
      }
function EasterEgg(){
  alert('🐜⚔   Вы нашли секрет  '   );
}
var headerState=false;


function Display(){
  const header=document.getElementById('1');
  header.style.display= headerState ? 'block' : 'none';
  headerState=!headerState;
}
var opacity=1;

function changeOpacity(el){
 
  opacity=opacity-0.1
  el.style.opacity=opacity
}

