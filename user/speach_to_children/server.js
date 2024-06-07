const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const userInput = req.body.text;
    console.log('Received input:', userInput);
    res.json({ success: true, message: '文字已提交' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
