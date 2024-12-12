document.getElementById('submitBtn').addEventListener('click', function() {
    // 获取用户输入的匿名名称和留言内容
    const nickname = document.getElementById('nickname').value.trim();
    const impression = document.getElementById('impression').value.trim();
    
    // 确保留言内容不为空
    if (impression === "") {
        alert("留言内容不能为空！");
        return;
    }

    // 如果用户没有填写匿名名称，设置为默认值
    const displayName = nickname || "匿名用户";

    // 创建新的标签并显示在页面上
    const tag = document.createElement('div');
    tag.classList.add('tag');
    tag.innerHTML = `<strong>${displayName}</strong>: ${impression}`;
    
    // 将新标签添加到留言列表中
    document.getElementById('impressionList').appendChild(tag);

    // 清空输入框
    document.getElementById('nickname').value = "";
    document.getElementById('impression').value = "";
});
