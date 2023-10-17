// Recupera os dados do paciente do localStorage
var pacienteData = JSON.parse(localStorage.getItem('formData'));

// Verifica se o array de tratamentos existe, se não, inicializa-o
if (!pacienteData.tratamentos) {
  pacienteData.tratamentos = [];
}
// Cria um objeto para armazenar os dados do tratamento
var tratamentoData = {
  nomeTratamento: document.getElementById('nomeTratamento').value,
  medicamentos: document.getElementById('medicamentos').value,
  receita: document.getElementById('receita').files[0].name,
  procedimentos: document.getElementById('procedimentos').value,
  duracao: document.getElementById('duracao').value
};

// Adiciona o objeto de tratamento ao array de tratamentos do paciente
pacienteData.tratamentos.push(tratamentoData);

// Converte o objeto atualizado em uma string JSON
var json = JSON.stringify(pacienteData);

// Armazena a string JSON atualizada em localStorage
localStorage.setItem('formData', json);
console.log()