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


// Runden Zahl heraus finden  --> function rundenZahlFinden
// alle Radio Buttons rein
for (let i = 0 ; i < btnRadio.length ; i++) {

btnRadio[i].addEventListener("click", (e) => {
    console.log("radio  in for")
    console.log(btnRadio[i]);
    if(btnRadio[i].checked) {   // prüft nur ob es btnRadio gibt und geht dann weiter
        console.log("radio  in if");
        console.log(btnRadio[i].checked);
        console.log(btnRadio[i].value);
    rundenZahlFinden(e,i);
    }
});
}



function rundenZahlFinden(e,i) {
    console.log("radio in function")
    console.log(e);
    
/*     if(btnRadio) {   // unnötig, da schon oben
        console.log("button checked");
        console.log(btnRadio) // alle 4 da
        console.log(typeof btnRadio); // object
        console.log(Array.isArray(btnRadio)); 
        console.log(btnRadio[i].value)
 */
        if(btnRadio[i].value === "custom") {
            console.log(btnRadio[i].value);
            console.log(unhidden);
          // const unhidden = document.querySelector("#custom___hidden")
            unhidden.classList.add("js_display___block")
            console.log(unhidden)

            // Runden Zahl die User eingibt bei hidden holen
            
            
        }
        else{
            console.log(btnRadio[i].value);
            unhidden.classList.add("js_display___none")
            unhidden.classList.remove("js_display___block")

            userRunden = btnRadio[i].value
            console.log(userRunden)
            

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
}