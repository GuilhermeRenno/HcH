
//var btnSalvar = document.querySelector("#btnSalvar");
//console.log(btnSalvar);

//btnSalvar.addEventListener("click",function (event){
   // event.preventDefault();
    
   // var paciente = document.querySelector("#addPaciente");
   // console.log(addPaciente.nome.value);
   // console.log(addPaciente.email.value);
   // console.log(addPaciente.endereco.value);
   // console.log(addPaciente.cep.value);

    
//})


// Primeiro, obtenha o formulário
//var form = document.getElementById('addPaciente');


//var btnSalvar = document.querySelector("#btnSalvar");

//form.addEventListener("click", function(e) {
 // e.preventDefault();


  //var lista = [];

 // //cada elemento do formulário
 // for (var i = 0; i < form.elements.length; i++) {

    // Se o elemento é um campo de entrada e tem um nome, adicione-o à lista

  //  if (form.elements[i].tagName === 'INPUT' && form.elements[i].name) {
   //   lista.push(form.elements[i].value);
   // }
  //}
//
  
 // console.log(lista);
//});

// Agora, vamos supor que você tenha uma div em sua outra página HTML onde você quer escrever os dados da lista
//var div = document.getElementById('listaPaciente');

// Você pode criar um elemento de lista (li) para cada item na lista e anexá-lo à div
//for (var i = 0; i < lista.length; i++) {
  //var li = document.createElement('li');
//li.textContent = lista[i];
  //div.appendChild(li);
//}
//
//
//
//
//vamo la +uma vez
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
  var data = {};

  // laco para pegar os itens do forms
  for (var i = 0; i < form.elements.length; i++) {

    // condicional, onde pega so se for um input e tem um nome
    if (form.elements[i].tagName === 'INPUT' && form.elements[i].name) {
      data[form.elements[i].name] = form.elements[i].value;
    }
  }

 // pega os que ja tiver salvo, pra manter a lista completa e se nao tiver nada seta como vazio
 var existingData = JSON.parse(localStorage.getItem('formData')) || [];

 if (editDados) {

    // achar pelo indice na lista ao editar
    var index = existingData.findIndex(function(item) {
      return JSON.stringify(item) === JSON.stringify(editDados);
    });

    // substituir o antigo pelo novo
    existingData[index] = data;

    // limpar a variavel de edicao depois de editar 
    localStorage.removeItem('editDados');
  } else {

    // se nao for edicao, adiciona os dados normalmente
    existingData.push(data);
  }

  // joga tudo no JSON pra pegar do outro lado
  localStorage.setItem('formData', JSON.stringify(existingData));

   // manda pra pagina do medico 
   window.location.href = 'PagMedico.html';
});






















//const infoUser =['teste'];

//function addList(){

      //  var nome = document.getElementById('nome').value;
       // var email = document.getElementById('email').value;
       // var cep = document.getElementById('cep').value;
       // var endereco = document.getElementById('endereco').value;
      // console.log(nome)  ;
      // infoUser.push(nome);
//}

//function enviar(){
    //Variaveis que recebem valor dos inputs e depois são atribuidas ao JSON
   // var nomeValue = document.querySelector(".js-input-name").value;
  //  var emailValue = document.querySelector(".js-input-email").value;
   // var cpfValue = document.querySelector(".js-input-cpf").value;
   // var pagamentoValue = document.querySelector(".js-input-pagamento").value;

   // var formValue = {                                 
   //     name: nomeValue,
   //     email: emailValue,
   //     data: {                                     
   //         cpf: cpfValue,                  
    //        pagamento: pagamentoValue      
    //    }
   // };
   // console.log(formValue);
//}



//function enviar(){
    //Variaveis que recebem valor dos inputs e depois são atribuidas ao JSON
 //   var nome = document.querySelector("nome").value;
  //  var email = document.querySelector("email").value;
  //  var endereco = document.querySelector("endereco").value;
  //  var cep = document.querySelector("cep").value;

  //  var lista = {                                 
   //     name: nome,
   //     email: email,
   //     endereco: endereco,
   //     cep: cep
  //  };
 //   console.log(lista);
//}


//function listar(){
  //  const d = document.getElementById("listaPaciente");
              //  var ul = document.createElement("ul");
            
              //      var li = document.createElement("li");
                    
              //      var nome = document.createElement("h3");
              //      var btnEditar = document.createElement("button");
              //      var btnExcluir = document.createElement("button");

            //        nome.innerHTML = lista[1]; 
            //        btnEditar.innerHTML = "Editar";
            //        btnExcluir.innerHTML ="Excluir";
                    
                
          //          ul.appendChild(li);
                    
         //           li.appendChild(nome);
         //           li.appendChild(btnEditar);
        //            li.appendChild(btnExcluir);
                
            
       //         d.appendChild(ul);
                   
    //    };
 
      //  singleton