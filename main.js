function check(){
		
		var question1=document.quiz.question1.value;
		var question2=document.quiz.question2.value;
		var question3=document.quiz.question3.value;
		var question4=document.quiz.question4.value;
		var question5=document.quiz.question5.value;
		var question6=document.quiz.question6.value;
		var correct = 0;

		if (question1=="Berne") {
			correct++;
		}
		if (question2=="La France") {
			correct++;
		}
		if (question3=="Rouge/bleu/jaune/vert") {
			correct++;
		}
		if (question4=="Le Piton de la Fournaise") {
			correct++;
		}
		if (question5=="Permet de gérer le responsive design") {
			correct++
		}
		if (question6=="Le lion") {
			correct++
		}

		var messages = ["Parfait!", "Bien!", "Moyen!", "Tu peux faire mieux!"];
		var pictures = ["contenu/parfait.gif", "contenu/bien.gif", "contenu/moyen.gif", "contenu/triste.gif"]
		var range;

		if (correct < 3) {
			range = 3
		}
		if (correct > 2 && correct < 4) {
			range = 2;
		}
		if (correct > 3 && correct < 6) {
			range = 1;
		}
		if (correct > 5) {
			range = 0;
		}

		document.getElementById('after_submit').style.visibility = "visible";

		document.getElementById('message').innerHTML = messages[range];
		document.getElementById('number_correct').innerHTML = "Tu as " + correct + " réponse juste.";
		document.getElementById('picture').src = pictures[range];
	};
	