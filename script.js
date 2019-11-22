function calculer() {
    var res = parseInt(document.forms[0].A.value) + parseInt(document.forms[0].B.value);
    document.getElementById('resultat').innerHTML = res;	
}