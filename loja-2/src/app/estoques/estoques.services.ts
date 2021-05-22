import { Injectable } from '@angular/core';
import { Estoque } from './estoques.moduls';

@Injectable({
  providedIn: 'root'
})
export class ListService {

   public produtosBD: Estoque[]
   public produtos: Estoque[]

  constructor() {
    this.produtosBD = [
      new Estoque(1001,"Pneu","carro",300,"Fuscão Preto",12),
      new Estoque(1002,"Pino/cruzeta","caminhonete",30,"Deltas",100),
      new Estoque(1003,"Parafudo/eixo","qualquer",40,"Arlas peça",15),
      new Estoque(1004,"Bandeja","qualquer",18,"Acfar",5),
      new Estoque(1005,"Parafuso/roda","qualquer",5,"JFCAR",30),
      new Estoque(1006,"Rodas/dianteiras","carro",1000,"CMSN",4)
    ];
    this.produtos = this.produtosBD;
   }

   getEstoque(){
     return this.produtos;
   }

   addProduto(cod:number,descricao:string,tipo:string,preco:number,nome:string,qtde:number){
    this.produtosBD.push(new Estoque(cod,descricao,tipo,preco,nome,qtde))
   }
}
