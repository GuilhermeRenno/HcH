function selecionar(){
    var selecao = document.getElementById("UserSelection").value;

    if(selecao='medico'){
        window.location.href = "paginaMedico.html";
        console.log(window.location.href)
    }
    else{
        window.location.href = "paginaPaciente.html";
        console.log(window.location.href)
    }
}