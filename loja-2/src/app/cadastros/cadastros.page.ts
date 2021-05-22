import { Component, OnInit } from '@angular/core';
import { ListService } from '../estoques/estoques.services';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.page.html',
  styleUrls: ['./cadastros.page.scss'],
})
export class CadastrosPage implements OnInit {

  constructor(private listEstoque : ListService) {
   
  }

 ngOnInit(): void {
 }

 onSubmit(form:any){
 let cod : number 
 let descricao : string 
 let tipo : string = ''
 let preco : number 
 let nome : string
 let qtde : number 

 cod = form.value.cod
 descricao = form.value.descricao
 tipo = form.value.tipo
 preco = form.value.preco
 nome = form.value.nome
 qtde = form.value.qtde

 this.listEstoque.addProduto(cod,descricao,tipo,preco,nome,qtde)

 }
}
