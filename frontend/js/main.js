// EVENTOS EN JAVASCRIPT
document.addEventListener("DOMContentLoaded", () =>{
    alert("jonas");
    fetch('http://http://localhost:8080/api/clientes')
  .then(response => response.json())
  .then(data => 
    console.log('Datos:' , data));
    const elemento = document.getElementById
})