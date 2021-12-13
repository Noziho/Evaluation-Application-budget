let counter = 0;
// Fixed expenses.
const rent = document.getElementById("loyer");
const repayment = document.getElementById("remboursement");
const water = document.getElementById("eau");
const phone = document.getElementById("tel");
const homeInsurance = document.getElementById("assuranceHabitation");
const vehiculeInsurance = document.getElementById("assuranceVehicules");
const mutualHealth = document.getElementById("mutuelleSante");
const careExpenses = document.getElementById("fraisDeGarde");
const incomeTax = document.getElementById("impotSurRevenu");
const localTax = document.getElementById("impotLocaux");

//Currents expenses
const shopping = document.getElementById("courses");
const gasoline = document.getElementById("essence");
const activities = document.getElementById("activite");

//Occasional expenses
const exit = document.getElementById("sorties");
const othersExpanses = document.getElementById("autresDepense");

//Revenue calculation
const salary = document.getElementById("salaire");
const help = document.getElementById("aides");
const annuities = document.getElementById("rente");
const others = document.getElementById("autres");

//Saving.
const saving = document.getElementById("champLibre");

document.getElementById("calculate").addEventListener('click', () => {
    counter++;
    if (counter < 2) {
        let resultP = document.createElement("p");
        resultP.innerHTML = "- " + (parseFloat(rent.value)+ parseFloat(repayment.value) + parseFloat(water.value) + parseFloat(phone.value) +
            parseFloat(homeInsurance.value) + parseFloat(vehiculeInsurance.value) + parseFloat(mutualHealth.value) + parseFloat(careExpenses.value) +
            parseFloat(incomeTax.value) + parseFloat(localTax.value) + parseFloat(shopping.value) + parseFloat(gasoline.value) + parseFloat(activities.value)
            + parseFloat(exit.value) + parseFloat(othersExpanses.value))+ "€";
        document.getElementById("result").append(resultP);
    }

    else {
        let wrongP = document.createElement('p');
        wrongP.innerHTML = "Veuillez remplir toute les champs !";
        wrongP.style.color = "red";
        document.getElementById("result").append(wrongP);
    }


})
