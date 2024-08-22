/* 1) Faça um algotimo que dada as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima
a sua média e a sua classificação, conforme a tabela abaixo.

média = (nota1 + nota 2 + nota3) / 3

Classificação
- Média menor que 5 = 'reprovação'
- Média entre 5 a 7 = 'recuperação'
- Média acima de 7 = 'passou de semestre'
*/
let nota1 = 5;
let nota2 = 3;
let nota3 = 8;

let media = (nota1 + nota2 + nota3) / 3;
if(media){
   (media = 0 <= 5);
    console.log("Reprovado");
} 
else if (media >= 5 && media <= 7){
    console.log("Recuperação");
} 
else {
  (media > 7);
  console.log("Aprovado");
};
