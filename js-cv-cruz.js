function myFunction(value) {
    document.getElementById("descripcion").innerHTML = value;
    document.addEventListener("keyup", function(event) {
if (event.key === 'Enter') {
  document.getElementById("prueba").style.display = 'none' ;
      document.getElementById("descripcion").style.display = 'block';
}
});
}


  function mostrar(value) {
      document.getElementById("prueba").style.display = 'block' ;
      document.getElementById("prueba").focus();
      document.getElementById("descripcion").style.display = 'none';
  }

  function mostrarnombre(value) {
    document.getElementById("nombretxt").style.display = 'block';
    document.getElementById("nombretxt").focus();
    document.getElementById("nombre").style.display = 'none';
  }
  function colocarnombre(value) {
    document.getElementById("nombre").innerHTML = value;
    document.addEventListener("keyup", function(event) {
if (event.key === 'Enter') {
  document.getElementById("nombretxt").style.display = 'none' ;
      document.getElementById("nombre").style.display = 'block';
}
});
}
function colocatelcont(value) {
  document.getElementById("tel-cont").innerHTML = value;
  document.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        document.getElementById("telc").style.display='none';
        document.getElementById("tel-cont").style.display='inline';
    }
  });
}
function muestratelcont(value) {
  document.getElementById("telc").style.display = 'inline';
    document.getElementById("telc").focus();
    document.getElementById("tel-cont").style.display = 'none';
}

function colocaemail(value) {
  document.getElementById("mail-cont").innerHTML = value;
  document.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        document.getElementById("mail").style.display='none';
        document.getElementById("mail-cont").style.display='inline';
    }
  });
}
function muestraemail(value) {
  document.getElementById("mail").style.display = 'inline';
    document.getElementById("mail").focus();
    document.getElementById("mail-cont").style.display = 'none';
}

function colocadir(value) {
  document.getElementById("dir-cont").innerHTML = value;
  document.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        document.getElementById("dir").style.display='none';
        document.getElementById("dir-cont").style.display='inline';
    }
  });
}
function muestradir(value) {
  document.getElementById("dir").style.display = 'inline';
    document.getElementById("dir").focus();
    document.getElementById("dir-cont").style.display = 'none';
}

function previewImage(event, querySelector){

	//Recuperamos el input que desencadeno la acción
	const input = event.target;
	
	//Recuperamos la etiqueta img donde cargaremos la imagen
	$imgPreview = document.querySelector(querySelector);

	// Verificamos si existe una imagen seleccionada
	if(!input.files.length) return
	
	//Recuperamos el archivo subido
	file = input.files[0];

	//Creamos la url
	objectURL = URL.createObjectURL(file);
	
	//Modificamos el atributo src de la etiqueta img
	$imgPreview.src = objectURL;
                
}
 // Si esta seleccionado (si la propiedad checked es igual a true)
 function mostrar1 (){

  var checkBox = document.getElementById("desc1");
  var text = document.getElementById("des-ing-1");
  var parr = document.getElementById("tex1");

  if (checkBox.checked == true){
    text.style.display = "inline";
    document.getElementById("des-ing-1").focus();
    parr.style.display= "none"

  } else {
     text.style.display = "none";
     parr.style.display= "inline"
     document.getElementById("tex1").innerHTML = "Click en el check para ingresar estudio"
     
}}

