//Exercícios de JavaScript
//Questões de Escolha Múltipla

/*Javascript é a mesma coisa que Java?*/
- a) Verdadeiro  
- b) Falso
R: Falso

/*Como se declara uma variável em Javascript?*/
- a) const carName
- b) variable carName  
- c) new carName  
R: const carName

/*Que operador é usado para dar valor a uma variável?*/
- a) = 
- b) -  
- c) *  
- d) x  
R: =

/*Diga o que a seguinte equação retorna: `10 > 9`*/
- a) false  
- b) true
- c) NaN  
R: true

/*Javascript é case-sensitive (que diferencia maiúsculas de minúsculas)?*/
- a) Sim 
- b) Não  
R: Sim

/*Como se cria uma função em Javascript?*/
- a) function myFunction() 
- b) function:myFunction()  
- c) function = myFunction()  
R: function:myFunction()

/*Como se invoca uma função chamada "myFunction"?*/
- a) call myFunction()  
- b) function MyFunction()  
- c) myFunction()
R: myFunction()

/*Como se escreve o condicional IF em Javascript?*/
- a) if(i === 5) 
- b) if i = 5 then  
- c) if i = 5  
- d) if i == 5 then  
R: if(i === 5)

/*Como escrever o condicional IF para executar um código se "i" não for igual a 5?*/
- a) if(i <> 5)  
- b) if (i != 5) 
- c) if i =! 5 then  
- d) if i <> 5  
R: if (i != 5)

/*Como um WHILE começa?*/
- a) while i=1 to 10  
- b) while (i <= 10) 
- c) while (i <= 10; i++)  
R: while (i <= 10>)

/*Como um LOOP FOR começa?*/
- a) for i=1 to 5  
- b) for (i=0; i<=5)  
- c) for (i<=5; i++)  
- d) for (i=0; i<=5; i++)
R: for (i=0; i<=5; i++)

/*Como se adiciona um comentário em Javascript?*/
- a) <!--Este é um comentário-->  
- b) //Este é um comentário 
- c) "Este é um comentário"  
R: //Este é um comentário

/*Como adicionar um comentário com mais de uma linha?*/
- a) /*Este comentário tem mais de uma linha*/ 
- b) <!--Este comentário tem mais de uma linha-->  
- c) "Este comentário tem mais de uma linha"  
R: /*Este comentário tem mais de uma linha*/

/*Qual é a maneira correta de escrever um array?*/
- a) const colors = ['red', 'green', 'blue']  
- b) const colors = 'red', 'green', 'blue'  
- c) const colors = [1: 'red', 2: 'green', 3: 'blue']  
- d) const colors = ['red'], ['green'], ['blue']  
R: const colors = ['red', 'green','blue']

---

//Exercícios de Programação
//Variáveis

/*Crie uma variável chamada `carName` e atribua o valor `Maverick` a ela:*/

const carName = "Maverick";


/*Crie uma variável chamada `x` e atribua o valor `50` a ela:*/

const x = 50;


/*Exiba a soma de 5 + 10 usando duas variáveis `x` e `y`:*/

const x = 5;
const y = 10;
console.log(x + y);


/*Complete o código criando uma variável `z`, atribuindo `x + y` a ela e exibindo o resultado:*/

let x = 5;
let y = 10;
let z = x + y;
console.log(z);


//Declare estas três variáveis em uma única linha:

const Nome = "Larissa", Sobrenome = "Neitzke", Idade = 28;


---

//Operadores

/*Multiplique 10 por 5 e exiba o resultado:*/
console.log(10 * 5);


/*Exiba o resto da divisão de 15 por 9:*/
console.log(15 % 9);


/*Use o operador de atribuição correto para fazer `x` ser igual a `x + y`:*/
x += y;


/*Use o operador de atribuição correto para fazer `x` ser igual a `x * y`:*/
x *= y;


---

//Tipos de Dados

/*Use comentários para descrever o tipo correto de cada variável:*/
let length = 16; // Número
let Sobrenome = "Neitzke"; // String
const x = { Nome: "Larissa", Sobrenome: "Souza" }; // Objeto


---

//Funções

/*Execute a função chamada `myFunction`:*/

function myFunction() {
  alert("Hello World!");
}
myFunction();


/*Complete o código, criando uma função chamada `myFunction`:*/

function myFunction() {
  console.log("Hello World");
}
myFunction();


/*Complete o código para retornar "Hello":*/

function myFunction() {
  return "Hello";
}
console.log(myFunction(), "World");


---

//Objetos

/*Mostre a informação "John" em um console.log:*/

const pessoa = { Nome: "Joao", Sobrenome: "Silva" };
console.log(person.Nome);


/*Adicione a propriedade `country: Norway` ao objeto `person`:*/

const person = { Nome: "Joao", Sobrenome: "Silva" };
person.country = "Norway";


/*Crie um objeto e exiba uma mensagem:*/

const pessoa = { nome: "Larissa", idade: 28 };
console.log(`${pessoa.nome} tem ${pessoa.idade} anos.`);


---

//Strings

/*Exiba o comprimento de `txt`:*/

let txt = "Alice, Larissa, Bruno, Lucas, Gabriel e Lucca.";
let x = txt.length;
console.log(x);


/*Concatene duas strings:*/

let str1 = "Hello ";
let str2 = "World!";
console.log(str1 + str2);


/*Converta para maiúsculas:*/

let txt = "Hello World!";
console.log(txt.toUpperCase());


/*Substitua "Hello" por "Welcome":*/

let txt = "Hello World";
console.log(txt.replace("Hello", "Welcome"));


---

//Arrays

/*Mostre "Volvo":*/

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[1]);


/*Mude o primeiro item para "Ford":*/

const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Ford";


/*Mostre o número de itens:*/

const cars = ["Volvo", "Jeep", "Mercedes"];
console.log(cars.length);


/*Remova o último item:*/

const fruits = ["Banana", "Orange", "Apple"];
fruits.pop();


/*Adicione "Kiwi":*/

const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Kiwi");


/*Remova "Orange" e "Apple":*/

const fruits = ["Banana", "Orange", "Apple"];
fruits.splice(1, 2);


---

//Condicionais

/*Mostre "Hello World" se `x` for maior que `y`:*/

if (x > y) {
  console.log("Hello World");
}


/*Mostre "Hello World" ou "Goodbye":*/

if (x > y) {
  console.log("Hello World");
} else {
  console.log("Goodbye");
}


---

//Loops

/*Loop `for` de 0 a 9:*/

for (let i = 0; i < 10; i++) {
  console.log(i);
}


/*Loop `while` com incremento de 2:*/

let i = 0;
while (i < 10) {
  console.log(i);
  i += 2;
}

