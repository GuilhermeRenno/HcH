function selecionar(){
    var selecao = document.getElementById("UserSelection").value;
    
    if(selecao=='paciente'){
        window.location.href = "PagPaciente.html";
        console.log(window.location.href)
    }
    else{
        window.location.href = "PagMedico.html";
        console.log(window.location.href)
    }
}