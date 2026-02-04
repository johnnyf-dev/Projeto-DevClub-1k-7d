
console.log("Script carregado com sucesso!");

const form = document.querySelector(".formulario_fale_conosco");
const mascara_formulario = document.querySelector(".mascara_formulario");
const botao_abrir_formulario = document.querySelector("#botao_abrir_formulario");
const botao_fechar_formulario = document.querySelector(".fechar_formulario");
const link_fale_conosco = document.querySelector("#link_fale_conosco");

function abrirFormulario(event) {
    event.preventDefault(); // evita que o link recarregue a página 
    form.classList.add("aberto"); 
    mascara_formulario.classList.add("aberta"); 
    abrirFormulario();}



    function abrirFormulario() {
        event.preventDefault();
        form.classList.add("aberto");
        mascara_formulario.classList.add("aberta");
    }


    function fecharFormulario() {
        if (event) event.preventDefault();
        form.classList.remove("aberto");
        mascara_formulario.classList.remove("aberta");
    }

    link_fale_conosco.addEventListener("click", abrirFormulario);
    botao_abrir_formulario.addEventListener("click", abrirFormulario);
    mascara_formulario.addEventListener("click", fecharFormulario);
    botao_fechar_formulario.addEventListener("click", fecharFormulario); // botão X fecha o formulário

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            fecharFormulario();
        }
    });