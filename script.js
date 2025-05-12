const display = document.getElementById('display');
const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', e => {
  const btn = e.target;
  const action = btn.dataset.action;
  const btnContent = btn.textContent;
  let displayedNum = display.textContent;

  if (!action) {
    // dígito
    display.textContent = (displayedNum === '0') ? btnContent : displayedNum + btnContent;
  } else if (action === 'decimal') {
    if (!displayedNum.includes('.')) {
      display.textContent = displayedNum + '.';
    }
  } else if (action === 'clear') {
    display.textContent = '0';
  } else if (action === 'delete') {
    display.textContent = (displayedNum.length > 1)
      ? displayedNum.slice(0, -1)
      : '0';
  } else if (action === 'operator') {
    display.dataset.previous = displayedNum;
    display.dataset.operator = btnContent;
    display.textContent = '0';
  } else if (action === 'calculate') {
    const prev = parseFloat(display.dataset.previous);
    const curr = parseFloat(displayedNum);
    const op = display.dataset.operator;
    let result = 0;

    switch(op) {
      case '+': result = prev + curr; break;
      case '−': result = prev - curr; break;
      case '×': result = prev * curr; break;
      case '÷': result = prev / curr; break;
    }

    display.textContent = result;
    delete display.dataset.previous;
    delete display.dataset.operator;
  }
});
