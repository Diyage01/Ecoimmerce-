function vermas(id) {
    if (id == "mas") {
        document.getElementById("desplegar").style.display = "block";
        document.getElementById("mas").style.display = "none";
    }
    else {
        document.getElementById("desplegar").style.display = "none";
        document.getElementById("mas").style.display = "inline";
    }
}
function mas(id) {
    if (id == "vermas") {
        document.getElementById("redesplegar").style.display = "block";
        document.getElementById("vermas").style.display = "none";
    }
    else {
        document.getElementById("redesplegar").style.display = "none";
        document.getElementById("vermas").style.display = "inline";
    }
}

function validarFormulario(){
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
  
  
    const correctemail = 'zamazor@gmail.com'
    const correctpassword = '12345'
  
    if( email === correctemail && password === correctpassword){
      console.log('Iniciaste Sesión Correctamente')
      window.location.href = "paginaprincipal.html"
    }
      else{
        console.log('Contraseña o Email incorrectos')
        alert('El Usuario o la Contraseña son incorrectos')
      }
    }