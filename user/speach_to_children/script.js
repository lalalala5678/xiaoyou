document.getElementById('submitBtn').addEventListener('click', function() {
  const userInput = document.getElementById('userInput').value;
  
  if (userInput.trim() === '') {
      alert('请输入一些文字');
      return;
  }
  
  fetch('http://localhost:3000/submit', { // 修改为你的后端URL
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: userInput })
  })
  .then(response => response.json())
  .then(data => {
      console.log('Success:', data);
      alert('文字已提交');
  })
  .catch(error => {
      console.error('Error:', error);
      alert('提交失败，请稍后再试');
  });
});
