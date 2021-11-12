/*
Event:  rader 7 - 64
Pokemon: rader 65 - 118
Deck of cards: rader 120 - slut
*/

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>EVENTFUL STUFF>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const button = document.getElementById("button"); // Hämta våran knapp

// button.addEventListener("click", (event) => {
//   // Lägger en event listener för ett click event. När musknappen släpps.
//   //   console.log(event);
//   event.target.innerText = "clicked!"; // Ändrar texten på knappen till klickad.
// });

// const handleClick = () => {
//   // Ett annat sätt att anropa en funktion vid click.
//   alert("Hola");
// };

// const form = document.querySelector("form"); // Hämtar vårat formulär och sparar i variabel

// form.addEventListener("submit", (e) => {
//   // Vi sätter en event listener på formuläret
//   e.preventDefault(); // Vi vill inte att formuläret submittar något till urlen och laddar om sidan så vi stoppar default beteendet
//   const array = Array.from(e.target.elements); // Detta skapar en array baserad på den NodeListan som vi får från vårat event.
//   array.forEach((input) => {
//     // Går någonting för varje element i listan. I detta fall bara en konsol logg
//     console.log(input.value);
//   });

//   const map = array.map((input) => {
//     // En metod som skapar en my array beroende på det du returnerar i callbacken. Arrayen kommer alltid att vara lika lång som den du baserade den på
//     if (input.value === "") return;
//     return input.value;
//   });
//   console.log(map.filter((input) => input)); // Skapar en ny array utan de element som ska filtreras bort. I detta fall varje gång som input är falsey. eg. "", false, undefined eller null
// });

// const hoverEl = document.getElementById("hoverMe");

// hoverEl.addEventListener("mouseover", (e) => {
//   e.target.style.color = "red";
//   e.target.style.borderColor = "red";
// });
// hoverEl.addEventListener("mouseleave", (e) => {
//   e.stopPropagation();
//   e.target.style.color = "black";
//   e.target.style.borderColor = "black";
// });

// button.addEventListener("focus", (e) => {
//   e.target.innerText = "Focused";
// });

// button.addEventListener("blur", (e) => {
//   e.target.innerText = "blurred";
// });

// button.addEventListener("", (e) => {
//   e.target.innerText = "volume";
// });

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SWEET POKEMON BLISS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const pokebutt = document.getElementById("pokebutt"); // Hämtar knappen vi använder för att kalla på våran hämta data funktion
// const pokecard = document.getElementById("pokecard"); // En div vi har heading och en img tagg i för att visa vår hämtade pokemon på skärmen.

// pokebutt.addEventListener("click", handlePokeClick); // En event listener med en named callback. Alltså en function som är defininerad någon annan stans i koden.

/*
En asynchron funktion låser inte webbläsaren. När vi anropar ett API för att hämta data är svaret inte direkt utan beror på servern vi anropar.
För att webbläsaren och webbsidan ska behålla sin interaktivitet under tiden detta anrop utförs så kommer webbläsaren ihåg att det kommer att komma ett svar här men fortsätter sedan vidare.
Resten av koden exekveras och när vi får ett svar fårn servern så kommer webbläsaren tillbaka och fullföljer denna funktion.
Alltid när en metod eller en funktion returnerar ett promise så måste vi vänta in svaret med antingen .then() syntax eller async / await
*/
// async function handlePokeClick(e) {
//   const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
//   const data = await res.json();

//   console.log(data);

//   pokecard.children[0].innerText = data.name; // Visar namnet  på vår pokemon i en div på våran sida.
//   pokecard.children[1].setAttribute("src", data.sprites.front_default); // Hämtar bildaddressen i vårat svarsobjekt och sätter det som src i vår bild.
// }

// async function getPokeDex() {
//   const res = await fetch(
//     "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
//   );
//   const data = await res.json();

//   await data.results.forEach(async (poke) => {
//     const res = await fetch(poke.url);
//     const data = await res.json();
//     printPokemon(data, "grass");
//   });
// }

// const pokedex = document.getElementById("smallPokeDex");
// function printPokemon(poke, type) {
//   // if (poke.types[0].type.name === type) {
//   const pokeCard = document.createElement("div");
//   const poketitle = document.createElement("h2");
//   const pokeimage = document.createElement("img");
//   pokeCard.className = "pokeCard";
//   poketitle.innerText = poke.name;
//   pokeimage.setAttribute("src", poke.sprites.front_default);

//   pokeCard.appendChild(poketitle);
//   pokeCard.appendChild(pokeimage);

//   pokedex.appendChild(pokeCard);
//   // }
// }

// getPokeDex();

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> DECK OF CARDS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let deck = {}; // Skapar en variabel för att spara vårat deck i.
// async function getDeck() {
//   // En asynchron funktion som vi anropar från root för att hämta vårat deck så fort vår kod laddas och exekveras
//   const res = await fetch(
//     "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1" // Kolla dokumentationen för api:et hur ni kan skicka in variabler, men här väljer vi att vi bara ska ett deck
//   );
//   const data = await res.json(); // Vi löser ut body från vårat response och gör om det till ett javascriptobjekt

//   console.log(data);
//   deck = data; // Vi assignar data till vårat deck så vi kan använda variabeln senare
//   console.log(deck);
// }

// getDeck(); // Vi anropar funktionen direkt

// const drawCardButt = document.getElementById("drawCard"); // Hämtar våran knapp vi behöver för att dra kort
// drawCardButt.addEventListener("click", async () => {
//   // Funktionen anropar api:et och får en array av kort plus lite response data
//   const res = await fetch(
//     `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`
//   );
//   const data = await res.json();
//   console.log(data.cards[0]); // Loggar det första kortet i resultatet då jag bara ville dra 1 kort.
// });
