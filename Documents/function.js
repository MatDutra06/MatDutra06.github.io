// exemplos de função
// function FuncaoSoma(parametros) {
//     let soma = 1 + parametros
//    return soma
//     }
//     console.log(FuncaoSoma(3))
//     console.log(FuncaoSoma("oi"))

    //ex 2
    function Multipilcacao(a, b) {
        return a * b
        
     }
// function Divisao(a, b) {
//     if (b == 0) {
//         return 'não foi possivel realizar esta divisão'

//     }
//     return a / b
// }
//   console.log(Multipilcacao(3, 9))
//   console.log(Divisao(1,0))
//   console.log(Divisao(1000,10))

//exemplo 3 
let A = 0;
let B = 0;
function ValordeA(event) {
 A = event.target.value   
}

function ValordeB(event) {
    B = event.target.value
}
function Soma() {
let valorSoma=(parseFloat(A) + parseFloat(B))
    console.log(valorSoma)  
    let txtResult = document.getElementById('txtResult')
    txtResult.value = valorSoma
    
}
function Limpar() {
    let txtBox =  document.getElementsByTagName('input')
    for (let i = 0; i < txtBox.length; i++) {
        console.log(txtBox[i]);
        txtBox[i].value = ''   
    }
}
function Subtracao() {
    let valorSub = (parseFloat(A) - parseFloat(B))
    console.log(valorSub)
    let txtResult = document.getElementById('txtResult')
    txtResult.value = valorSub
}
function Multiplicacao() {
   let valorMult= (parseFloat(A) * parseFloat(B))
    console.log(valorMult)
    let txtResult = document.getElementById('txtResult')
    txtResult.value = valorMult
}
function Divisao() {
    if (B==0) {
        alert('não foi possivel realizar esta divisão')
    }
   let valorDiv= (parseFloat(A) / parseFloat(B))
   console.log(valorDiv)
  let txtResult = document.getElementById('txtResult')
  txtResult.value = valorDiv
}
function Potenciacao() {
    let valorPot = (parseFloat(A) ** parseFloat(B))
    console.log(valorPot)
    let txtResult = document.getElementById('txtResult')
    txtResult.value = valorPot
}