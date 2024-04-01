function inversion(){

    // cAPTURAMOS LOS VALORES DE LOS CAMPOS DEL FORMULARIO

    let cNombres = document.getElementById("nombres").value;
    let cTelefono = document.getElementById("telefono").value;
    let cEmail = document.getElementById("email").value;
    let cInversion = document.getElementById("inversion").value;
    let cTiempo = document.getElementById("tiempo").value;

    // capturamos los contenedores pre y post simulacion
    let contPre = document.querySelector(".pre-simulation");
    let contPost = document.querySelector(".post-simulation");

    // Capturamos los espacion o span para mostrar el nombre, email y telefono
    let showNom = document.getElementById("nombres-show");
    let showCorreo = document.getElementById("email-show");
    let showNum = document.getElementById("telefono-show");
    let showTime = document.getElementById("tiempo-show");
    let showInv = document.getElementById("interes-show");
    let showTot = document.getElementById("total-show");
    let showGan = document.getElementById("ganancia-show");

    let gananciaTotal = 0;
    let ganancia = 0;


    // CAMBIAMOS EL DISABLED A LA CLASE RIGTH PARA MOSTRAR EL OTRO CONTENIDO
    
     contPost.classList.remove("disabled");
     
     contPre.classList.add("disabled");

    //  Cambiamos el texto del span y ponemos el valor capturado en las variables del formulario
  
        showNom.innerHTML = cNombres;
        showCorreo.innerHTML = cEmail;
        showNum.innerHTML = cTelefono;

        switch (cTiempo) {
            case "1":
                // Captura de tiempo y conversion a meses
                    showTime.innerText = "12 Meses";
                    // Calculo de inversion
                    showInv.innerText = "0.8%";
                    ganancia= (cInversion * 0.8)/100 * 12; 
                    gananciaTotal = parseInt(cInversion) + parseInt(ganancia);
    
                    showTot.innerText = gananciaTotal;
                    showGan.innerText = ganancia;
    
                break;
            case "2":
                // Captura de tiempo y conversion a meses
                showTime.innerText = "24 Meses";
                // Calculo de inversion
                    showInv.innerText = "1.3%";
                    ganancia= (cInversion * 1.3)/100 * 24; 
                    gananciaTotal = parseInt(cInversion) + parseInt(ganancia);
                        
                    showTot.innerText = gananciaTotal;
                    showGan.innerText = ganancia;
    
                break;
            case "3":
                // Captura de tiempo y conversion a meses
                showTime.innerText = "36 Meses";
                // Calculo de inversion
                    showInv.innerText = "1.7%";
                    ganancia= (cInversion * 1.7)/100 * 36; 
                    gananciaTotal = parseInt(cInversion) + parseInt(ganancia);
                        
                    showTot.innerText = gananciaTotal;
                    showGan.innerText = ganancia;

                break;
        }
    



}

// Ejercicio while
// let contador = 100 ;

    // while (contador > 0  ) {
         
    //     console.log (contador);
    //     contador = contador - 1; 
    // } 



     // alert ("Bienvenido usuario " + cNombres + "Su telefono es " + cTelefono + " y su correo es " + cEmail );
    // console.log ("Bienvenido usuario" + cNombres + "Su telefono es " + cTelefono)