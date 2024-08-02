var i = 1;
var nomeAluno, nota1, nota2, multiplicacao1, multiplicacao2, soma;
const numStudent = document.getElementById("num_aluno");
numStudent.textContent = i;

var listaAlunos = [];

const nextStudent = () => { 
  i++;
  numStudent.textContent = i;
};

const renderAlunos = () => {
  const listaAlunosDiv = document.getElementById('lista_alunos');
  listaAlunos.forEach(aluno => {
    const alunoDiv = document.createElement('div');
    alunoDiv.textContent = `Nome: ${aluno.nome}, Primeira Nota: ${aluno.nota1}, Segunda Nota: ${aluno.nota2}, Média: ${aluno.media.toFixed(2)}`;
    listaAlunosDiv.appendChild(alunoDiv);
  });
};

const clearInputs = () => {
  document.querySelector("input[name='nome_aluno']").value = "";
  document.querySelector("input[name='primeira_nota']").value = "";
  document.querySelector("input[name='segunda_nota']").value = "";
}

const studentsOver = () => {
  let infoText = document.querySelector("p[id='info_text']");
  infoText.textContent = "Alunos cadastrados";
  let formAluno = document.querySelector("div[id='form_aluno']");
  formAluno.style.display = "none";
  let sendButton = document.querySelector("button[id='send_button']");
  sendButton.style.display = "none";
  
  renderAlunos();
}

const onButtonClick = () => {
  nomeAluno = document.querySelector("input[name='nome_aluno']").value;
  nota1 = document.querySelector("input[name='primeira_nota']").value;
  nota2 = document.querySelector("input[name='segunda_nota']").value;
  multiplicacao1 = nota1 * 0.6;
  multiplicacao2 = nota2 * 0.4;
  soma = multiplicacao1 + multiplicacao2;

  listaAlunos.push({nome: nomeAluno, nota1: nota1, nota2: nota2, media: soma});

  alert(`Nome do aluno: ${nomeAluno} \nPrimeira nota: ${nota1} \nSegunda nota: ${nota2}`);
  alert(`Nota final: ${soma}`);

  clearInputs();
  nextStudent();
  if(i > 3) studentsOver();
}