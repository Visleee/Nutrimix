const single_mealEl = document.getElementById('single-meal');
const random = document.getElementById('random');
const randomButtons = document.querySelectorAll('.refresh');

randomButtons.forEach(button => {
    button.addEventListener('click', () => {
        const containerId = button.previousElementSibling.id;
        getRandomMeal(containerId);
    });
});

function getRandomMeal(containerId) {
    const single_mealEl = document.getElementById(containerId);
    single_mealEl.innerHTML = '';

    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(data => {
            const meal = data.meals[0];
            addMealToDOM(meal, single_mealEl);
        });
}

function addMealToDOM(meal, container) {

    container.innerHTML = `
        <div class="single-meal">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h4>${meal.strMeal}</h4>
        </div>
    `;
}


random.addEventListener('click', getRandomMeal);