window.addEventListener('load', function() {
	//stran nalozena
	document.querySelector("#prijavniGumb").addEventListener('click', vnesiIme); 

	function vnesiIme(){
		var prekrij = document.querySelector(".pokrivalo");
		prekrij.style.display="none";
		var ime = document.querySelector("#uporabnisko_ime").value;
		document.querySelector("#uporabnik").innerHTML=ime;
	}
	
	document.querySelector("#dodajGumb").addEventListener('click', dodajOpomnik); 
	function dodajOpomnik(){
		var naziv = document.querySelector("#naziv_opomnika").value;
		var cas = document.querySelector("#cas_opomnika").value;
		document.querySelector("#naziv_opomnika").value = "";
		document.querySelector("#cas_opomnika").value = "";
		
		document.querySelector("#opomniki").innerHTML = "<div class='opomnik'> <div class='naziv_opomnika'>" +naziv+ "</div> <div class='cas_opomnika'> Opomnik čez <span> "+cas+"</span> sekund. </div> </div>";
	}
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});