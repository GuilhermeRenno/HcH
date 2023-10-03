  // dados do formulário convertidos de volta em um array
  var arrayDados = JSON.parse(localStorage.getItem('formData'));

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
    var tipo_sanguineo = document.createElement('p');
    tipo_sanguineo.textContent = 'Tipo Sanguíneo: ' + dados['tipo_sanguineo'];
    divDados.appendChild(tipo_sanguineo);
  
    li.appendChild(divDados);
  
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
    });
    li.appendChild(deleteButton);
  
    // botao de editar
    var editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.addEventListener('click', function(e) {
  
      // botao de edicao clicado, armazena os dados localmente para edição
      localStorage.setItem('editDados', JSON.stringify(arrayDados[e.target.parentElement.id]));
      // envia o usuario para a pagina de edicao
      window.location.href = 'PadAddPacientes.html';
    });
    li.appendChild(editButton);
  
    lista.appendChild(li);
  }
  
  // botao para voltar a página do formulário
  document.getElementById('voltar').addEventListener('click', function() {
    window.location.href = 'PadAddPacientes.html';
  });