fetch('http://127.0.0.1:8080/paciente')
.then(resposta => resposta.json())
.then(arrayDados => {

  //  lista para escrever os dados
  var lista = document.getElementById('minhaLista');
 
  // Agora, crie um elemento de lista para cada objeto de dados e adicione-o à lista
  for (var i = 0; i < arrayDados.length; i++) {
    
    var dados = arrayDados[i];

    var li = document.createElement('li');
    li.id = i; // Adicione um id ao elemento li para referência futura
    li.className = 'item'; // Adicione uma classe ao elemento li para estilização
  
    // Adicione o nome ao elemento li
    var nome = document.createElement('div');
    nome.className = 'nome'; // Adicione a classe 'nome'
    nome.textContent = 'Nome: ' + dados['nome'];
    li.appendChild(nome);
  
     // Adiciona os outros dados na div oculta
     var divDados = document.createElement('div');
    divDados.className = 'dados'; // nome da div oculta
    divDados.style.display = 'none';  
    // Adiciona o email na div detalhes
    var email = document.createElement('p');
    email.textContent = 'Email: ' + dados['email'];
    divDados.appendChild(email);
  
    // adiciona o endereço na div detalhes
    var endereco = document.createElement('p');
    endereco.textContent = 'Endereço: ' + dados['endereco'];
    divDados.appendChild(endereco);
  
    // Adiciona o celular na div detalhes
    var celular = document.createElement('p');
    celular.textContent = 'Celular: ' + dados['celular'];
    divDados.appendChild(celular);
  
    // Adiciona o tipo sanguíneo na div detalhes
    var tipoSanguineo = document.createElement('p');
    tipoSanguineo.textContent = 'tipoSanguineo: ' + dados['tipoSanguineo'];
    divDados.appendChild(tipoSanguineo);

    li.appendChild(divDados);

// Verifica se o array de tratamentos existe, se não, incia vazio
if (!dados.tratamentos) {
  dados.tratamentos = ['teste'];
}
// Cria uma nova div para os tratamentos
var divTratamentos = document.createElement('div');
divTratamentos.className = 'tratamentos'; // nome da div de tratamentos
divTratamentos.style.display = 'none'; // inicialmente oculta


//adiciona os tratamentos na div tratamento
 for (var j = 0; j < dados.tratamentos.length; j++) {
  var tratamentoData = dados.tratamentos[j];
  var tratamentoDiv = document.createElement('div');

  var nomeTratamento = document.createElement('p');
  nomeTratamento.textContent = 'Nome do Tratamento: ' + tratamentoData['nomeTratamento'];
  tratamentoDiv.appendChild(nomeTratamento);

  var medicamentos = document.createElement('p');
  medicamentos.textContent = 'Medicamentos: ' + tratamentoData['medicamentos'];
  tratamentoDiv.appendChild(medicamentos);

  var receita = document.createElement('p');
  receita.textContent = 'Receita: ' + tratamentoData['receita'];
  tratamentoDiv.appendChild(receita);

  var procedimentos = document.createElement('p');
  procedimentos.textContent = 'Procedimentos: ' + tratamentoData['procedimentos'];
  tratamentoDiv.appendChild(procedimentos);

  var duracao = document.createElement('p');
  duracao.textContent = 'Duração: ' + tratamentoData['duracao'];
  tratamentoDiv.appendChild(duracao);

  divTratamentos.appendChild(tratamentoDiv);
}

  li.appendChild(divTratamentos);


    // Botão de tratamentos que mostra ou oculta os tratamentos quando clicado
var tratamentosButton = document.createElement('button');
tratamentosButton.textContent = 'Tratamentos';
tratamentosButton.addEventListener('click', function(e) {
  var tratamentos = e.target.parentElement.getElementsByClassName('tratamentos')[0];
  if (tratamentos.style.display === 'none') {
    tratamentos.style.display = 'block';
  } else {
    tratamentos.style.display = 'none';
  }
});
li.appendChild(tratamentosButton);
  
    //botão de detalhes que mostra ou oculta os outros dados quando clicado
    var detalhesButton = document.createElement('button');
    detalhesButton.textContent = 'Detalhes';
    detalhesButton.addEventListener('click', function(e) {
      var dados = e.target.parentElement.getElementsByClassName('dados')[0];
      if (dados.style.display === 'none') {
        dados.style.display = 'block';
      } else {
        dados.style.display = 'none';
      }
    });
    li.appendChild(detalhesButton);
  
    // botao de excluir
var deleteButton = document.createElement('button');
deleteButton.textContent = 'Excluir';
deleteButton.addEventListener('click', function(e) {

  // botão excluir clicado, remove o item da lista e atualiza o armazenamento local
  arrayDados.splice(e.target.parentElement.id, 1);
  localStorage.setItem('formData', JSON.stringify(arrayDados));

  // remove da lista
  e.target.parentElement.remove();

  // faz uma requisição DELETE para a API para excluir o paciente
  fetch('http://127.0.0.1:8080/paciente/' + dados.codigo, {
    method: 'DELETE'
  })
  .then(resposta => {
    if (resposta.ok) {
      console.log('Paciente excluído com sucesso');
    } else {
      console.error('Erro ao excluir paciente:', resposta);
    }
  })
  .catch(erro => console.error('Erro:', erro));
});
li.appendChild(deleteButton);
  
    // botao de editar
    var editButton = document.createElement('button');
    editButton.textContent = 'Editar';

   // Quando o botão 'Editar' é clicado
editButton.addEventListener('click', function(e) {
  // Armazena os dados do paciente localmente para edição
  var pacienteDados = arrayDados[e.target.parentElement.id];
  localStorage.setItem('editDados', JSON.stringify(pacienteDados));

  // Redireciona o usuário para a página de edição
  window.location.href = 'PadAddPacientes.html';
});
    li.appendChild(editButton);
  
    lista.appendChild(li);
  }
  
  // botao para voltar a página do formulário
  document.getElementById('voltar').addEventListener('click', function() {
    window.location.href = 'PadAddPacientes.html';
  });
})
.catch(erro => console.error('Erro:', erro));