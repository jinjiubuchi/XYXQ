// 获取按钮元素
const learnMoreBtn = document.getElementById('learnMoreBtn');
const showMoreCoursesBtn = document.getElementById('showMoreCoursesBtn');
const gameBtn = document.getElementById('gameBtn');
const parentResourceBtn = document.getElementById('parentResourceBtn');

// 设置按钮点击事件
learnMoreBtn.addEventListener('click', () => {
    alert('这里可以跳转到课程详情页面！');
});

showMoreCoursesBtn.addEventListener('click', () => {
    alert('这里可以展示更多课程内容！');
});

gameBtn.addEventListener('click', () => {
    alert('进入游戏乐园！');
});

parentResourceBtn.addEventListener('click', () => {
    alert('家长专区资源内容！');
});
