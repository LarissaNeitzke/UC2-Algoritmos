export enum SaborPizza {
    Calabresa = "calabresa",
    Frango = "frango",
    File = "filé"
}

export class Pizza {
    public sabor:SaborPizza
    public tamanho:string
    public preco:number

    constructor(saborPizza: SaborPizza, tamanhoPizza: string, precoPizza:number){
        this.sabor = saborPizza
        this.tamanho = tamanhoPizza
        this.preco = precoPizza
}


descricao():string {
   return `Pizza ${this.sabor}, Tamanho: ${this.tamanho}, Preço: R${this.preco}`
}
}

const pizza1 = new Pizza(SaborPizza.Calabresa, "Grande", 40.50)
const pizza2 = new Pizza(SaborPizza.File, "Média", 50.00)
const pizza3 = new Pizza(SaborPizza.Frango, "Pequena", 38.90)

console.log(pizza1.descricao())
console.log(pizza2.descricao())
console.log(pizza3.descricao())
