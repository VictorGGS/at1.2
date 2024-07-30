// Função para validar a senha
function validarSenha(senha) {
    // Pelo menos 8 caracteres
    if (senha.length < 8) {
        return false;
    }

    // Pelo menos uma letra maiúscula
    if (!/[A-Z]/.test(senha)) {
        return false;
    }

    // Pelo menos um número
    if (!/[0-9]/.test(senha)) {
        return false;
    }

    return true;
}

// Função para validar a repetição da senha
function validarRepeticaoSenha(senha, confirmacaoSenha) {
    return senha === confirmacaoSenha;
}

// Função para verificar a idade
function verificarIdade(idade) {
    // Verifica se a idade é maior ou igual a 18
    return idade >= 18;
}

// Função para habilitar o campo de cidades com base no estado selecionado
function habilitarCidades() {
    var estadoSelecionado = document.getElementById('estado').value;
    var selectCidade = document.getElementById('cidade');
    var cidades = [];

    // Define cidades com base no estado selecionado
    switch (estadoSelecionado) {
        case 'MG':
            cidades = ['Raposos', 'Nova Lima', 'Belo Horizonte'];
            break;
        case 'RJ':
            cidades = ['Rio de Janeiro', 'Petrópolis', 'Cabo Frio'];
            break;
        case 'SP':
            cidades = ['São Paulo', 'Araraquara', 'Americana'];
            break;
        case 'ES':
            cidades = ['Vila Velha', 'Serra', 'Vitória'];
            break;
        default:
            cidades = [];
    }

    // Atualiza o <select> com as opções de cidades
    selectCidade.innerHTML = cidades.map(cidade => `<option value="${cidade}">${cidade}</option>`).join('');
    selectCidade.disabled = cidades.length === 0;
}

// Função para mostrar mensagem de confirmação
function mostrarMensagemConfirmacao() {
    alert('Seja bem-vindo ao Song BOX.');
}

// Função para validar o formulário
function validarFormulario() {
    var senha = document.getElementById('senha').value;
    var confirmacaoSenha = document.getElementById('confirmarSenha').value;
    var idade = Number(document.getElementById('idIdade').value);  // Convertendo para número
    var estadoSelecionado = document.getElementById('estado').value;

    // Validar senha
    if (!validarSenha(senha)) {
        alert('A senha deve ter pelo menos 8 caracteres, uma letra maiúscula e um número.');
        return false;
    }

    // Validar repetição de senha
    if (!validarRepeticaoSenha(senha, confirmacaoSenha)) {
        alert('Senhas incorretas.');
        return false;
    }

    // Bloquear envio para menores de 18 anos
    if (!verificarIdade(idade)) {  // Usando Number para conversão
        alert('Só para maiores de idade..');
        return false;
    }

    // Habilitar seleção de cidade baseado no estado do sudeste selecionado
    habilitarCidades();

    // Mostrar mensagem de confirmação
    mostrarMensagemConfirmacao();

    // Se todas as validações foram bem-sucedidas
    return true;
}

// Função para contar caracteres no textarea
function contarCaracteres() {
    var textarea = document.getElementById('textarea');
    var contadorCaracteres = document.getElementById('contadorCaracteres');
    var limite = 200;
    var quantidade = textarea.value.length;

    contadorCaracteres.textContent = `${quantidade}/${limite} caracteres`;

    if (quantidade > limite) {
        contadorCaracteres.style.color = 'red';
    } else {
        contadorCaracteres.style.color = 'black';
    }
}

// Função para exibir regras da senha dinamicamente
function atualizarRegrasSenha() {
    var senha = document.getElementById('senha').value;
    var regra1 = document.getElementById('regra1');
    var regra2 = document.getElementById('regra2');
    var regra3 = document.getElementById('regra3');

    // Atualiza o estado das regras
    regra1.className = senha.length >= 8 ? 'rule-valid' : 'rule-invalid';
    regra2.className = /[A-Z]/.test(senha) ? 'rule-valid' : 'rule-invalid';
    regra3.className = /[0-9]/.test(senha) ? 'rule-valid' : 'rule-invalid';
}

// Função para verificar confirmação de senha em tempo real
function verificarConfirmacaoSenha() {
    var senha = document.getElementById('senha').value;
    var confirmacaoSenha = document.getElementById('confirmarSenha').value;
    var regraConfirmacao = document.getElementById('regraConfirmacaoSenha');

    if (senha === confirmacaoSenha) {
        regraConfirmacao.className = 'rule-valid';
        regraConfirmacao.textContent = 'Senhas conferem';
    } else {
        regraConfirmacao.className = 'rule-invalid';
        regraConfirmacao.textContent = 'Senhas não conferem';
    }
}

// Função para mudar a cor do fundo do site
function mudarCorFundo() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
}

// Função para aumentar o tamanho da fonte
function aumentarFonte() {
    var style = window.getComputedStyle(document.body, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    document.body.style.fontSize = (fontSize + 2) + 'px';
}

// Função para diminuir o tamanho da fonte
function diminuirFonte() {
    var style = window.getComputedStyle(document.body, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    document.body.style.fontSize = (fontSize - 2) + 'px';
}

// Adicionar eventos para atualizar regras da senha e confirmação de senha em tempo real
document.getElementById('senha').addEventListener('input', atualizarRegrasSenha);
document.getElementById('confirmarSenha').addEventListener('input', verificarConfirmacaoSenha);

// Função para mudar a cor do fundo do site
function mudarCorFundo(cor) {
    // Define a cor de fundo para o valor passado
    document.body.style.backgroundColor = cor;
}

