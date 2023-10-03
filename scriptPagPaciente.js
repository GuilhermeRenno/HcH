// coloca o json na variavel
var data = JSON.parse(localStorage.getItem('formData'));

// encontrar tabela
var table = document.querySelector('.grid-item table');

// laco dos dados do array
for (var i = 0; i < data.length; i++) {
  // cria linha da tabela
  var row = document.createElement('tr');

  // Crie uma célula para cada propriedade do objeto
  for (var temp in data[i]) {
    var cell = document.createElement('td');
    cell.textContent = data[i][temp];
    row.appendChild(cell);
  }

  // Adicione a linha à tabela
  table.appendChild(row);
}