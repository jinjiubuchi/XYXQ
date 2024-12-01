// 食物数据库（直接嵌入在 JS 中）
const foodDatabase = [
  {
    "id": "apple",
    "name": "Apple",
    "category": "Fruits",
    "image": "https://via.placeholder.com/150?text=Apple",
    "calories": 52,
    "protein": 0.3,
    "fat": 0.2,
    "carbs": 14
  },
  {
    "id": "banana",
    "name": "Banana",
    "category": "Fruits",
    "image": "https://via.placeholder.com/150?text=Banana",
    "calories": 96,
    "protein": 1.3,
    "fat": 0.3,
    "carbs": 27
  },
  // 其他食物...
];

// 计算BMR并根据活动水平计算每日热量需求
function calculateNutrients() {
    const age = parseInt(document.getElementById('age').value);
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const gender = document.getElementById('gender').value;
    const activity = parseFloat(document.getElementById('activity').value);

    // 计算BMR（基础代谢率）
    let bmr;
    if (gender === 'male') {
        bmr = 66 + (13.75 * weight) + (5 * height) - (6.75 * age);
    } else {
        bmr = 655 + (9.563 * weight) + (1.85 * height) - (4.676 * age);
    }

    // 计算每日热量需求
    const dailyCalories = bmr * activity;
    const dailyProtein = (dailyCalories * 0.15) / 4; // 15%热量来自蛋白质
    const dailyFat = (dailyCalories * 0.30) / 9; // 30%热量来自脂肪
    const dailyCarbs = (dailyCalories * 0.55) / 4; // 55%热量来自碳水化合物

    // 显示结果
    document.getElementById('calories-result').textContent = dailyCalories.toFixed(2);
    document.getElementById('protein-result').textContent = dailyProtein.toFixed(2);
    document.getElementById('fat-result').textContent = dailyFat.toFixed(2);
    document.getElementById('carbs-result').textContent = dailyCarbs.toFixed(2);
}

// 食物筛选功能
function filterFood(category) {
    const filteredFoods = category === 'all' ? foodDatabase : foodDatabase.filter(food => food.category.toLowerCase() === category.toLowerCase());
    displayFoodItems(filteredFoods);
}

// 显示食物项
function displayFoodItems(foods) {
    const foodList = document.getElementById('food-list');
    foodList.innerHTML = ''; // 清空当前食物列表
    foods.forEach(food => {
        const foodItem = document.createElement('div');
        foodItem.classList.add('food-item');
        foodItem.innerHTML = `
            <img src="${food.image}" alt="${food.name}">
            <h4>${food.name}</h4>
            <button onclick="showFoodDetail('${food.id}')">View Details</button>
        `;
        foodList.appendChild(foodItem);
    });
}

// 显示食物详情
function showFoodDetail(foodId) {
    const food = foodDatabase.find(item => item.id === foodId);
    document.getElementById('food-name').textContent = food.name;
    document.getElementById('food-image').src = food.image;
    document.getElementById('food-calories').textContent = food.calories;
    document.getElementById('food-protein').textContent = food.protein;
    document.getElementById('food-fat').textContent = food.fat;
    document.getElementById('food-carbs').textContent = food.carbs;

    // 显示详情弹窗
    document.getElementById('food-detail-modal').style.display = "block";
}

// 关闭详情弹窗
document.querySelector('.close-btn').onclick = () => {
    document.getElementById('food-detail-modal').style.display = "none";
};

// 默认显示所有食物
filterFood('all');
