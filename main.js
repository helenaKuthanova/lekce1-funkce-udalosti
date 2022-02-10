// tady je místo pro náš program


// Sečte dvě čísla na vstupu a vrátí výsledek
function secti(a, b) {
  let c = a + b;
  return c;
}

// Zobrazí výsledek (po stisknutí -- to zadám v HTML)
function zobrazVysledek(a, b) {
    let vysledek = document.querySelector('#vysledek');
    vysledek.innerHTML = secti(a, b);
}

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni(element) {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log('Gratulace, konečně jsi spustila tu funkci!');
  zamenText(element)
}

/* zamění text ve vybraném elementu */
function zamenText(selektor) {
    let prvek = document.querySelector(selektor)
    prvek.textContent = 'Konečně!'
}

/* změní barvu zadaného prvku */
function zmenBarvuNaZelenou(selektor) {
    let prvek = document.querySelector(selektor);
    prvek.style.backgroundColor = "green";
}

function zmenBarvuNaZlutou(selektor) {
    let prvek = document.querySelector(selektor);
    prvek.style.backgroundColor = "yellow";
}

function spustiPokusnyRadek(id) {
    let pokusnyRadek = document.querySelector(id)
    pokusnyRadek.innerHTML = '<em>Zkouším pokus na pokusném řádku.<\em>'
}