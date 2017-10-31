


	function isValidCard(){
		var cardNumber= prompt('Ingresa el número de la tarjeta');     		//Solicita el número de la tarjeta.
			if(cardNumber.length > 10 && cardNumber.length < 16){				//Se asegura que sea el número correcto de dígitos.							

				var valid;													//Regresará la validez de la tarjeta.
				var sum = 0;
				var digits = cardNumber.length;
				var parity = digits % 2;

				for (var i = 0; i < digits; i++) {
					var digit= parseInt(cardNumber.charAt(i))

					if(i % 2 == parity) digit *= 2;

					if(digit > 9) digit -= 9;

					sum += digit;
				}

				if (sum % 10 == 0){
					valid = true;
					console.log( 'La tarjeta es valida')
				}

				if (sum % 10 !== 0){
					valid = false;
					console.log( 'Lo sentimos,el número de la tarjeta no es valido')
				}

			}else{
				alert('Verifica el número de tu tarjeta.\n Debes ingresar mínimo 10 y máximo 16 dígitos.\n Asegurate de solo utilizar números.')
			}
	console.log(valid);
	return valid;
	}

isValidCard()