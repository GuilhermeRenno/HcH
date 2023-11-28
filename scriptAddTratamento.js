
// Cria um objeto para armazenar os dados do tratamento
var tratamentoData = {
  nomeTratamento: document.getElementById('nomeTratamento').value,
  medicamentos: document.getElementById('medicamentos').value,

  procedimentos: document.getElementById('procedimentos').value,
  duracao: document.getElementById('duracao').value
};

// Envia os dados do tratamento para a API
fetch('http://127.0.0.1:8080/tratamento', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(tratamentoData)
})
.then(resposta => resposta.json())
.then(dados => {
  console.log('Dados do tratamento enviados com sucesso:', dados);
})
.catch(erro => console.error('Erro:', erro));
