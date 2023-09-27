function listar(){
var d = document.getElementById("listaPaciente");
                var ul = document.createElement("ul");
            
                    var li = document.createElement("li");
                    var nome = document.createElement("h3");
                    var btnEditar = document.createElement("button");
                    var btnExcluir = document.createElement("button");

                    nome.innerHTML = "paciente123"; 
                    btnEditar.innerHTML = "Editar";
                    btnExcluir.innerHTML ="Excluir";
                    

                
                    ul.appendChild(li);
                    li.appendChild(nome);
                    li.appendChild(btnEditar);
                    li.appendChild(btnExcluir);
                
                
            
                d.appendChild(ul);
            


        };