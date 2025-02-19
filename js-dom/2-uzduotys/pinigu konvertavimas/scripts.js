let valiutos = [
    { id: 'usd',
        name: "Doleriai", 
        shortName: "USD",
      rates: [
        {
            curencyId: 'eur',
            rate: 0.97
        },
        {
            curencyId: 'rub',
            rate: 120
        }
      ]
    },
    
    { id: 'eur',
        name: "Eurai",
         shortName: "EUR" ,
         rates: [
            {
                curencyId: 'usd',
                rate: 0.97
            },
            {
                curencyId: 'rub',
                rate: 120
            }
          ]
        },

    { id: 'rub',
        name: "Rubliai",
         shortName: "RUB" ,
         rates: [
            {
                curencyId: 'eur',
                rate: 0.97
            },
            {
                curencyId: 'usd',
                rate: 120
            }
          ]
        }
];

function addDataIntoDropdownShortName(items) {
    document.querySelector('.currency-from').innerHTML += `
        <select id="valiuta" name="valiuta">
            ${items.map(item => {
                return `<option value='${item.id}'>${item.shortName}</option>`;
            }).join('')}
        </select>
    `;
}

function addDataIntoDropdownName(items) {
    document.querySelector('.currency-to').innerHTML += `
        <select id="to-valiuta" name="to-valiuta">
            ${items.map(item => {
                return `<option value='${item.id}'>${item.name}</option>`;
            }).join('')}
        </select>
    `;
}

addDataIntoDropdownShortName(valiutos);
addDataIntoDropdownName(valiutos);

document.querySelector('.convert-button').addEventListener('click', () => {
    let currencyFromValue = document.getElementById('cash-input').value;
    let fromSelectValue = document.getElementById('valiuta').value;
    let toSelectValue = document.getElementById('to-valiuta').value;

    if (fromSelectValue === toSelectValue || !currencyFromValue) {
        return;
    }

    let currencyRate = valiutos.find(currency => currency.id === fromSelectValue).rates.find(rate => rate.currencyId === toSelectValue).rate;     
    let fromName = currencies.find(currency => currency.id === fromSelectValue).name;
    let toName = currencies.find(currency => currency.id === toSelectValue).name;
    let changedCurrency = currencyFromValue * currencyRate;

    let changingResult = `${currencyFromValue} ${fromName} yra ${changedCurrency} ${toName}`;
    let rateResult = `santykis: 1 ${fromName} = ${currencyRate} ${toName}`;
});   