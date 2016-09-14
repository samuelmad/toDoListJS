const input = document.getElementsByTagName('input')[0];
const boton = document.getElementsByTagName('button')[0];
const listado = document.getElementsByTagName('ul')[0];
const toDoList = [];

boton.addEventListener('click', function(e){
  if(input.value.length>0){
    toDoList.push(input.value);
    input.value = "";
    render();
    e.stopPropagation();
  }
});
listado.addEventListener('click', function(e){
  console.log(e.target)
  if(e.target.className=='terminado'){
    console.log('ya esta')
    e.stopPropagation();
    return;
  }
  e.target.className = 'terminado';
  e.stopPropagation();
});

function render(){
  listado.innerHTML = toDoList.map(x =>`<li>${x}</li>`).join(''); 
};
