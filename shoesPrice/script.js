function sumShoes(leather, sole) {
	const workPrise = 350;
  const material = 200;
  
  return parseInt(leather) + parseInt(sole) + workPrise + material
}

function handleBtnClick() {
  const leatherValue = leatherInput.value //вытащил значение с ценой кожи
  const soleValue = soleInput.value //вытащил значение с ценой подошвы
  const result = sumShoes(leatherValue, soleValue)//присвоили полученные значения пере
  
  price.innerText = result//обратились к свойству spana которое позволяет получать текстовое содержимое элементов
}

const leatherInput = document.getElementById('leather') //вытащил инпут с ценой кожи
const soleInput = document.getElementById('sole') //вытащил инпут с ценой подошвы
const btn = document.querySelector('.btn') //вытащили кнопку вычислить цену 
const price = document.getElementById('price')// вытащили спан с ценой

btn.addEventListener('click', handleBtnClick)
