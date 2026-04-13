const form = document.getElementById("form");

const cpfs = ["12345678900", "99999999999"];

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

    // VALIDAÇÕES
    if (nome.length < 3) return alert("Nome inválido");
    if (!email.includes("@")) return alert("Email inválido");
    if (telefone.length < 8 || isNaN(telefone)) return alert("Telefone inválido");
    if (!cpf) return alert("CPF obrigatório");
    if (cpfs.includes(cpf)) return alert("CPF já cadastrado");
    if (idade < 18) return alert("Precisa ter 18+");
    if (!cidade) return alert("Cidade obrigatória");
    if (!moradia) return alert("Selecione moradia");
    if (!quintal) return alert("Informe quintal");
    if (!pet) return alert("Informe sobre pet");
    if (isNaN(horas)) return alert("Horas inválidas");
    if (motivo.length < 10) return alert("Motivo muito curto");
    if (!termo) return alert("Aceite o termo");

    // REGRAS
    if (moradia === "apartamento" && quintal === "sim")
        return alert("Apartamento não tem quintal");

    if (horas > 8)
        alert("Animal ficará muito tempo sozinho");

    if (pet === "nao")
        alert("ONG poderá acompanhar adaptação");

    if (motivo === "quero" || motivo === "porque sim")
        return alert("Motivo inválido");

    if (motivo.includes("hoje"))
        alert("Cuidado com decisão impulsiva");

    const resultado = document.getElementById("resultado");
    resultado.style.display = "block";
    resultado.innerText = 
        "Cadastro enviado!\n\n" +
        "Nome: " + nome +
        "\nCidade: " + cidade;
});