const form = document.getElementById("form");

// CPF já cadastrados (simulação)
const cpfsExistentes = ["12345678900", "11111111111"];

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value;
    let idade = Number(document.getElementById("idade").value);
    let cidade = document.getElementById("cidade").value;
    let moradia = document.getElementById("moradia").value;
    let quintal = document.getElementById("quintal").value;
    let pet = document.getElementById("pet").value;
    let horas = Number(document.getElementById("horas").value);
    let motivo = document.getElementById("motivo").value.toLowerCase();
    let termo = document.getElementById("termo").checked;

    // ===== VALIDAÇÕES =====

    if (nome.length < 3) return alert("Nome inválido");
    if (!email.includes("@")) return alert("Email inválido");
    if (telefone.length < 8 || isNaN(telefone)) return alert("Telefone inválido");
    if (!cpf) return alert("CPF obrigatório");
    if (cpfsExistentes.includes(cpf)) return alert("CPF já cadastrado");
    if (idade < 18) return alert("Você precisa ter 18 anos ou mais");
    if (!cidade) return alert("Cidade obrigatória");
    if (!moradia) return alert("Selecione a moradia");
    if (!quintal) return alert("Informe sobre quintal");
    if (!pet) return alert("Informe se já teve pet");
    if (isNaN(horas)) return alert("Horas inválidas");
    if (motivo.length < 10) return alert("Motivo muito curto");
    if (!termo) return alert("Aceite o termo");

    // ===== REGRAS DE NEGÓCIO =====

    if (moradia === "apartamento" && quintal === "sim") {
        return alert("Apartamento não pode ter quintal");
    }

    if (moradia === "casa" && quintal === "nao") {
        alert("Verifique se há espaço adequado para o animal");
    }

    if (horas > 8) {
        alert("Animal ficará muito tempo sozinho!");
    }

    if (pet === "nao") {
        alert("A ONG poderá acompanhar sua adaptação");
    }

    if (motivo === "quero" || motivo === "porque sim") {
        return alert("Motivo inválido");
    }

    if (motivo.includes("não tenho dinheiro")) {
        return alert("Condição financeira inadequada");
    }

    if (motivo.includes("hoje") || motivo.includes("agora")) {
        alert("Cuidado com decisão impulsiva");
    }

    // ===== SUCESSO =====
    document.getElementById("resultado").innerText =
        "Cadastro enviado com sucesso!\n" +
        "Nome: " + nome + "\nCidade: " + cidade;

});