const submit = document.getElementById("submit-button")
const ratingCard = document.querySelector(".rating-card")
const thankYouCard = document.querySelector(".thank-you-card")
const ratingsContainer = document.querySelector(".ratings-container")
const values = document.querySelectorAll(".rating-value")
let selectedValue = null

ratingsContainer.addEventListener('click', (e) => {
    console.log(e.target.id)
    if (e.target.className != 'rating-value') return;
    if (selectedValue != null) {
        values.forEach((value) => value.classList.remove('active'))
    }
    e.target.classList.add('active')
    selectedValue = e.target.innerHTML
})

submit.onclick = () => {
    if (selectedValue === null) return
    ratingCard.classList.add('hide')
    thankYouCard.classList.add('show')
    document.getElementById("selected-value").innerHTML = selectedValue
}

mark1.onclick = function () {
    styleSelector();
    mark1.classList.add("rateSelect");
    rate.innerHTML = "you selected 1 out of 5";
}

const selectRating = (e) => {
    styleSelector();
    let mark = e.target.id
    let markValue = e.target.innerHTML
    mark.classList.add("rateSelect")
    rate.innerHTML = `you selected ${markValue} out of 5`;

}

allMarks.addEventListener("click", selectRating(e))