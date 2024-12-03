const foods = [
    // Grains & Tubers
    { name: "Rice", category: "grains", image: "rice.jpg", calories: 130, protein: 2.7, carbs: 28, fat: 0.3, weight: 100 },
    { name: "Potato", category: "grains", image: "potato.jpg", calories: 77, protein: 2.0, carbs: 17, fat: 0.1, weight: 100 },
    { name: "Oats", category: "grains", image: "oats.jpg", calories: 389, protein: 16.9, carbs: 66.3, fat: 6.9, weight: 100 },
    { name: "Sweet Potato", category: "grains", image: "sweet_potato.jpg", calories: 86, protein: 1.6, carbs: 20.1, fat: 0.1, weight: 100 },
    { name: "Quinoa", category: "grains", image: "quinoa.jpg", calories: 120, protein: 4.1, carbs: 21.3, fat: 1.9, weight: 100 },
    { name: "Barley", category: "grains", image: "barley.jpg", calories: 354, protein: 12.5, carbs: 73.5, fat: 2.3, weight: 100 },
    { name: "Corn", category: "grains", image: "corn.jpg", calories: 96, protein: 3.4, carbs: 21, fat: 1.5, weight: 100 },
    { name: "Couscous", category: "grains", image: "couscous.jpg", calories: 112, protein: 3.8, carbs: 23.2, fat: 0.2, weight: 100 },

    // Vegetables & Fruits
    { name: "Apple", category: "vegetables_fruits", image: "apple.jpg", calories: 52, protein: 0.3, carbs: 14, fat: 0.2, weight: 100 },
    { name: "Carrot", category: "vegetables_fruits", image: "carrot.jpg", calories: 41, protein: 0.9, carbs: 10, fat: 0.2, weight: 100 },
    { name: "Banana", category: "vegetables_fruits", image: "banana.jpg", calories: 89, protein: 1.1, carbs: 23, fat: 0.3, weight: 100 },
    { name: "Broccoli", category: "vegetables_fruits", image: "broccoli.jpg", calories: 55, protein: 3.7, carbs: 11.2, fat: 0.6, weight: 100 },
    { name: "Tomato", category: "vegetables_fruits", image: "tomato.jpg", calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2, weight: 100 },
    { name: "Spinach", category: "vegetables_fruits", image: "spinach.jpg", calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, weight: 100 },
    { name: "Strawberry", category: "vegetables_fruits", image: "strawberry.jpg", calories: 32, protein: 0.7, carbs: 7.7, fat: 0.3, weight: 100 },
    { name: "Grapes", category: "vegetables_fruits", image: "grapes.jpg", calories: 69, protein: 0.7, carbs: 18, fat: 0.2, weight: 100 },
    { name: "Pineapple", category: "vegetables_fruits", image: "pineapple.jpg", calories: 50, protein: 0.5, carbs: 13.1, fat: 0.1, weight: 100 },

    // Animal Products
    { name: "Chicken Breast", category: "animal_products", image: "chicken.jpg", calories: 165, protein: 31, carbs: 0, fat: 3.6, weight: 100 },
    { name: "Egg", category: "animal_products", image: "egg.jpg", calories: 155, protein: 13, carbs: 1.1, fat: 10.6, weight: 50 },
    { name: "Salmon", category: "animal_products", image: "salmon.jpg", calories: 208, protein: 20, carbs: 0, fat: 13, weight: 100 },
    { name: "Beef", category: "animal_products", image: "beef.jpg", calories: 250, protein: 26, carbs: 0, fat: 17, weight: 100 }, 
    { name: "Turkey Breast", category: "animal_products", image: "turkey_breast.jpg", calories: 135, protein: 30, carbs: 0, fat: 1, weight: 100 },
    { name: "Pork", category: "animal_products", image: "pork.jpg", calories: 242, protein: 27, carbs: 0, fat: 14, weight: 100 },
    { name: "Turkey Bacon", category: "animal_products", image: "turkey_bacon.jpg", calories: 135, protein: 18, carbs: 0, fat: 7, weight: 100 },
    { name: "Lamb", category: "animal_products", image: "lamb.jpg", calories: 294, protein: 25, carbs: 0, fat: 21, weight: 100 },

    // Soy Products
    { name: "Tofu", category: "soy_products", image: "tofu.jpg", calories: 144, protein: 15.7, carbs: 3.9, fat: 8.0, weight: 100 },
    { name: "Soy Milk", category: "soy_products", image: "soy_milk.jpg", calories: 54, protein: 3.3, carbs: 4.1, fat: 2.1, weight: 100 },
    { name: "Edamame", category: "soy_products", image: "edamame.jpg", calories: 121, protein: 11.5, carbs: 9.9, fat: 5.2, weight: 100 },
    { name: "Tempeh", category: "soy_products", image: "tempeh.jpg", calories: 193, protein: 20, carbs: 9.4, fat: 10.8, weight: 100 },

    // Energy Foods
    { name: "Olive Oil", category: "energy_foods", image: "olive_oil.jpg", calories: 119, protein: 0, carbs: 0, fat: 13.5, weight: 13 },
    { name: "Almonds", category: "energy_foods", image: "almonds.jpg", calories: 579, protein: 21, carbs: 22, fat: 49, weight: 100 },
    { name: "Avocado", category: "energy_foods", image: "avocado.jpg", calories: 160, protein: 2, carbs: 8.5, fat: 15, weight: 100 },
    { name: "Peanut Butter", category: "energy_foods", image: "peanut_butter.jpg", calories: 588, protein: 25, carbs: 20, fat: 50, weight: 100 },
    { name: "Cashews", category: "energy_foods", image: "cashews.jpg", calories: 553, protein: 18, carbs: 30, fat: 44, weight: 100 },
    { name: "Coconut Oil", category: "energy_foods", image: "coconut_oil.jpg", calories: 117, protein: 0, carbs: 0, fat: 13.6, weight: 13 },

    // Dairy Products
    { name: "Milk", category: "dairy", image: "milk.jpg", calories: 42, protein: 3.4, carbs: 5, fat: 1, weight: 100 },
    { name: "Cheese", category: "dairy", image: "cheese.jpg", calories: 402, protein: 25, carbs: 1.3, fat: 33, weight: 100 }, 
    { name: "Yogurt", category: "dairy", image: "yogurt.jpg", calories: 59, protein: 3.5, carbs: 4.7, fat: 3.3, weight: 100 },
    { name: "Butter", category: "dairy", image: "butter.jpg", calories: 717, protein: 0.9, carbs: 0.1, fat: 81, weight: 100 },


    // Nuts & Seeds
    { name: "Chia Seeds", category: "nuts_seeds", image: "chia_seeds.jpg", calories: 486, protein: 16.5, carbs: 42, fat: 30, weight: 100 },
    { name: "Walnuts", category: "nuts_seeds", image: "walnuts.jpg", calories: 654, protein: 15, carbs: 14, fat: 65, weight: 100 },
    { name: "Pistachios", category: "nuts_seeds", image: "pistachios.jpg", calories: 560, protein: 20, carbs: 28, fat: 45, weight: 100 },
    { name: "Pumpkin Seeds", category: "nuts_seeds", image: "pumpkin_seeds.jpg", calories: 559, protein: 30, carbs: 10, fat: 49, weight: 100 },

    // Legumes
    { name: "Lentils", category: "legumes", image: "lentils.jpg", calories: 116, protein: 9, carbs: 20, fat: 0.4, weight: 100 },
    { name: "Black Beans", category: "legumes", image: "black_beans.jpg", calories: 339, protein: 21.6, carbs: 62.4, fat: 0.9, weight: 100 },
    { name: "Green Peas", category: "legumes", image: "green_peas.jpg", calories: 81, protein: 5.4, carbs: 14.5, fat: 0.4, weight: 100 }
    { name: "Chickpeas", category: "legumes", image: "chickpeas.jpg", calories: 164, protein: 8.9, carbs: 27.4, fat: 2.6, weight: 100 }
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
            <p>Weight: ${food.weight} g</p>
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
        <p><strong>Weight:</strong> ${food.weight} g</p>
    `;
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("food-modal");
    modal.style.display = "none";
}

function searchFood() {
    const query = document.getElementById("food-search").value.toLowerCase();
    const filteredFoods = foods.filter(food => food.name.toLowerCase().includes(query));
    displayFoodItems(filteredFoods);
}

// Initial display of all food items
displayFoodItems(foods);
