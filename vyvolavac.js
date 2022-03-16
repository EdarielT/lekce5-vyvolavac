let jmena = [
    "Markéta",
    "Kateřina",
    "Júlia",
    "Lucie",
    "Aneta",
    "Veronika",
    "Petra",
    "Olga",
    "Naďa",
    "Nikola",
    "Eva",
    "Anísa",
    "Terezia",
    "Diana",
    "Anna",
    "Iva",
    "Denisa",
    "Zuzana",
    "Jana",
    "Martina",
    "Lenka",
    "Iveta",
    "Pavla",
    "Lucie",
    "Kamila",
    "Soňa"
];

let tazenaJmena = [];

function tahnoutJmeno() {
    if (jmena.length === 0) {
        return;
    }

    // Generujeme náhodný index
    let vyherniIndex = Math.floor(Math.random() * jmena.length);

    // Získáme výherní jméno na patřičném indexu
    let vyherniJmeno = jmena[vyherniIndex];

    // Vyřadíme vylosované jméno z osudí
    jmena.splice(vyherniIndex, 1);

    // Výherní jméno si uložíme do pole k ostatním výherním
    tazenaJmena.unshift(vyherniJmeno);

    let vyherce = document.querySelector('#vyherka');
    vyherce.textContent = vyherniJmeno;

    let seznam = document.querySelector('#seznam');
    seznam.textContent = tazenaJmena.join(', ');
    
    pocitadlo();
}


//counting girls that have been called
//let numberOfGirls = tazenaJmena.length;
let pocitadlo = () =>{
    //numberOfGirls++;
    let numberOfGirls = tazenaJmena.length;
    if (!(numberOfGirls < 5)){
        document.getElementById('pocitadlo').innerHTML = `Již ${numberOfGirls} holek bylo vyvoláno`;
    } else if (numberOfGirls > 1) {
        document.getElementById('pocitadlo').innerHTML = `Již ${numberOfGirls} holky bylo vyvoláno`;
    } else if (numberOfGirls === 1){
        document.getElementById('pocitadlo').innerHTML = `Již ${numberOfGirls} holka byla vyvolána`;
    } else {
        document.getElementById('pocitadlo').innerHTML = `Zatím nebyla vyvolána žádná holka`;
    }
}

//restarting the calling cycle
let startOver = () => {

    let gettingAllNamesBack = (element) => {
        jmena.unshift(element);
    }
    
    tazenaJmena.forEach(gettingAllNamesBack);

    //clearing all the data and getting to a start point
    tazenaJmena = [];
    pocitadlo();

    let seznam = document.querySelector('#seznam');
    seznam.textContent = tazenaJmena;
    let vyherce = document.querySelector('#vyherka');
    vyherce.textContent = ' ';

}