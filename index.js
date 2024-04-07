const container = document.querySelector(".container")
const submit = document.querySelector(".submit")
const body = document.querySelector("body")
const notas = document.querySelectorAll(".numero")
let botonValue 
const wrapper = document.querySelector(".wrapper")

notas?.forEach(nota => { 
    nota.addEventListener("click",(e)=>{
        const activeButton = document.querySelector(".active")
        activeButton?.classList.remove("active")
        e.target.classList.add("active")
        botonValue = e.target.textContent
    })
    
});



submit?.addEventListener("click",()=>{
    wrapper.innerHTML = `
    <div class="container dos">
        <img src="images/illustration-thank-you.svg" class="thank">
        <p class="calificacion">You selected ${botonValue} out of 5</p>
        <h1>Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </div>
    `
})

