import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno.model';
import { ALUNOS } from '../mock-aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent{

  aluno: Aluno = {
    id: 1,
    name: 'Miguel',
    age: 10,
    city: "Itu",
  };

  alunos = ALUNOS;
  selectedAluno?: Aluno;

  onSelect(aluno: Aluno): void {
    this.selectedAluno = aluno;
  }

}
