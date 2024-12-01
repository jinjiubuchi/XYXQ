// Food data with categories and nutritional details
const foods = {
    fruits: [
        { id: 'apple', name: 'Apple', image: 'https://via.placeholder.com/150?text=Apple', calories: '52 kcal', protein: '0.3g', fat: '0.2g', carbohydrates: '14g', category: 'Fruits' },
        { id: 'banana', name: 'Banana', image: 'https://via.placeholder.com/150?text=Banana', calories: '96 kcal', protein: '1.3g', fat: '0.3g', carbohydrates: '27g', category: 'Fruits' },
        { id: 'orange', name: 'Orange', image: 'https://via.placeholder.com/150?text=Orange', calories: '62 kcal', protein: '1.2g', fat: '0.2g', carbohydrates: '15g', category: 'Fruits' }
    ],
    vegetables: [
        { id: 'carrot', name: 'Carrot', image: 'https://via.placeholder.com/150?text=Carrot', calories: '41 kcal', protein: '0.9g', fat: '0.2g', carbohydrates: '10g', category: 'Vegetables' },
        { id: 'broccoli', name: 'Broccoli', image: 'https://via.placeholder.com/150?text=Broccoli', calories: '55 kcal', protein: '3.7g', fat: '0.6g', carbohydrates: '11g', category: 'Vegetables' }
    ],
    snacks: [
        { id: 'chips', name: 'Chips', image: 'https://via.placeholder.com/150?text=Chips', calories: '152 kcal', protein: '2g', fat: '10g', carbohydrates: '15g', category: 'Snacks' },
        { id: 'soda', name: 'Soda', image: 'https://via.placeholder.com/150?text=Soda', calories: '150 kcal', protein: '0g', fat: '0g', carbohydrates: '39g', category: 'Snacks' }
    ]
};

// Display food items based on category
function filterFood(category) {
    const foodList = document.getElementById('food-list');
    foodList.innerHTML = ''; // Clear current list

    let foodItems = [];
    if (category === 'all') {
        foodItems = [...foods.fruits, ...foods.vegetables, ...foods.snacks];
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

// Show food details in modal
function showFoodDetails(food) {
    document.getElementById('food-name').textContent = food.name;
    document.getElementById('calories').textContent = food.calories;
    document.getElementById('protein').textContent = food.protein;
    document.getElementById('fat').textContent = food.fat;
    document.getElementById('carbohydrates').textContent = food.carbohydrates;
    document.getElementById('food-category').textContent = food.category;

    document.getElementById('food-modal').style.display = 'flex';
}

// Close modal
document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('food-modal').style.display = 'none';
});

// Close modal if clicked outside of modal
window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('food-modal')) {
        document.getElementById('food-modal').style.display = 'none';
    }
});

// Initialize page with "all" category food items
window.onload = () => filterFood('all');
