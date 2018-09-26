function printToPage(words) {
    const main = document.getElementById("main")
    let newText = document.createTextNode(words)
    let newBreak = document.createElement("br")
    main.appendChild(newText)
    main.appendChild(newBreak)

}



fetch("http://jservice.io/api/category?id=42")
    .then(res => res.json())
    .then(data => {
        let newTitle = data.title
        let randomQuestion = data.clues[Math.floor(Math.random() * data.clues_count)]
        let question = randomQuestion.question
        printToPage('The category is ' + newTitle)
        printToPage(question)
    })


async function getPost() {

    const response = await fetch("http://jservice.io/api/category?id=49")
    const category = await response.json()
    let clue = category.clues[Math.floor(Math.random() * category.clues_count)]
    let title = category.title
    printToPage('The category is ' + title)
    printToPage(clue.question)
}

getPost()

// questions vary in order on the page depending on which fetch is performed first