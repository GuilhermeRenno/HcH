
//por favor, depois de fechar o ducumento,ao abrir dnv usar o clear para limpar o arquivo json local antigo
//localStorage.clear();

// pega o fomulario
var form = document.getElementById('addPaciente');

// verifica o arquivo de edicao
var editDados = JSON.parse(localStorage.getItem('editDados'));
if (editDados) {
  // preenche com o que tem no arquivo de edicao 
  for (var preenche in editDados) {
    if (form.elements.namedItem(preenche)) {
      form.elements.namedItem(preenche).value = editDados[preenche];
    }
  }
}

// submit e evitar que a pagina recarregue 
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // lista pra armazenar os dados
  var dados = {};

  // laco para pegar os itens do forms
  for (var i = 0; i < form.elements.length; i++) {

    // condicional, onde pega so se for um input e tem um nome
    if (form.elements[i].tagName === 'INPUT' && form.elements[i].name) {
      dados[form.elements[i].name] = form.elements[i].value;
    }
  }

 // pega os que ja tiver salvo, pra manter a lista completa e se nao tiver nada seta como vazio
 var existingDados = JSON.parse(localStorage.getItem('formData')) || [];

 if (editDados) {

    // achar pelo indice na lista ao editar
    var index = existingDados.findIndex(function(item) {
      return JSON.stringify(item) === JSON.stringify(editDados);
    });

    // substituir o antigo pelo novo
    existingDados[index] = dados;

    // limpar a variavel de edicao depois de editar 
    localStorage.removeItem('editDados');
  } else {

    // se nao for edicao, adiciona os dados normalmente
    existingDados.push(dados);
  }

  // joga tudo no JSON pra pegar do outro lado
  localStorage.setItem('formData', JSON.stringify(existingDados));

   // manda pra pagina do medico 
   window.location.href = 'PagMedico.html';
   
});