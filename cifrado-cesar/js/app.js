document.getElementById('html');

function cipher(){
        var  text= prompt('Ingresa el texto que deseas cifrar');	//Solicita el texto a cifrar.

	    	if(text!=''){											//Evalua si el campo no est� vac�o.

			var ciphered=" ";                        				// Donde se guardar� el texto cifrado.

			for(i=0; i< text.length; i++){       		 			//Recorre el texto ingresado para evaluar cada letra y
				var letterCode= text.charCodeAt(i);					//encontrar su equivalente en el c�digo ASCII.
				
				if(65 <= letterCode  && letterCode <= 90){			//Evalua si la letra se encuentra entre el grupo de may�sculas.
					ciphered += String.fromCharCode(( 			    //Aplica la f�rmula del cifrado, confierte en string y 
					letterCode-65 + 33)% 26 + 65);				    //agrega el resultado la variable del nuevo texto.
				}

				else if(97 <=letterCode && letterCode <= 122){		//Evalua si la letra se encuentra entre el grupo de min�sculas.
					ciphered += String.fromCharCode(( 			    //Aplica la f�rmula del cifrado, confierte en string y 
					letterCode-97 + 33)% 26 + 97);				    //agrega el resultado la variable del nuevo texto.
				}
				else{
					ciphered+=text.charAt(i);						//Conserva y regresa todos los car�cteres que no son letras.
				}		
			}
				console.log(ciphered);								//Muestra el texto en consola.
				alert(ciphered);									//Muestra el texto en alerta.
				document.write(ciphered);							//Muestra el texto en el documento
				return ciphered;									//Regresa el texto cifrado.
			}else{
				alert('El campo no puede estar vacio')
			}	
	}






function decipher(){
       var  text= prompt('Ingresa el texto que deseas descifrar'); 		//Solicita el texto a descifrar.

	       if(text!=''){											   	//Evalua si el campo no est� vac�o.

			var deciphered=" ";                        					// Donde se guardar� el texto cifrado.

			for(i=0; i< text.length; i++){       		 				//Recorre el texto ingresado para evaluar cada letra y
				var letterCode= text.charCodeAt(i);						//encontrar su equivalente en el c�digo ASCII.
				
				if(65 <= letterCode  && letterCode <= 90){				//Evalua si la letra se encuentra entre el grupo de may�sculas.
					deciphered += String.fromCharCode(( 				//Convierte en string el resultado de desplazar los caracteres en forma inversa.      
					letterCode+32)% 26 + 65);					  		//agrega el resultado la variable del nuevo texto. ** interesante: si ponia 33 me desplazaba un lugar en el c�digo. nota mental: averiguar si es por el index 0.
				}

				else if(97 <=letterCode && letterCode <= 122){			//Evalua si la letra se encuentra entre el grupo de min�sculas.
					deciphered += String.fromCharCode(( 				//Convierte en string el resultado de desplazar los caracteres en forma inversa.    
					letterCode-26)% 26 + 97);				        	//agrega el resultado la variable del nuevo texto.
				}
				else{
					deciphered+=text.charAt(i);							//Conserva y regresa todos los car�cteres que no son letras.
				}		
			}
			console.log(deciphered);									//Muestra el texto en consola.
			alert(deciphered);											//Muestra el texto en alerta.
			document.write(deciphered);									//Muestra el texto en el documento.
			return deciphered;											//Regresa el texto descifrado.
			
			}else{
					alert('El campo no puede estar vacio');				//Advierte que el campo no puedes estar vac�o.
				}	
}



	cipher();
	decipher();
