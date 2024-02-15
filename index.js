// Classificação de Nível
//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal

let pontos = saldoVitorias(46 , 10) 

	function saldoVitorias(numA, numB){
    	let calcula = numA - numB
 			return calcula
    
    }
    	
        
	if (pontos < 10){
		nivel = ("Ferro")
	}
    
    if (pontos >= 11 && 20){
        nivel = ("Bronze")
    }
    
    if (pontos >= 21 && 50){
        nivel = ("Prata")
    }
    
    if (pontos >= 51 && 80){
        nivel = ("Ouro")
    }
    
    if (pontos >= 81 && 90){
        nivel = ("Diamante")
    }
    
    if (pontos >= 91 && 100){
        nivel = ("Lendário")
    }
    
    if (pontos >= 101){
        nivel = ("Imortal")
    }
    	console.log("O Herói tem de saldo de " + pontos + " pontos e está no nível " + nivel)
   