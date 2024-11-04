//Faça um programa que pergunte ao usuario seu nome e seu e-mail. Em seguida, imprima no console a seguinte mensagem:
//"O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!"
/* O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

> 💡 **Dica**
> 
> ⭐ Você pode fazer isso de duas formas:
> - Concatenando as strings (com o sinal de `+`)
> - Utilizando template strings (e envelopando a sua string com o sinal de CRASE ao invés de aspas ⇒ ````)*/

const readline = require('readline-sync');

let nomeDoUsuario = readline.question("Qual o seu nome? ")
let emailDoUsuario = readline.question("Qual o seu email? ")

console.log("O e-mail", emailDoUsuario, "foi cadastrado com sucesso. Seja bem-vindo(a),",nomeDoUsuario,"!")
