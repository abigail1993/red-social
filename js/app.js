function Validar(){
  var nombre = document.getElementById('inputName').value;
  var email = document.getElementById('inputEmail3').value;
  var pass1 = document.getElementById('inputPassword1').value;
  var pass2 = document.getElementById('inputPassword2').value;
// esto hace que funcione el crear una cuenta y deje ingresar un nombre y no permite cambiar a otro renglon hasta que llene el campo
  if(nombre ==""){
      $('#alert').html('Debes ingresar un nombre').slideDown(500);
      $('#inputName').focus();
      return false;
  }
  else {
      $('#alert').html('').slideUp(300);
  }
  if(email ==""){ //esto hace que al estar en el renglon de email no deja avanzar a otro renglon
      $('#alert').html('Debes ingresar un correo').slideDown(500);
      $('#inputEmail3').focus();
      return false;
  }
  else {
      $('#alert').html('').slideUp(300);
  }
  if(pass1 ==""){ //esto hace que al estar en el renglon de contraseña no deja avanzar a otro renglon
      $('#alert').html('Debes ingresar una contraseña').slideDown(500);
      $('#inputPassword1').focus();
      return false;
  }
  else {
      $('#alert').html('').slideUp(300);
  }
  if(pass2 ==""){ //esto hace que al estar en el renglon de confirmar contraseña no deja avanzar a otro renglon
      $('#alert').html('Debes ingresar una contraseña').slideDown(500);
      $('#inputPassword2').focus();
      return false;
  }
  else {
      $('#alert').html('').slideUp(300);
  }
  if(pass2!=pass1){//esto hace que se comparen los dos renglones de contraseña.
      $('#alert').html('Las contraseñas no coinciden').slideDown(500);
      $('#inputPassword1').val('');
      $('#inputPassword2').val('');
      $('#inputPassword1').focus();
      return false;
  }
  else {
      $('#alert').html('').slideUp(300);
  }
}
