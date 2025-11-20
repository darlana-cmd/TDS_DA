var dado= localStorage.getItem('dado')
var input=document.getElementById('campo')

input.value=dado



function salvar(){
    var nome=input.value 
    localStorage.setItem("nome", nome)
}