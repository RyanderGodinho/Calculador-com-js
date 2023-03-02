const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');
const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const h2 = document.querySelector('h2');

function empaty(event){
  if(!n1.value || !n2.value){
    h2.textContent = 'Preencha os dois numeros';
  }
}

add.addEventListener('click', (event)=>{
  let calculo = parseFloat(n1.value) + parseFloat(n2.value);
  h2.textContent = `${calculo}`;
  empaty(event);
})
minus.addEventListener('click', (event)=>{
  let calculo = parseFloat(n1.value) - parseFloat(n2.value);
  h2.textContent = `${calculo}`;
  empaty(event);
})
divide.addEventListener('click', (event)=>{
  let calculo = parseFloat(n1.value) / parseFloat(n2.value);
  h2.textContent = `${calculo}`;
  empaty(event);
})
multiply.addEventListener('click', (event)=>{
  let calculo = parseFloat(n1.value) * parseFloat(n2.value);
  h2.textContent = `${calculo}`;
  empaty(event);
})