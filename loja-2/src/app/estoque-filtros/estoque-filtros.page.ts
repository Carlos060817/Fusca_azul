import { Component, OnInit } from '@angular/core';
import { ListService } from "../estoques/estoques.services";
import { Estoque } from '../estoques/estoques.moduls';
import { Router } from "@angular/router"


@Component({
  selector: 'app-estoque-filtros',
  templateUrl: './estoque-filtros.page.html',
  styleUrls: ['./estoque-filtros.page.scss'],
})
export class EstoqueFiltrosPage implements OnInit {

  loja:string='';
  tipo:string='';
  filtro:string='';

  constructor(public estoqueService:ListService, public router: Router) { }

  ngOnInit() {

  }

  filtrar(){

    if(this.filtro=='loja'){
      var produto = this.estoqueService.produtosBD;
      this.estoqueService.produtos = [];
      for(var i=0; i<produto.length; i++){
        if(this.loja.toLowerCase()==produto[i].nome.toLowerCase()){
          this.estoqueService.produtos.push(new Estoque(produto[i].cod,produto[i].descricao,produto[i].tipo,produto[i].preco,produto[i].nome,produto[i].qtde));
        }
      }
    }else if(this.filtro=='tipo'){
      var produto = this.estoqueService.produtosBD;
      this.estoqueService.produtos = [];
      for(var i=0; i<produto.length; i++){
        if(this.tipo.toLowerCase()==produto[i].tipo.toLowerCase()){
          this.estoqueService.produtos.push(new Estoque(produto[i].cod,produto[i].descricao,produto[i].tipo,produto[i].preco,produto[i].nome,produto[i].qtde));
        }
      }
    }

    this.router.navigate(['/estoques']);

  }

  limparFiltros(){
    this.filtro = 'loja';
    this.loja = '';
    this.tipo = '';
    this.estoqueService.produtos = this.estoqueService.produtosBD;
    this.router.navigate(['/estoques']);
  }

}
