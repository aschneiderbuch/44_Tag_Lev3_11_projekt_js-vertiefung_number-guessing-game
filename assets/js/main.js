console.log("test");

/* 

*/

// Zahl wischen 1 und 100   zufällig
// Rückgabe höher niedriger 
// Anzahl der Versuche wählen      
// frei Eingabe
// Counter


//click guess Button  --> function berechnen
const btn = document.querySelector("#button");
console.log(btn);
btn.addEventListener("click", (e) => {
    berechnen(e);
});

const inputZahlUser = document.querySelector("#inputZahlUser");

// Runden Radio Buttons auswählen 
// Szenario 0 
const btnRadio = document.querySelectorAll("input[type=radio");
console.log(btnRadio);
console.log(btnRadio[3].value); // Num oder text custom
console.log(btnRadio[3].checked); // true false

/*
 // Szenario 1
const btnRadio2 = document.querySelector("#radio___display");    // geht holt value des gedrückten rein
btnRadio2.addEventListener("change", (e) => {
    console.log(e.target.value);
});

// Szenario 2
const btnRadio3 = document.querySelector("input[type=radio]");    // geht holt value des gedrückten rein
btnRadio2.addEventListener("change", (e) => {
    console.log(e.target.value);
});

// Szenario 3
const btnRadio4 = document.querySelectorAll("input[type=radio]");// geht holt value des gedrückten rein
btnRadio2.addEventListener("change", (e) => {
    console.log(e.target.value);
});
 */

const unhidden = document.querySelector("#custom___hidden")
unhidden.classList.add("js_display___none")

let userRunden = 0;
const inputRundenZahl = document.querySelector("#custom___hidden");

const outputUserRunden = document.querySelector("h3")

const outputErgebnisVersuch = document.querySelector("h4")

let userVersuche = 0;   // muss let und nicht const sein, sonst kann es der Versuchszähler in der function berechnen nicht verändern

const outputVersuche = document.querySelector("h2");

let ergebnisVersuch = 0


/* *********************+ Ende  Var und eventListener ********************* */
/* *********************+ Ende  Var und eventListener ********************* */
/* *********************+ Ende  Var und eventListener ********************* */




// Runden Zahl heraus finden  --> function rundenZahlFinden
// alle Radio Buttons rein
console.log("--- " +  btnRadio)
console.log(btnRadio)
// console.log(btnRadio.e.value); // geht nicht
// console.log(btnRadio.e.target.value); // geht nicht
for (let i = 0; i < btnRadio.length; i++) {

    btnRadio[i].addEventListener("click", (e) => {
        console.log("radio  in for")
        console.log(btnRadio[i]);
        if (btnRadio[i].checked) {   // prüft nur ob es btnRadio gibt und geht dann weiter
            console.log("radio  in if");
            console.log(btnRadio[i].checked);
            console.log(btnRadio[i].value);
            rundenZahlFinden(e, i);
        }
    });
}


/**
 * 
 * @param {*} e 
 * @param {*} i 
 */
function rundenZahlFinden(e, i) {
    console.log("radio in function")
    console.log(e);


    if (btnRadio[i].value === "custom") {
        console.log(btnRadio[i].value);
        console.log(unhidden);
        // const unhidden = document.querySelector("#custom___hidden")
        unhidden.classList.add("js_display___block")
        console.log(unhidden)


        // Runden Zahl die User eingibt bei hidden holen
        // ??? input 
        const zeitStopp = 5;     // => 5 = 5 Sec, weil setInterval 1000 = 1 sec
        let intervallRunden = 0;
        const intervallStopVar = setInterval(function () {     // in Var intervallStopVar packen, damit is später mit clearIntervall gestoppt wird
            userRunden = Number(inputRundenZahl.value);
            console.log(userRunden);
            intervallRunden++;
            console.log(intervallRunden);
            document.querySelector(`#intervall`).innerHTML = (`mach deine Rundeneingabe, du hast ${zeitStopp} Sekunden Zeit --> ${intervallRunden} <--`);

            console.log(userRunden)
            displayRaido(userRunden); // userRunden müssten nicht übergeben werde, da userRunden global Var


            // Intervall stoppen 
            // Intervall stoppen 
            // Intervall stoppen 
            if (intervallRunden >= (`${zeitStopp}`)) {
                // stoppen des Intervalls, setIntervall deshalb in eine Var packen
                clearInterval(intervallStopVar)
                console.log("in Intervall stoppen")
            };

        }, 1000)   // prüft jede 1 Sekunde den Wert


        console.log(userRunden);
        console.log(intervallRunden);

        // displayRaido();  // geht hier nicht, da user Runden 0

    }




    else {
        console.log(btnRadio[i].value);
        unhidden.classList.add("js_display___none")
        unhidden.classList.remove("js_display___block")

        userRunden = Number(btnRadio[i].value)
        console.log(userRunden)

        displayRaido(userRunden); // userRunden müssten nicht übergeben werde, da userRunden global Var
    }





}


