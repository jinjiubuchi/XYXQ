const foods = [
    { name: "Rice", category: "grains", image: "assets/images/rice.jpg", calories: 130, protein: 2.7, carbs: 28, fat: 0.3 },
    { name: "Potato", category: "grains", image: "assets/images/potato.jpg", calories: 77, protein: 2.0, carbs: 17, fat: 0.1 },
    { name: "Apple", category: "vegetables_fruits", image: "assets/images/apple.jpg", calories: 52, protein: 0.3, carbs: 14, fat: 0.2 },
    { name: "Carrot", category: "vegetables_fruits", image: "assets/images/carrot.jpg", calories: 41, protein: 0.9, carbs: 10, fat: 0.2 },
    { name: "Chicken Breast", category: "animal_products", image: "assets/images/chicken.jpg", calories: 165, protein: 31, carbs: 0, fat: 3.6 },
    { name: "Tofu", category: "soy_products", image: "assets/images/tofu.jpg", calories: 144, protein: 15.7, carbs: 3.9, fat: 8.0 },
    { name: "Olive Oil", category: "energy_foods", image: "assets/images/olive_oil.jpg", calories: 884, protein: 0, carbs: 0, fat: 100 },
    { name: "Butter", category: "energy_foods", image: "assets/images/butter.jpg", calories: 717, protein: 0.9, carbs: 0.1, fat: 81.1 }
];

function calculateNutrients() {
    const age = parseInt(document.getElementById("age").value);
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const gender = document.getElementById("gender").value;
    const activity = parseFloat(document.getElementById("activity").value);

    let BMR;
    if (gender === "male") {
        BMR = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        BMR = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const TDEE = BMR * activity;

    document.getElementById("calories-result").innerText = Math.round(TDEE);
    document.getElementById("protein-result").innerText = Math.round(TDEE * 0.2 / 4);
    document.getElementById("fat-result").innerText = Math.round(TDEE * 0.3 / 9);
    document.getElementById("carbs-result").innerText = Math.round(TDEE * 0.5 / 4);
}

function filterFood(category) {
    const filteredFoods = category === 'all' ? foods : foods.filter(food => food.category === category);
    displayFoodItems(filteredFoods);
}

function displayFoodItems(items) {
    const foodList = document.getElementById("food-list");
    foodList.innerHTML = "";
    items.forEach(food => {
        const foodItem = document.createElement("div");
        foodItem.className = "food-item";
        foodItem.innerHTML = `
            <img src="${food.image}" alt="${food.name}">
            <h4>${food.name}</h4>
            <p>Calories: ${food.calories} kcal</p>
        `;
        foodItem.onclick = () => openModal(food);
        foodList.appendChild(foodItem);
    });
}

function openModal(food) {
    const modal = document.getElementById("food-modal");
    const modalDetails = document.getElementById("food-modal-details");
    modalDetails.innerHTML = `
        <h3>${food.name}</h3>
        <img src="${food.image}" alt="${food.name}" style="width: 100%; max-height: 300px; object-fit: cover;">
        <p><strong>Calories:</strong> ${food.calories} kcal</p>
        <p><strong>Protein:</strong> ${food.protein} g</p>
        <p><strong>Carbs:</strong> ${food.carbs} g</p>
        <p><strong>Fat:</strong> ${food.fat} g</p>
    `;
    modal.style.display = "flex";
}

function closeModal(event) {
    if (event.target === document.getElementById("food-modal") || event.target.classList.contains('close-button')) {
        const modal = document.getElementById("food-modal");
        modal.style.display = "none";
    }
}

displayFoodItems(foods);
