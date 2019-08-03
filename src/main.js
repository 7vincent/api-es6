//ex. 1 classes
/*
class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }

  isAdmin() {
    return this.admin === true;
  }
}

class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha);
    this.admin = true;
  }
}

const user = new Usuario("meu@email", "123");

const admin = new Admin("admin@email", "123");

console.log(user.isAdmin());
console.log(admin.isAdmin());
*/

/*ex. 2 array

const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" }
];

//map

const idades = usuarios.map(function(item) {
  return item.idade;
});

console.log(`Idades: ${idades}`);

//filter
const userRocketseat = usuarios.filter(function(item) {
  //console.log(item.idade);
  if (item.empresa == "Rocketseat" && item.idade > 18) {
    return item;
  }
});

console.log(userRocketseat[0]);

//find
// const userGoogle = usuarios.find(function(item) {
//   return item.empresa === "Rocketseat";
// });
/*
const userGoogle = usuarios.find(usuario => usuario.empresa === "Google");

console.log(userGoogle);

const idadesMulti = usuarios
  .map(usuario => ({
    ...usuario,
    idade: usuario.idade * 2
  }))
  .filter(usuario => usuario.idade <= 50);

console.log(idadesMulti);
*/
//---fim 2
//----inicio 3
//3.1
/*
const arr = [1, 2, 3, 4, 5];

let teste = arr.map(function(item) {
  return item + 10;
});

let teste2 = arr.map(item => item + 10);

console.log(teste2);
*/
// 3.2
// Dica: Utilize uma constante pra function
//const usuario = { nome: "Diego", idade: 24 };

// function mostraIdade(usuario) {
//   return usuario.idade;
// }

//const idade = usuario => usuario.idade;

//console.log(idade(usuario));
//import { soma } from "./funcoes";
//--------------------------------------------
//console.log(soma(8, 9));
/*
---------------------------------------
const minhaPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("OK");
    }, 2000);
  });

async function executaPromise() {
  const response = await minhaPromise();
  console.log(response);
}

executaPromise();

------------------------------------------
*/
import axios from "axios";

class Api {
  static async getuserInfor(username) {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      console.log(response);
    } catch (err) {
      console.warn("Erro na API");
    }
  }
}

Api.getuserInfor("7vincent");
