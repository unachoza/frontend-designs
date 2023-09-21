const submit = document.getElementById("submit-button")
const ratingCard = document.querySelector(".rating-card")
const thankYouCard = document.querySelector(".thank-you-card")
const ratingsContainer = document.querySelector(".ratings-container")
const values = document.querySelectorAll(".rating-value")
let selectedValue = null

ratingsContainer.addEventListener('click', (e) => {
    if (e.target.className != 'rating-value') return;
    e.target.classList.add('active')
    selectedValue = e.target.innerHTML
})

submit.onclick = () => {
    if (selectedValue === null) return
    ratingCard.classList.add('hide')
    thankYouCard.classList.add('show')
    document.getElementById("selected-value").innerHTML = selectedValue
}
