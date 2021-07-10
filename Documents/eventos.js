let qntClicks = 0;

function clicarnoBotao(qntClicks) {
    qntClicks++; 
    console.log(qntClicks)  
}



function textKey(event) {
    console.log(event)
    console.log(event.key)
    
}
function textChange(event) {
    console.log(event)
   // console.log(event.target)
    console.log(event.target.value)
    
}