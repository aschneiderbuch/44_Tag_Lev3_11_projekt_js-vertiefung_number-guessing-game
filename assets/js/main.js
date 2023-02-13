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
const btnRadio = document.querySelectorAll("input[type=radio");
console.log(btnRadio);
//console.log(btnRadio[3].value); // Num oder text custom
//console.log(btnRadio[3].checked); // true false

const unhidden = document.querySelector("#custom___hidden")
unhidden.classList.add("js_display___none")

let userRunden = 0;
const inputRundenZahl = document.querySelector("#custom___hidden");



/* *********************+ Ende  Var und eventListener ********************* */
/* *********************+ Ende  Var und eventListener ********************* */
/* *********************+ Ende  Var und eventListener ********************* */




// Runden Zahl heraus finden  --> function rundenZahlFinden
// alle Radio Buttons rein
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
            userRunden =  Number(inputRundenZahl.value);
            console.log(userRunden);
            intervallRunden++;
            console.log(intervallRunden);
            document.querySelector(`#intervall`).innerHTML = (`mach deine Rundeneingabe, du hast ${zeitStopp} Sekunden Zeit --> ${intervallRunden} <--`);

            console.log(userRunden)
            displayRaido(userRunden); // userRunden müssten nicht übergeben werde, da userRunden global Var

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

        userRunden = btnRadio[i].value
        console.log(userRunden)

        displayRaido(userRunden); // userRunden müssten nicht übergeben werde, da userRunden global Var
    }





}


console.log(userRunden);
/**
 * 
 * @param {*} userRunden // userRunden müssten nicht übergeben werde, da userRunden global Var
 */
function displayRaido(userRunden){ 
    console.log("in func displayRaido")
    if (userRunden > 0) {
        console.log(userRunden);
        const radio___display = document.querySelector("#radio___display")
        radio___display.classList.add("js_display___none")

        const runden___hidden = document.querySelector("#runden___hidden")
        runden___hidden.classList.add("js_display___block")

        

    }
}


/**  Function berechnen  --> 
 *  
 * @param {*} e 
 * 
 */
function berechnen(e) {
    console.log("in eventListener function berechnen");
    console.log(e);

    let inputZahlUserVal = Number(inputZahlUser.value);
    console.log(inputZahlUserVal);

    console.log(userRunden);
}