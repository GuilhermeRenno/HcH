function enviaDadosTratamento(event){

  // Previne o comportamento padrão de enviar o formulário
  event.preventDefault();

  // Cria um objeto para armazenar os dados do formulário
  var formData = {
    nomeTratamento: document.getElementById('nomeTratamento').value,
    medicamentos: document.getElementById('medicamentos').value,
    receita: document.getElementById('receita').files[0].name,
    procedimentos: document.getElementById('procedimentos').value,
    duracao: document.getElementById('duracao').value
  };

  // Converte o objeto em uma string JSON
  var json = JSON.stringify(formData);

  // Armazena a string JSON em localStorage
  localStorage.setItem('formData', json);
    // Redireciona para a nova página
    window.location.href = 'PagPaciente.html';
}
