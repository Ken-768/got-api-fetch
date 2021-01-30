// const api = 'https://anapioficeandfire.com/api/characters'

// const main = document.getElementById("main");
// const form = document.getElementById("form");
// const search = document.getElementById("search");

// const getUrl = () => {
//     fetch(api).then(res => res.json())
//     .then(data =>
//         data.forEach(i => {
//             let characterId = i.url;
//             callApi(characterId)
//         })
//     )
// }

// const callApi = (characterId) => {
//     fetch(characterId).then(res => res.json())
//     .then(data => {
//             if(data.name) {
//                 console.log(data)
//             } else {
//                 console.log('No data')
//             }
//         }
//     )
// }

// getUrl()

const api = 'https://anapioficeandfire.com/api/characters'

const main = document.getElementById("main");
const search = document.getElementById("search");

const showCharacters = async searchText => {
    const res = await fetch(api);
    const states = res.json();
    states.then(data => {
        data.forEach(i => {
            let characterName = i.name;
            // console.log(i.name)
            if(characterName.includes(searchText)) {
                console.log(i.name);
            } else {
                console.log('cant get name');
            }
        })
    })
}
search.addEventListener('input', () => showCharacters(search.Value));
showCharacters();
// const callCharacter = async (characterId) => {
//     await fetch(characterId).then(res => res.json())
//     .then(data2 => {
//         let matches = data2.filter(character => {
//             console.log(character);
//             // const regex = RegExp(`^${searchText}`, 'gi');
//             // return character.name.match(regex) || character.gender.match(regex)
//         });
//         console.log(matches);
//     })
// }

// showCharacters()

// const showCharacters = async () => {
//     const res = await fetch(api);
//     const states = res.json();
//     states.then(data => {
//         data.forEach(i => {
//             let characterId = i.url;
//             callCharacter(characterId);
//         })
//     })
// }
// const callCharacter = async (characterId) => {
//     await fetch(characterId).then(res => res.json())
//     .then(data2 => {
//         let matches = data2.filter(character => {
//             console.log(character);
//             // const regex = RegExp(`^${searchText}`, 'gi');
//             // return character.name.match(regex) || character.gender.match(regex)
//         });
//         console.log(matches);
//     })
// }

// showCharacters()

// search.addEventListener('input', () => showCharacters(search.Value));

// function showCharacters() {
//     fetch(api).then(res => res.json())
//     .then(function(data) {
//         data.forEach(element => {
//             const el = document.createElement('div');
//             const text = document.createElement('p');

//             text.innerHTML = `${element.name}`;
//             el.append(text);
//             main.append(el);
//         });

//         search.addEventListener("submit", (e) => {
//             e.preventDefault();
//             main.innerHTML = '';

//             const searchTerm = search.value;

//             if(searchTerm) {
//                 // let container = document.querySelector('div');
//                 // container.style.display = "flex"
//                 search.value = "";
//             }
//         })
//     });
// }

// showCharacters();