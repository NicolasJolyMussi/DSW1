function Salvar() {
    const inputNome = document.querySelector("#textNomeAluno")
    const inputCurso = document.querySelector("#textNomeCurso")

    if (inputNome.value == "") {
        ExibirMensagem("Preencher o campo Nome Aluno");
        inputNome.focus();
        return;
    }

    if (inputCurso.value == "") {
        ExibirMensagem("Preencher o campo Nome Curso");
        inputCurso.focus();
        return;
    }
    alert("Salvo com sucesso")

    function ExibirMensagem(msg){
        const div = document.querySelector("#mensagem");
        div.innerHTML = msg;
        window.setTimeout(() =>{div.innerHTML=""}, 2000);
    }
}
