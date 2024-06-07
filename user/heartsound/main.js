$(document).ready(function() {
    $("#flipbook").turn({
        width: 800,
        height: 600,
        autoCenter: true,
        duration: 2000 // 调慢翻页速度
    });

    $('#prev').click(function() {
        $("#flipbook").turn('previous');
    });

    $('#next').click(function() {
        $("#flipbook").turn('next');
    });

    // 使用 AJAX 异步请求数据
    $.ajax({
        url: '/backend-data', // 后端端点地址
        method: 'GET',
        dataType: 'json',
        success: function(dataFromBackend) {
            // 成功获取数据后动态设置页面内容
            for (let i = 1; i <= dataFromBackend.length; i++) {
                $(`#page${i}`).text(dataFromBackend[i - 1]);
            }
        },
        error: function(xhr, status, error) {
            console.error('Error fetching data:', error);
        }
    });
});
