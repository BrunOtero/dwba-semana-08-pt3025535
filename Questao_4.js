class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
      this.primeiroNome = primeiroNome;
      this.segundoNome = segundoNome;
      this.primeiraNota = primeiraNota;
      this.segundaNota = segundaNota;
    }
  
    nomeCompleto() {
      return `${this.primeiroNome} ${this.segundoNome}`;
    }
  
    media() {
      return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }
  
    situacao() {
      return this.media() > 6 ? 'Aprovado' : 'Reprovado';
    }
  }
  
  const alunos = [];
  alunos.push(new Aluno("Bruno", "Otero", 8, 2))
  alunos.push(new Aluno("Fernando", "Pereira", 7, 8))
  alunos.push(new Aluno("Eduardo", "Machado", 8, 9))
  alunos.push(new Aluno("Ana Luiza", "Almeida", 10, 10))
  alunos.push(new Aluno("Cauã", "Menezes", 7, 4))
  
  const renderAlunos = () => {
    const listaAlunosDiv = document.getElementById('lista_alunos');
    alunos.forEach(aluno => {
      const alunoDiv = document.createElement('div');
      alunoDiv.textContent = `Nome: ${aluno.nomeCompleto()}, Média: ${aluno.media().toFixed(2)}, Situação: ${aluno.situacao()}`;
      listaAlunosDiv.appendChild(alunoDiv);
    });
  };
  
  renderAlunos();