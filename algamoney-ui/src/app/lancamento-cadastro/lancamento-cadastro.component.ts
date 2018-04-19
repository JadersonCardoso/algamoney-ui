import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent {

  tipos = [
    { label : 'Receita', value : 'RECEITA'},
    { label : 'Despesa', value : 'DESPESA'},
  ];

  categorias = [
    { label : 'Alimentação', value : 1},
    { label : 'Transporte', value: 2},
  ];

  pessoas = [
    { label : 'Jaderson Cardoso', value : 1},
    { label : 'Fernanda Sagica', value: 2},
  ];

}
