const quest = document.querySelector("input")
const button = document.querySelector("button")
const show_question = document.querySelector("#show_question")
const show_answer = document.querySelector("#show_answer")
const answers = [   
    "Sim",
    "Não",
    "Talvez sim",
    "Quem sabe sim",
    "Provável que não",
    "Provável que sim",
    "Minha fontes dizem que não",
    "Minha fontes dizem que sim",
    "Se você se esforçar, sim",
    "Não sei se posso responder isso"
]
function sort_an_anwswer(){
    if(quest.value == ""){
        alert("Faça uma pergunta ao Mago Astolfo")
        return
    }
    let random_number = Math.random()*(answers.length-1)
    let index_array = Math.ceil(random_number)
    let random_answer = answers[index_array]
    
    show_question.innerHTML = quest.value
    show_answer.innerHTML = random_answer
    setTimeout(()=>{
        show_question.style.opacity = 0
        show_answer.style.opacity = 0
    },5000)
    setTimeout(()=>{location.reload()},6000)
}
button.addEventListener("click", sort_an_anwswer)