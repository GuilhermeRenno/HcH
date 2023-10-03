// lista de acessos autorizados
const listaDeUsuarios = [

    { login: "login", senha: "senha" },

    { login: "login2", senha: "senha2" },

    { login: "login3", senha: "senha3" },

];

 

function clicaLogin(){
    //pegando os dados dos campos de login e senha
    const campoLogin = document.getElementById("campoLogin").value;

    const campoSenha = document.getElementById("campoSenha").value;
    //verificando se os dados batem com os da lista
    const usuarioValido = listaDeUsuarios.find(usuario => usuario.login === campoLogin && usuario.senha === campoSenha);

 
    //condicional dos dados
            if (usuarioValido) {
                //se dados validos, ele verifica se é medico ou paciente
                    var selecao = document.getElementById("UserSelection").value;
                    
                    if(selecao=='paciente'){
                        window.location.href = "PagPaciente.html";
                        console.log(window.location.href)
                    }
                    else{
                        window.location.href = "PagMedico.html";
                        console.log(window.location.href)
                    }
                //emite um alerta de login bem sucedido
                alert("Login bem-sucedido!");

            } else {

                alert("Login ou senha inválidos. Preeencha novamente.");

            }

       

}