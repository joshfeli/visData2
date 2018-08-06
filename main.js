const numberOfUsersTextBox = document.getElementById("numberOfUsersTextBox")
const checkboxes = document.querySelectorAll(".checkbox")
for(const box of checkboxes){
    box.setAttribute("aria-checked", "true")
}

const male = document.getElementById("male")
const female = document.getElementById("female")
const firstname = document.getElementById("firstname")
const lastname = document.getElementById("lastname")

const submitButton = document.getElementById("submit")
submitButton.addEventListener("click", retrieveData)

function retrieveData(){
    const numberOfUsers = numberOfUsersTextBox.value
    const baseUrl = "https://randomuser.me/api/?results="
    const url = encodeURI(baseUrl + numberOfUsers)
    fetch(url)
        .then(function(response){
            return response.json()
        })
        .then(function(json){
            const main = document.querySelector("main")
            const people = json.results
            for(const person of people){
                main.innerText += person.email+"\n" // "\n" is used for creating line breaks, similar to the <br> tag
            }
        })
}
