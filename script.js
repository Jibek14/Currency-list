fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1')
    .then(response => response.json())
    .then(data => {
        const tbody = document.getElementById('currency-table');

        data.forEach((coin, index) => {
            const tr = document.createElement('tr');

            if (index < 5) {
                tr.classList.add('blue-background');
            }

            if (coin.symbol === 'usdt') {
                tr.classList.add('green-background');
            }

            const idTd = document.createElement('td');
            idTd.textContent = coin.id;
            tr.appendChild(idTd);

            const symbolTd = document.createElement('td');
            symbolTd.textContent = coin.symbol;
            tr.appendChild(symbolTd);

            const nameTd = document.createElement('td');
            nameTd.textContent = coin.name;
            tr.appendChild(nameTd);

            tbody.appendChild(tr);
        });
    })
    .catch(error => console.error('Error:', error));
