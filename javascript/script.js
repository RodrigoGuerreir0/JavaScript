// var numero1 =10
// var numero2 =101 
// var nome = "Rodrigo"

// if(numero1>numero2)
// {
//     console.log("Sim o numero "+numero1+" é MAIOR que o "+numero2)
//     document.getElementById('resposta').innerHTML ='<h1> Sim o numero é MAIOR</h1>'
// }

// else if(numero1==numero2)
// {
//     console.log("Os numeros são iguais")
//     document.getElementById('resposta').innerHTML ='<h1>Os numeros são iguais</h1>'
// }

// else
// {
//     console.log("Não, o numero "+numero1+" não é MAIOR que o "+numero2)
//     document.getElementById('resposta').innerHTML ='<h1> Não, o numero não é MAIOR</h1>'
// }

function Comparar (frase)
{
    var num1= document.getElementById('numero1').value
    var num2= document.getElementById('numero2').value

    console.log(num1)
    console.log(num2)
 
    if( parseInt(num1) > parseInt(num2))
    {
    console.log("O numero: "+num1+" é maior que o numero: "+num2)
    alert("O numero: "+num1+" é maior que o numero "+num2)
    }

    else if(num1==num2)
    {
    console.log("Os numeros são iguais")
    alert("Os numeros são iguais")
    }

    else
    {
    console.log("O numero: "+num1+" não é maior que o numero: "+num2)
    alert("O numero: "+num1+" não é maior que o numero "+num2)
    }

}