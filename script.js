// Sample food data with additional items
const foods = {
    fruits: [
        { id: 'apple', name: 'Apple', image: 'https://via.placeholder.com/150?text=Apple', calories: '52 kcal', protein: '0.3g', fat: '0.2g', carbohydrates: '14g' },
        { id: 'banana', name: 'Banana', image: 'https://via.placeholder.com/150?text=Banana', calories: '96 kcal', protein: '1.3g', fat: '0.3g', carbohydrates: '27g' },
        { id: 'orange', name: 'Orange', image: 'https://via.placeholder.com/150?text=Orange', calories: '62 kcal', protein: '1.2g', fat: '0.2g', carbohydrates: '15g' },
        { id: 'strawberry', name: 'Strawberry', image: 'https://via.placeholder.com/150?text=Strawberry', calories: '32 kcal', protein: '0.7g', fat: '0.3g', carbohydrates: '7g' }
    ],
    vegetables: [
        { id: 'carrot', name: 'Carrot', image: 'https://via.placeholder.com/150?text=Carrot', calories: '41 kcal', protein: '0.9g', fat: '0.2g', carbohydrates: '10g' },
        { id: 'broccoli', name: 'Broccoli', image: 'https://via.placeholder.com/150?text=Broccoli', calories: '55 kcal', protein: '3.7g', fat: '0.6g', carbohydrates: '11g' },
        { id: 'spinach', name: 'Spinach', image: 'https://via.placeholder.com/150?text=Spinach', calories: '23 kcal', protein: '2.9g', fat: '0.4g', carbohydrates: '3.6g' },
        { id: 'cucumber', name: 'Cucumber', image: 'https://via.placeholder.com/150?text=Cucumber', calories: '16 kcal', protein: '0.7g', fat: '0.1g', carbohydrates: '3.6g' }
    ],
    snacks: [
        { id: 'chips', name: 'Chips', image: 'https://via.placeholder.com/150?text=Chips', calories: '152 kcal', protein: '2g', fat: '10g', carbohydrates: '15g' },
        { id: 'soda', name: 'Soda', image: 'https://via.placeholder.com/150?text=Soda', calories: '150 kcal', protein: '0g', fat: '0g', carbohydrates: '39g' },
        { id: 'cookies', name: 'Cookies', image: 'https://via.placeholder.com/150?text=Cookies', calories: '200 kcal', protein: '3g', fat: '8g', carbohydrates: '30g' },
        { id: 'chocolate', name: 'Chocolate', image: 'https://via.placeholder.com/150?text=Chocolate', calories: '150 kcal', protein: '2g', fat: '8g', carbohydrates: '22g' }
    ],
    dairy: [
        { id: 'milk', name: 'Milk', image: 'https://via.placeholder.com/150?text=Milk', calories: '42 kcal', protein: '3.4g', fat: '1g', carbohydrates: '5g' },
        { id: 'cheese', name: 'Cheese', image: 'https://via.placeholder.com/150?text=Cheese', calories: '402 kcal', protein: '25g', fat: '33g', carbohydrates: '1.3g' },
        { id: 'yogurt', name: 'Yogurt', image: 'https://via.placeholder.com/150?text=Yogurt', calories: '59 kcal', protein: '3.5g', fat: '0.4g', carbohydrates: '7.4g' }
    ]
};

// Function to filter food items based on category
function filterFood(category) {
    const foodList = document.getElementById('food-list');
    foodList.innerHTML = ''; // Clear current food list

    let foodItems = [];
    if (category === 'all') {
        foodItems = [...foods.fruits, ...foods.vegetables, ...foods.snacks, ...foods.dairy];
    } else {
        foodItems = foods[category];
    }

    foodItems.forEach(food => {
        const foodElement = document.createElement('div');
        foodElement.classList.add('food-item');
        foodElement.id = food.id;
        foodElement.innerHTML = `
            <img src="${food.image}" alt="${food.name}">
            <p>${food.name}</p>
        `;
        foodElement.addEventListener('click', () => showFoodDetails(food));
        foodList.appendChild(foodElement);
    });
}

// Function to show food details in a modal
function showFoodDetails(food) {
    const modal = document.getElementById('food-detail-modal');
    const foodName = document.getElementById('food-name');
    const foodImage = document.getElementById('food-image');
    const foodCalories = document.getElementById('food-calories');
    const foodProtein = document.getElementById('food-protein');
    const foodFat = document.getElementById('food-fat');
    const foodCarbs = document.getElementById('food-carbs');

    foodName.textContent = food.name;
    foodImage.src = food.image;
    foodCalories.textContent = food.calories;
    foodProtein.textContent = food.protein;
    foodFat.textContent = food.fat;
    foodCarbs.textContent = food.carbohydrates;

    modal.style.display = "block"; // Show modal
}

// Close modal when clicking the close button
document.querySelector(".close-btn").addEventListener('click', () => {
    document.getElementById('food-detail-modal').style.display = "none";
});

// Initialize the page by showing all food items
window.onload = () => filterFood('all');
