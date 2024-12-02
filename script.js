const foods = [
    // 谷薯类
    { name: "Rice", category: "grains", image: "rice.jpg", calories: 130, protein: 2.7, carbs: 28, fat: 0.3 },
    { name: "Potato", category: "grains", image: "potato.jpg", calories: 77, protein: 2.0, carbs: 17, fat: 0.1 },

    // 蔬菜水果类
    { name: "Apple", category: "vegetables_fruits", image: "apple.jpg", calories: 52, protein: 0.3, carbs: 14, fat: 0.2 },
    { name: "Carrot", category: "vegetables_fruits", image: "carrot.jpg", calories: 41, protein: 0.9, carbs: 10, fat: 0.2 },

    // 动物性食物
    { name: "Chicken Breast", category: "animal_products", image: "chicken.jpg", calories: 165, protein: 31, carbs: 0, fat: 3.6 },

    // 大豆及其制品
    { name: "Tofu", category: "soy_products", image: "tofu.jpg", calories: 144, protein: 15.7, carbs: 3.9, fat: 8.0 },

    // 纯能量食物
    { name: "Olive Oil", category: "energy_foods", image: "olive_oil.jpg", calories: 884, protein: 0, carbs: 0, fat: 100 },
    { name: "Butter", category: "energy_foods", image: "butter.jpg", calories: 717, protein: 0.9, carbs: 0.1, fat: 81.1 }
];
function calculateNutrients() {
    const age = parseInt(document.getElementById("age").value);
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const gender = document.getElementById("gender").value;
    const activity = parseFloat(document.getElementById("activity").value);

    // BMR calculation (Mifflin-St Jeor Equation)
    let BMR;
    if (gender === "male") {
        BMR = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        BMR = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // TDEE = BMR * Activity Level
    const TDEE = BMR * activity;

    // Save the results to LocalStorage
    localStorage.setItem("TDEE", Math.round(TDEE));
    localStorage.setItem("protein", Math.round(TDEE * 0.2 / 4));
    localStorage.setItem("fat", Math.round(TDEE * 0.3 / 9));
    localStorage.setItem("carbs", Math.round(TDEE * 0.5 / 4));

    // Display results
    document.getElementById("calories-result").innerText = Math.round(TDEE);
    document.getElementById("protein-result").innerText = Math.round(TDEE * 0.2 / 4);
    document.getElementById("fat-result").innerText = Math.round(TDEE * 0.3 / 9);
    document.getElementById("carbs-result").innerText = Math.round(TDEE * 0.5 / 4);
}

// Load saved data on page load
window.onload = function() {
    if (localStorage.getItem("TDEE")) {
        document.getElementById("calories-result").innerText = localStorage.getItem("TDEE");
        document.getElementById("protein-result").innerText = localStorage.getItem("protein");
        document.getElementById("fat-result").innerText = localStorage.getItem("fat");
        document.getElementById("carbs-result").innerText = localStorage.getItem("carbs");
    }
}

// Display food items based on selected category
function filterFood(category) {
    const filteredFoods = category === 'all' ? foods : foods.filter(food => food.category === category);
    displayFoodItems(filteredFoods);
}

// Display the food items on the page
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

// Food Modal
function openModal(food) {
    const modal = document.getElementById("food-modal");
    const modalDetails = document.getElementById("food-modal-details");
    modalDetails.innerHTML = `
        <h2>${food.name}</h2>
        <img src="${food.image}" alt="${food.name}">
        <p><strong>Calories:</strong> ${food.calories} kcal</p>
        <p><strong>Protein:</strong> ${food.protein} g</p>
        <p><strong>Carbs:</strong> ${food.carbs} g</p>
        <p><strong>Fat:</strong> ${food.fat} g</p>
    `;
    modal.style.display = "flex";
}

function closeModal(event) {
    const modal = document.getElementById("food-modal");
    if (event.target === modal || event.target.classList.contains("close-button")) {
        modal.style.display = "none";
    }
}

// 食物搜索功能
function searchFood() {
    const query = document.getElementById("food-search").value.toLowerCase();
    const filteredFoods = foods.filter(food => food.name.toLowerCase().includes(query));
    displayFoodItems(filteredFoods);
}

// 初次加载显示所有食物
filterFood('all');