function colocardes(value) {
  document.getElementById("tex1").innerHTML = value;
  document.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        document.getElementById("des-ing-1").style.display = 'none' ;
        document.getElementById("tex1").style.display = 'inline';
        document.getElementById("desc2").style.display ='inline';
        document.getElementById("tex2").style.display = 'inline';
    }  
  })
};

  // Si esta seleccionado (si la propiedad checked es igual a true)
  function mostrar1 (){

    var checkBox = document.getElementById("desc1");
    var text = document.getElementById("des-ing-1");
    var parr = document.getElementById("tex1");
  
    if (checkBox.checked == true){
      text.style.display = "inline";
      document.getElementById("des-ing-1").focus();
      parr.style.display= "none"
  
    } else {
       text.style.display = "none";
       parr.style.display= "inline"
       document.getElementById("tex1").innerHTML = "Click en el check para ingresar estudio"
       
  }}
  
  function colocardes(value) {
    document.getElementById("tex1").innerHTML = value;
    document.addEventListener("keyup", function(event) {
      if (event.key === 'Enter') {
          document.getElementById("des-ing-1").style.display = 'none' ;
          document.getElementById("tex1").style.display = 'inline';
          document.getElementById("desc2").style.display ='inline';
          document.getElementById("tex2").style.display = 'inline';
      }  
    })
  };
  
  function mostrar2 (){

    var checkBox2 = document.getElementById("desc2");
    var text2 = document.getElementById("des-ing-2");
    var parr2 = document.getElementById("tex2");
  
    if (checkBox2.checked == true){
      text2.style.display = "inline";
      document.getElementById("des-ing-2").focus();
      parr2.style.display= "none"
  
    } else {
       text2.style.display = "none";
       parr2.style.display= "inline"
       document.getElementById("tex2").innerHTML = "Click en el check para ingresar estudio"
       
  }}
  
  function colocardes2(value) {
    document.getElementById("tex2").innerHTML = value;
    document.addEventListener("keyup", function(event) {
      if (event.key === 'Enter') {
          document.getElementById("des-ing-2").style.display = 'none' ;
          document.getElementById("tex2").style.display = 'inline';
          document.getElementById("desc3").style.display ='inline';
          document.getElementById("tex3").style.display = 'inline';
      }  
    })
  };
  
  function mostrar3 (){

    var checkBox3 = document.getElementById("desc3");
    var text3 = document.getElementById("des-ing-3");
    var parr3 = document.getElementById("tex3");
  
    if (checkBox3.checked == true){
      text3.style.display = "inline";
      document.getElementById("des-ing-3").focus();
      parr3.style.display= "none"
  
    } else {
       text3.style.display = "none";
       parr3.style.display= "inline"
       document.getElementById("tex3").innerHTML = "Click en el check para ingresar estudio"
       
  }}
  function colocardes3(value) {
    document.getElementById("tex3").innerHTML = value;
    document.addEventListener("keyup", function(event) {
      if (event.key === 'Enter') {
          document.getElementById("des-ing-3").style.display = 'none' ;
          document.getElementById("tex3").style.display = 'inline';
          document.getElementById("desc4").style.display ='inline';
          document.getElementById("tex4").style.display = 'inline';
      }  
    })
  };
  
  function mostrar4 (){

    var checkBox4 = document.getElementById("desc4");
    var text4 = document.getElementById("des-ing-4");
    var parr4 = document.getElementById("tex4");
  
    if (checkBox4.checked == true){
      text4.style.display = "inline";
      document.getElementById("des-ing-4").focus();
      parr4.style.display= "none"
  
    } else {
       text4.style.display = "none";
       parr4.style.display= "inline"
       document.getElementById("tex4").innerHTML = "Click en el check para ingresar estudio"
       
  }}
  
  function colocardes4(value) {
    document.getElementById("tex4").innerHTML = value;
    document.addEventListener("keyup", function(event) {
      if (event.key === 'Enter') {
          document.getElementById("des-ing-4").style.display = 'none' ;
          document.getElementById("tex4").style.display = 'inline';
          document.getElementById("desc5").style.display ='inline';
          document.getElementById("tex5").style.display = 'inline';
      }  
    })
  };
  
  function mostrar5 (){

    var checkBox5 = document.getElementById("desc5");
    var text5 = document.getElementById("des-ing-5");
    var parr5 = document.getElementById("tex5");
  
    if (checkBox5.checked == true){
      text5.style.display = "inline";
      document.getElementById("des-ing-5").focus();
      parr5.style.display= "none"
  
    } else {
       text5.style.display = "none";
       parr5.style.display= "inline"
       document.getElementById("tex5").innerHTML = "Click en el check para ingresar estudio"
       
  }}
  function colocardes5(value) {
    document.getElementById("tex5").innerHTML = value;
    document.addEventListener("keyup", function(event) {
      if (event.key === 'Enter') {
          document.getElementById("des-ing-5").style.display = 'none' ;
          document.getElementById("tex5").style.display = 'inline';
         
      }  
    })
  };
  //antecedente
  function mostrare1 (){

    var checkBoxe = document.getElementById("exp1");
    var etext = document.getElementById("edes-ing-1");
    var parre = document.getElementById("etex1");
  
    if (checkBoxe.checked == true){
      etext.style.display = "inline";
      document.getElementById("edes-ing-1").focus();
      parre.style.display= "none"
  
    } else {
       etext.style.display = "none";
       parre.style.display= "inline"
       document.getElementById("etex1").innerHTML = "Click en el check para ingresar antecedente"
       
  }}
  
  function colocare(value) {
    document.getElementById("etex1").innerHTML = value;
    document.addEventListener("keyup", function(event) {
      if (event.key === 'Enter') {
          document.getElementById("edes-ing-1").style.display = 'none' ;
          document.getElementById("etex1").style.display = 'inline';
          document.getElementById("exp2").style.display ='inline';
          document.getElementById("etex2").style.display = 'inline';
      }  
    })
  };
  function mostrare2 (){

    var checkBoxe2 = document.getElementById("exp2");
    var etext2 = document.getElementById("edes-ing-2");
    var parre2 = document.getElementById("etex2");
  
    if (checkBoxe2.checked == true){
      etext2.style.display = "inline";
      document.getElementById("edes-ing-2").focus();
      parre2.style.display= "none"
  
    } else {
       etext2.style.display = "none";
       parre2.style.display= "inline"
       document.getElementById("etex2").innerHTML = "Click en el check para ingresar antecedente"
       
  }}
  
  function colocare2(value) {
    document.getElementById("etex2").innerHTML = value;
    document.addEventListener("keyup", function(event) {
      if (event.key === 'Enter') {
          document.getElementById("edes-ing-2").style.display = 'none' ;
          document.getElementById("etex2").style.display = 'inline';
          document.getElementById("exp3").style.display ='inline';
          document.getElementById("etex3").style.display = 'inline';
      }  
    })
  };

  function mostrare3 (){

    var checkBoxe3 = document.getElementById("exp3");
    var etext3 = document.getElementById("edes-ing-3");
    var parre3 = document.getElementById("etex3");
  
    if (checkBoxe3.checked == true){
      etext3.style.display = "inline";
      document.getElementById("edes-ing-3").focus();
      parre3.style.display= "none"
  
    } else {
       etext3.style.display = "none";
       parre3.style.display= "inline"
       document.getElementById("etex3").innerHTML = "Click en el check para ingresar antecedente"
       
  }}
  
  function colocare3(value) {
    document.getElementById("etex3").innerHTML = value;
    document.addEventListener("keyup", function(event) {
      if (event.key === 'Enter') {
          document.getElementById("edes-ing-3").style.display = 'none' ;
          document.getElementById("etex3").style.display = 'inline';
          document.getElementById("exp4").style.display ='inline';
          document.getElementById("etex4").style.display = 'inline';
      }  
    })
  };

  function mostrare4 (){

    var checkBoxe4 = document.getElementById("exp4");
    var etext4 = document.getElementById("edes-ing-4");
    var parre4 = document.getElementById("etex4");
  
    if (checkBoxe4.checked == true){
      etext4.style.display = "inline";
      document.getElementById("edes-ing-4").focus();
      parre4.style.display= "none"
  
    } else {
       etext4.style.display = "none";
       parre4.style.display= "inline"
       document.getElementById("etex4").innerHTML = "Click en el check para ingresar antecedente"
       
  }}
  
  function colocare4(value) {
    document.getElementById("etex4").innerHTML = value;
    document.addEventListener("keyup", function(event) {
      if (event.key === 'Enter') {
          document.getElementById("edes-ing-4").style.display = 'none' ;
          document.getElementById("etex4").style.display = 'inline';
          document.getElementById("exp5").style.display ='inline';
          document.getElementById("etex5").style.display = 'inline';
      }  
    })
  };

  function mostrare5 (){

    var checkBoxe5 = document.getElementById("exp5");
    var etext5 = document.getElementById("edes-ing-5");
    var parre5 = document.getElementById("etex5");
  
    if (checkBoxe5.checked == true){
      etext5.style.display = "inline";
      document.getElementById("edes-ing-5").focus();
      parre5.style.display= "none"
  
    } else {
       etext5.style.display = "none";
       parre5.style.display= "inline"
       document.getElementById("etex5").innerHTML = "Click en el check para ingresar antecedente"
       
  }}
  
  function colocare5(value) {
    document.getElementById("etex5").innerHTML = value;
    document.addEventListener("keyup", function(event) {
      if (event.key === 'Enter') {
          document.getElementById("edes-ing-5").style.display = 'none' ;
          document.getElementById("etex5").style.display = 'inline';
          
      }  
    })
  };
  //Referencia
  function mostrarref (){

    var checkBoxr = document.getElementById("ref1");
    var rtext = document.getElementById("rdes-ing-1");
    var parrr = document.getElementById("rtex");
  
    if (checkBoxr.checked == true){
      rtext.style.display = "inline";
      document.getElementById("rdes-ing-1").focus();
      parrr.style.display= "none"
  
    } else {
       rtext.style.display = "none";
       parrr.style.display= "inline"
       document.getElementById("rtex").innerHTML = "Click en el check para ingresar antecedente"
       
  }}
  
  function colocarr(value) {
    document.getElementById("rtex").innerHTML = value;
    document.addEventListener("keyup", function(event) {
      if (event.key === 'Enter') {
          document.getElementById("rdes-ing-1").style.display = 'none' ;
          document.getElementById("rtex").style.display = 'inline';
          document.getElementById("ref2").style.display ='inline';
          document.getElementById("rtex2").style.display = 'inline';
      }  
    })
  };

  function mostrarr2 (){

    var checkBoxr2 = document.getElementById("ref2");
    var rtext2 = document.getElementById("rdes-ing-2");
    var parrr2 = document.getElementById("rtex2");
  
    if (checkBoxr2.checked == true){
      rtext2.style.display = "inline";
      document.getElementById("rdes-ing-2").focus();
      parrr2.style.display= "none"
  
    } else {
       rtext2.style.display = "none";
       parrr2.style.display= "inline"
       document.getElementById("rtex2").innerHTML = "Click en el check para ingresar antecedente"
       
  }}
  
  function colocarr2(value) {
    document.getElementById("rtex2").innerHTML = value;
    document.addEventListener("keyup", function(event) {
      if (event.key === 'Enter') {
          document.getElementById("rdes-ing-2").style.display = 'none' ;
          document.getElementById("rtex2").style.display = 'inline';
          document.getElementById("ref3").style.display ='inline';
          document.getElementById("rtex3").style.display = 'inline';
      }  
    })
  };

  function mostrarr3 (){

    var checkBoxr3 = document.getElementById("ref3");
    var rtext3 = document.getElementById("rdes-ing-3");
    var parrr3 = document.getElementById("rtex3");
  
    if (checkBoxr3.checked == true){
      rtext3.style.display = "inline";
      document.getElementById("rdes-ing-3").focus();
      parrr3.style.display= "none"
  
    } else {
       rtext3.style.display = "none";
       parrr3.style.display= "inline"
       document.getElementById("rtex3").innerHTML = "Click en el check para ingresar antecedente"
       
  }}
  
  function colocarr3(value) {
    document.getElementById("rtex3").innerHTML = value;
    document.addEventListener("keyup", function(event) {
      if (event.key === 'Enter') {
          document.getElementById("rdes-ing-3").style.display = 'none' ;
          document.getElementById("rtex3").style.display = 'inline';
          document.getElementById("ref4").style.display ='inline';
          document.getElementById("rtex4").style.display = 'inline';
      }  
    })
  };

  function mostrarr4 (){

    var checkBoxr4 = document.getElementById("ref4");
    var rtext4 = document.getElementById("rdes-ing-4");
    var parrr4 = document.getElementById("rtex4");
  
    if (checkBoxr4.checked == true){
      rtext4.style.display = "inline";
      document.getElementById("rdes-ing-4").focus();
      parrr4.style.display= "none"
  
    } else {
       rtext4.style.display = "none";
       parrr4.style.display= "inline"
       document.getElementById("rtex4").innerHTML = "Click en el check para ingresar antecedente"
       
  }}
  
  function colocarr4(value) {
    document.getElementById("rtex4").innerHTML = value;
    document.addEventListener("keyup", function(event) {
      if (event.key === 'Enter') {
          document.getElementById("rdes-ing-4").style.display = 'none' ;
          document.getElementById("rtex4").style.display = 'inline';
          document.getElementById("ref5").style.display ='inline';
          document.getElementById("rtex5").style.display = 'inline';
      }  
    })
  };

  function mostrarr5 (){

    var checkBoxr5 = document.getElementById("ref5");
    var rtext5 = document.getElementById("rdes-ing-5");
    var parrr5 = document.getElementById("rtex5");
  
    if (checkBoxr5.checked == true){
      rtext5.style.display = "inline";
      document.getElementById("rdes-ing-5").focus();
      parrr5.style.display= "none"
  
    } else {
       rtext5.style.display = "none";
       parrr5.style.display= "inline"
       document.getElementById("rtex5").innerHTML = "Click en el check para ingresar antecedente"
       
  }}
  
  function colocarr5(value) {
    document.getElementById("rtex5").innerHTML = value;
    document.addEventListener("keyup", function(event) {
      if (event.key === 'Enter') {
          document.getElementById("rdes-ing-5").style.display = 'none' ;
          document.getElementById("rtex5").style.display = 'inline';
          
      }  
    })
  };