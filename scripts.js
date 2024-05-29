document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // 获取用户名和密码
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // 检查输入的用户名和密码是否正确
  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  if (username === storedUsername && password === storedPassword) {
    // 如果用户名和密码正确，跳转到 user/index.html
    window.location.href = './user/index.html';
  } else {
    alert('用户名或密码错误');
  }
});

document.getElementById('signInButton').addEventListener('click', function() {
  // 创建模态窗口
  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(128, 128, 128, 0.3)'; // 灰色背景
  modal.style.display = 'flex';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.style.zIndex = '1000';

  const modalContent = document.createElement('div');
  modalContent.style.backgroundColor = '#fff';
  modalContent.style.padding = '20px';
  modalContent.style.borderRadius = '8px';
  modalContent.style.textAlign = 'center';
  modalContent.style.width = '300px'; // 固定宽度

  const modalTitle = document.createElement('h2');
  modalTitle.innerText = '注册';
  modalContent.appendChild(modalTitle);

  const usernameInput = document.createElement('input');
  usernameInput.type = 'text';
  usernameInput.placeholder = 'Username';
  usernameInput.style.marginBottom = '10px';
  usernameInput.style.width = '100%'; // 全宽
  modalContent.appendChild(usernameInput);

  const passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.placeholder = 'Password';
  passwordInput.style.marginBottom = '20px';
  passwordInput.style.width = '100%'; // 全宽
  modalContent.appendChild(passwordInput);

  const buttonContainer = document.createElement('div');
  buttonContainer.style.display = 'flex';
  buttonContainer.style.justifyContent = 'space-between';

  const saveButton = document.createElement('button');
  saveButton.innerText = '保存';
  saveButton.style.marginRight = '10px';
  saveButton.addEventListener('click', function() {
    // 将用户名和密码存储到 localStorage
    localStorage.setItem('username', usernameInput.value);
    localStorage.setItem('password', passwordInput.value);
    alert('用户名和密码已保存');
    document.body.removeChild(modal);
  });
  buttonContainer.appendChild(saveButton);

  const cancelButton = document.createElement('button');
  cancelButton.innerText = '取消';
  cancelButton.addEventListener('click', function() {
    document.body.removeChild(modal);
  });
  buttonContainer.appendChild(cancelButton);

  modalContent.appendChild(buttonContainer);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
});
