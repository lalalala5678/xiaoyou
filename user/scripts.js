document.addEventListener('DOMContentLoaded', () => {
  const list = new Array(15).fill(0);
  const animatedContent = document.querySelector('.animated-content');
  list.forEach((_, index) => {
    const span = document.createElement('span');
    span.className = `span${index}`;
    animatedContent.appendChild(span);
  });

  // Initialize the cartoon figure image
  const cartoonFigure = document.getElementById('cartoonFigure');
  if (cartoonFigure) {
    cartoonFigure.src = './laugh.png';
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const ECHART_COMMON_COLOR = [
    '#1f78b4', '#33a02c', '#e31a1c', '#ff7f00', '#6a3d9a'
  ];

  const data = [
    { name: "label1", num: 23 },
    { name: "label2", num: 12 },
    { name: "label3", num: 48 },
    { name: "label4", num: 37 },
    { name: "label5", num: 18 },
  ];

  const dataInfo = (() => {
    const sum = data.reduce((num, next) => num + next.num, 0);
    if (data?.length > 0) {
      let currentRotate = 0;
      const result = data.map((item, index) => {
        const rotate = `${currentRotate}deg`;
        const degNum = (item.num / sum) * 360;
        currentRotate += degNum;
        return {
          ...item,
          deg: `${degNum}deg`,
          rotate,
          color: ECHART_COMMON_COLOR[index],
        };
      });
      return result;
    }
    return [];
  })();

  const newBox = document.getElementById('newBox');
  if (newBox) {
    dataInfo.forEach(itemData => {
      const newItem = document.createElement('div');
      newItem.className = 'newItem';
      newItem.style.background = `conic-gradient(${itemData.color} 0, transparent ${itemData.deg})`;
      newItem.style.transform = `rotate(${itemData.rotate})`;

      const newSemicircle = document.createElement('div');
      newSemicircle.className = 'newSemicircle';
      newSemicircle.style.backgroundColor = itemData.color;

      newItem.appendChild(newSemicircle);
      newBox.appendChild(newItem);
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  // JavaScript代码可以放在这里，如果有需要
});
