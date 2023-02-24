import Swal from 'sweetalert2';

const container = document.getElementById('coins')
const seach = document.getElementById('seach')
const coin_name = document.getElementsByClassName('coin-name')

const getAllCoins = (keys, values) => {
  const valuesCoins = document.createElement('div')
  valuesCoins.classList.add('values-coins')
  container.appendChild(valuesCoins)

  const coinsNames = document.createElement('div')
  coinsNames.classList.add('coins-names');
  valuesCoins.appendChild(coinsNames)

  const coinsValues = document.createElement('div')
  valuesCoins.appendChild(coinsValues)

  const img = document.createElement('img');
  img.classList.add('icon-coin');
  img.src = 'imagens/coin.png';
  coinsNames.appendChild(img);

  const names = document.createElement('p');
  names.classList.add('keys');
  names.innerText = keys;
  coinsNames.appendChild(names);

  const money = document.createElement('p');
  money.classList.add('value');
  valuesCoins.appendChild(money);
  money.innerText = values;
}

const getCoins = () => {
  const valueMoney = document.getElementById('money').value;
  if (!valueMoney) {
    return alert('console')
  }
  fetch(`https://api.exchangerate.host/latest?base=${moeda.toUpperCase()}`)
    .then((response) => response.json())
    .then((data) => {
      coin_name.innerText = `Valores refetentes a 1 ${data.base}`;
      const rates = data.rates;
      const keys = Object.keys(rates)
      const values = Object.values(rates)

      if (keys.some((key) => key === valueMoney.toUpperCase())) {
        keys.forEach((key, index) => {
          getAllCoins(key, values[index].toFixed(3))
        })
      } else {
        coin_name.innerText = '';
      }

    })
}

seach.addEventListener('click', () => {
  seach.classList.add('selected');
  getCoins();
})