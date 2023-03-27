function addNumber(number) {
    document.getElementById('result').value += number;
  }
  
  function addOperator(operator) {
    var currentValue = document.getElementById('result').value;
    
    if (currentValue !== '' && currentValue.slice(-1) !== operator) {
      document.getElementById('result').value += operator;
    }
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function backspace() {
    var currentValue = document.getElementById('result').value;
    
    document.getElementById('result').value = currentValue.slice(0, -1);
  }
  
  function calculate() {
    var expression = document.getElementById('result').value;
    var result = eval(expression);
    
    document.getElementById('result').value = result;
  }
