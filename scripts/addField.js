document.querySelector("#add-time")
    .addEventListener('click', clonerField)

function clonerField() {
    const fields = document.querySelector('.schudule-item').cloneNode(true)
    document.querySelector('#schedule-items').appendChild(fields)
}