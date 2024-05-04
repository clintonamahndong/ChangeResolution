function calculateChange() {
  const amount = parseInt(document.getElementById('amount').value);
  const price = parseInt(document.getElementById('price').value);
  const changeResult = document.getElementById('changeResult');

  if (amount <= 0 || price <= 0 || price > amount) {
    changeResult.innerHTML = '<p>Please enter valid amounts.</p>';
    return;
  }

  const changeAmount = amount - price;
  const change = calculateChangeRecursive(changeAmount);

  if (change === '') {
    changeResult.innerHTML = '<p>No change due.</p>';
  } else {
    changeResult.innerHTML = `<p>Change breakdown:</p><ul>${change}</ul>`;
  }
}

function calculateChangeRecursive(amount) {
  const denominations = [10000, 5000, 2000, 1000, 500, 100, 50, 25];
  let change = '';

  for (const denom of denominations) {
    if (amount >= denom) {
      const count = Math.floor(amount / denom);
      change += `<li>${count} x ${denom} FCFA</li>`;
      amount %= denom;
    }
  }

  return change;
}
