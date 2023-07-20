`use-strict`
const charactersList = document.getElementById('charactersList');
let hpCharacters = [];


const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>House: ${character.house}</p>
                <img src="${character.image}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

const loadCharacters = async () => {
    try {
        const res = await fetch('https://hp-api.onrender.com/api/characters');
        hpCharacters = await res.json();
        hpCharacters = hpCharacters.slice(0,25);
       
        displayCharacters( hpCharacters);
    } catch (err) {
        console.error(err);
    }
};



loadCharacters();

//------------------ Implement the searching on the i/p
const searchBar = document.getElementById('searchBar');


//--------- handling the search event
const handleSearch = (e)=>{
    let searchVal = e.target.value.toLowerCase();

    let filterChars = hpCharacters.filter((item)=> {
       return item.name.toLowerCase().includes(searchVal) || item.house.toLowerCase().includes(searchVal)
    });
    displayCharacters(filterChars);
}

searchBar.addEventListener('input',handleSearch);