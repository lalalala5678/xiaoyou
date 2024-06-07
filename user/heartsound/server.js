// 引入Express框架
const express = require('express');
const app = express();

// 模拟从后端获取的数据
const dataFromBackend = [
    "第一天：啦啦啦啦",
    "第二天：这是第二天...",
    "第三天：有点想家...",
    "第四天：今天收到了家人的来信...",
    "第五天：在学校表现很好，老师表扬了我..."
];

// 创建一个端点（endpoint）来获取数据
app.get('/backend-data', (req, res) => {
    // 假设你的后端需要做一些处理，比如从数据库中获取数据等，这里简单地直接返回模拟数据
    res.json(dataFromBackend);
});

// 启动服务器，监听端口
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
