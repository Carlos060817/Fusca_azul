import { Component, OnInit } from '@angular/core';
import { Estoque } from './estoques.moduls';
import { ListService } from './estoques.services';
import {Router} from "@angular/router"

@Component({
  selector: 'app-estoques',
  templateUrl: './estoques.page.html',
  styleUrls: ['./estoques.page.scss'],
})
export class EstoquesPage implements OnInit {

  produtos: Estoque[]

  constructor(public estoqueService:ListService, public router: Router) {
    this.produtos = estoqueService.getEstoque();
  }

  ngOnInit(): void {

  }

  ngAfterViewChecked() : void{
    this.produtos = this.estoqueService.getEstoque();
  }

  reload(){
    this.produtos = this.estoqueService.getEstoque();
  }

  goToFilters(){
    this.router.navigate(['/estoque-filtros']);
  }

}
