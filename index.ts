// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let alunos: string[] = ['Gabi', 'Luis', 'Paulo','Murilo','Lavinia','Isaac'];

console.log(alunos[4]);

document.write(`${alunos.length}`)

alunos.push("Ana","Matheus","Carlos");

alunos.splice(3,4,5);
document.write(alunos);

for (let index in alunos){
  document.write(`${alunos[index]}`)
  }