const express = require('express');
const cors = require('cors'); // 引入cors中间件
const app = express();
const port = 3000;

app.use(cors()); // 使用cors中间件

app.get('/api/echart-data', (req, res) => {
    const xAxisName = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    const data = [
        ["周日", Math.random() * 8 + 1, Math.random() * 8 + 1],
        ["周一", Math.random() * 8 + 1, Math.random() * 8 + 1],
        ["周二", Math.random() * 8 + 1, Math.random() * 8 + 1],
        ["周三", Math.random() * 8 + 1, Math.random() * 8 + 1],
        ["周四", Math.random() * 8 + 1, Math.random() * 8 + 1],
        ["周五", Math.random() * 8 + 1, Math.random() * 8 + 1],
        ["周六", Math.random() * 8 + 1, Math.random() * 8 + 1],
    ];
    const legendData = [
        { name: '哭泣', icon: 'rect' },
        { name: '开心', icon: 'rect' },
        { name: '开心百分比', icon: 'line' }
    ];

    res.json({
        xAxisName,
        data,
        legendData
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