console.log(userRunden);
/**
 * @param {*} function // wird aufgerufen in setIntervall und else 
 * 
 * @param {*} userRunden // userRunden müssten nicht übergeben werde, da userRunden global Var
 * @param {*} 
 * @param {*} radio___display // Radio Buttons werden ausgeblendet
 * @param {*} runden___hidden // Display der Runden 0 von 0 wird einblenden
 * @param {*} outputUserRunden // Anzeige des User Runden in der display block eingeblendeten Anzeige
 */
function displayRaido(userRunden) {
    console.log("in func displayRaido")
    if (userRunden > 0) {
        console.log(userRunden);
        const radio___display = document.querySelector("#radio___display")
        radio___display.classList.add("js_display___none")

        const runden___hidden = document.querySelector("#runden___hidden")
        runden___hidden.classList.add("js_display___block")

        // Output User Runden in der Anzeige
        outputUserRunden.innerHTML = userRunden

    }
}

// Zufallzahl erstellen     --> auserhalb der function berechnen, damit die Zufallszahl nicht jedes mal eine andere ist
const inputZahlPc = Math.floor((Math.random() * (101 - 1) + 1));
console.log("Pc Zahl: " + inputZahlPc);


/**  Function berechnen  --> 
 * @param {*} function // wird aufgerufen durch eventListener auf button guess
 * 
 * @param {*} e 
 * Zufallszahl PC
 * Zahl user durch input in Textfeld
 */
function berechnen(e) {
    console.log("in eventListener function berechnen");
    console.log(e);

    const inputZahlUserVal = Number(inputZahlUser.value);
    console.log(inputZahlUserVal);

    console.log(userRunden); // hat er mit Radio Buttons ausgewählt
    console.log(userVersuche)

    if (userVersuche === userRunden) {    // das begrenzt das Spiel auf die ausgewählten Runden und zählt nicht weiter

    } else {
        userVersuche++; // erhöht die Versuche um 1 bei jedem Durchlauf
        console.log(userVersuche);

        outputVersuche.innerHTML = userVersuche
    }



    // Zufallszahl Pc erstellen   
    // floor = abrunden auf ganze Zahl
    // 101 = maximum = 100
    // -1 = minimum = 1
    // +1 = minimum = 1

    // Vergleich der Zahlen 
    if (inputZahlUserVal < inputZahlPc) {
        ergebnis = " :-( Sorry Zahl ist zu klein";
        ergebnisVersuch = 0

    }
    else if (inputZahlUserVal > inputZahlPc) {
        ergebnis = " :-( Sorry Zahl ist zu groß";
        ergebnisVersuch = 0

    }
    else {
        ergebnis = ` :-) --> richtig <-- es war ${inputZahlPc}`
        ergebnisVersuch = 1

    }

    outputErgebnisVersuch.innerHTML += `--> ${ergebnis} <br>`



    // Begrenzung der Versuche auf die ausgewählten Runden
    console.log("ausgewählte Runden: " + userRunden);
    console.log("Versuche des Users: " + userVersuche);
    console.log("Zahl Pc: " + inputZahlPc);
    console.log("Zahl user: " + inputZahlUserVal)
    console.log("Vergleichs Ergebnis :" + ergebnisVersuch)
    if (userRunden === userVersuche && ergebnisVersuch === 1) {
        ergebnis = `du hast das ganze Spiel gewonnen! <br> <br> <br> neues Spiel?`
    }
    else if (userRunden === userVersuche && ergebnisVersuch === 0) {
        ergebnis = `du hast das ganze Spiel verloren!  <br> die Zahl war ${inputZahlPc} <br> <br> neues Spiel?!`


    }
    outputErgebnisVersuch.innerHTML = (`--> ${ergebnis} <br>`)

}
