var CreationTableauLangages = function () {
	let langages = ["Html","CSS","Java","PHP"];
	console.log(langages);
	return langages;
}

var CreationTableauNombres = function () {
	let nombres = [0,1,2,3,4,5];
	console.log(nombres);
	return nombres;
}

var RemplacementElement = function (langages) {
	langages[2] = "Javascript";
	console.log(langages);
	return langages;
}

var AjoutElementLangages = function (langages) {
	langages.push('Ruby', 'Python');
	console.log(langages);
	return langages;

}

var AjoutElementNombres = function (nombres) {
	nombres.unshift(-2,-1);
	console.log(nombres);
	return nombres;
}

var SuppressionPremierElement = function (langages) {
	langages.shift();
	console.log(langages);
	return langages;

}

var SuppressionDernierElement = function (langages) {
	langages.pop();
	console.log(langages);
	return langages;

}

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
	console.log(reseaux_sociaux_chaine.split(','));
	return reseaux_sociaux_chaine.split(',');
}

var ConversionTableauChaine = function (langages) {
	console.log(langages.join());
	return langages.join();

}

var TriTableau = function (reseaux_sociaux) {
	console.log(reseaux_sociaux.sort());
	return reseaux_sociaux.sort();
}

var InversionTableau = function (reseaux_sociaux){
	reseaux_sociaux.reverse();
	console.log(reseaux_sociaux);
	return reseaux_sociaux;

}