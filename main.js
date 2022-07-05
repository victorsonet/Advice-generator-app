const result = document.querySelector('#result');
const btn = document.querySelector('.button');
const titleId = document.querySelector('#title-id');

function getAdvice() {
    const URL = 'https://api.adviceslip.com/advice'
    fetch(URL)
    .then(item => {
        return item.json();
    })
    .then(adviceData => {
        const adviceDataObj = adviceData.slip;
        result.textContent = `"${adviceDataObj.advice}"`
        const id = adviceDataObj.id;
        titleId.textContent = `ADVICE #${id}`
    }).catch(error => console.log(error))
}

btn.addEventListener('click', getAdvice);