$(document).ready(function() {
  $("#flipbook").turn({
      width: 800,
      height: 600,
      autoCenter: true,
      duration: 2000  // 调慢翻页速度
  });

  $('#prev').click(function() {
      $("#flipbook").turn('previous');
  });

  $('#next').click(function() {
      $("#flipbook").turn('next');
  });

  // 模拟从后端获取的数据
  const dataFromBackend = [
      "第一天：今天感觉有点孤单...",
      "第二天：这是第二天...",
      "第三天：有点想家...",
      "第四天：今天收到了家人的来信...",
      "第五天：在学校表现很好，老师表扬了我..."
  ];

  // 动态设置页面内容
  for (let i = 1; i <= dataFromBackend.length; i++) {
      $(`#page${i}`).text(dataFromBackend[i-1]);
  }
});
