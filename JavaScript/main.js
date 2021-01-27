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
const form = document.getElementById("form");
const search = document.getElementById("search");
function showCharacters() {
    fetch(api).then(res => res.json())
    .then(function(data) {
        data.forEach(element => {
            const el = document.createElement('div');
            const text = document.createElement('p');
            console.log(element)

            text.innerHTML = `${element.name}`;
            el.append(text);
            main.append(el);
        });

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            main.innerHTML = '';

            const searchTerm = search.value;

            if(searchTerm) {
                // let container = document.querySelector('div');
                // container.style.display = "flex"
                search.value = "";
            }
        })
    });
}

showCharacters();