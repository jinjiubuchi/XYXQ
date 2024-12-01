// 添加一些简单的互动效果，比如按钮点击提示
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
        alert('你点击了一个按钮！');
    });
});
