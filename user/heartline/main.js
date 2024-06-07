const xAxisName = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

const getEchartData = () => {
    const data = [["项目", "哭泣", "开心"]];
    xAxisName.forEach((item) => {
        const cry = Math.random() * 8 + 1;
        const happy = Math.random() * 8 + 1;
        data.push([item, cry, happy]);
    });
    return {
        dataSource: data,
        legendData: [
            { name: '哭泣', icon: 'rect' },
            { name: "开心", icon: "rect" },
            { name: "开心百分比", icon: "line" }
        ]
    };
};

const echartData = getEchartData();

// 获取今天的数据（假设为数组的最后一个数据点）
const todayData = echartData.dataSource[echartData.dataSource.length - 1];
const todayCry = todayData[1];
const todayHappy = todayData[2];
const todayHappyPercentage = ((todayHappy / (todayCry + todayHappy)) * 100).toFixed(2);

// 更新今天的数据展示
document.addEventListener("DOMContentLoaded", () => {
    const todayInfoElement = document.getElementById('todayInfo');
    todayInfoElement.innerHTML = `
        今天的哭泣时长: ${todayCry.toFixed(2)} 小时<br>
        今天的开心时长: ${todayHappy.toFixed(2)} 小时<br>
        今天的开心百分比: ${todayHappyPercentage}%
    `;
});

window.onload = () => {
    const chartContainer = document.getElementById('chartContainer');
    const chart = echarts.init(chartContainer);

    const option = {
        legend: {
            data: echartData.legendData.map(item => item.name),
            top: 30,
            textStyle: {
                color: '#ffffff',
            }
        },
        xAxis: {
            type: 'category',
            data: xAxisName,
            axisLine: {
                lineStyle: {
                    color: '#ffffff'
                }
            }
        },
        yAxis: [
            {
                type: 'value',
                min: 0,
                max: 9,
                axisLine: {
                    lineStyle: {
                        color: '#ffffff'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#ffffff'
                    }
                },
                name: '小时',
                nameTextStyle: {
                    color: '#ffffff'
                }
            },
            {
                type: 'value',
                min: 0,
                max: 100,
                axisLine: {
                    lineStyle: {
                        color: '#ffffff'
                    }
                },
                splitLine: {
                    show: false
                },
                name: '百分比 (%)',
                nameTextStyle: {
                    color: '#ffffff'
                }
            }
        ],
        series: [
            {
                name: '哭泣',
                type: 'bar',
                data: echartData.dataSource.slice(1).map(item => item[1]),
                itemStyle: {
                    color: '#61a0a8'
                }
            },
            {
                name: '开心',
                type: 'bar',
                data: echartData.dataSource.slice(1).map(item => item[2]),
                itemStyle: {
                    color: '#d48265'
                }
            },
            {
                name: '开心百分比',
                type: 'line',
                yAxisIndex: 1,
                data: echartData.dataSource.slice(1).map(item => ((item[2] / (item[1] + item[2])) * 100).toFixed(2)),
                itemStyle: {
                    color: '#91c7ae'
                },
                lineStyle: {
                    width: 3
                }
            }
        ]
    };

    chart.setOption(option);
};
