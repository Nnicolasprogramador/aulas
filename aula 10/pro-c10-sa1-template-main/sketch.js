var matris = [20,3444,16,1]
function media(){
  var soma = matris[0] + matris [1] + matris[2] + matris[3];
  var divisao = soma/matris.length;
  console.log(divisao)
}

function setup() 
{
  createCanvas(400,400);
  media();
}


function draw() 
{
background(51);

}

