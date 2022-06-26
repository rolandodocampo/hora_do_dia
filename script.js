function carregar(){
   var msg = document.getElementById('msg')
   var img = document.getElementById('imagen')
   var data = new Date()
   var hora = data.getHours()
   var minutos = data.getMinutes()
   
   msg.innerHTML = `Agora são <strong>${hora}:${minutos}</strong>`

   if(hora >= 0 && hora <= 12){
      //manha
      img.src = 'img/manha.png'
      document.body.style.background = '#f98a63'
   }
   else if(hora > 12 && hora <= 18){
      //tarde
      img.src = 'img/tarde.png'
      document.body.style.background = '#fbbb51'
   }
   else{
      //noite
      img.src = 'img/noite.png'
      document.body.style.background = '#372e4d'
   }
}