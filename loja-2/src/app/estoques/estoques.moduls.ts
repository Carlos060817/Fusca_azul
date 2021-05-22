export class Estoque{
    cod: number;
    descricao: string;
    tipo: string;
    preco: number;
    nome: string;
    qtde: number;



    constructor(cod: number, descricao:string, tipo:string, preco: number, nome: string, qtde: number){
        this.cod = cod
        this.descricao = descricao
        this.tipo = tipo
        this.preco = preco
        this.nome = nome
        this.qtde = qtde
    }
}
