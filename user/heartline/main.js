document.addEventListener("DOMContentLoaded", () => {
    const todayInfoElement = document.getElementById('todayInfo');
    const chartContainer = document.getElementById('chartContainer');
    
    // Fetch data from backend
    fetch('http://localhost:3000/api/echart-data')
      .then(response => response.json())
      .then(data => {
        // Update chart and today's data display
        updateChartAndTodayData(data);
      })
      .catch(error => {
        console.error('Error fetching echart data:', error);
      });
  
    function updateChartAndTodayData(data) {
      const xAxisName = data.xAxisName;
      const dataSource = data.data;
      const legendData = data.legendData;
      
      // 获取今天的数据（假设为数组的最后一个数据点）
      const todayData = dataSource[dataSource.length - 1];
      const todayCry = todayData[1];
      const todayHappy = todayData[2];
      const todayHappyPercentage = ((todayHappy / (todayCry + todayHappy)) * 100).toFixed(2);
      
      // 更新今天的数据展示
      todayInfoElement.innerHTML = `
        今天的哭泣时长: ${todayCry.toFixed(2)} 小时<br>
        今天的开心时长: ${todayHappy.toFixed(2)} 小时<br>
        今天的开心百分比: ${todayHappyPercentage}%
      `;
      
      // 更新图表
      const chart = echarts.init(chartContainer);
      const option = {
        legend: {
          data: legendData.map(item => item.name),
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
            data: dataSource.map(item => item[1]),
            itemStyle: {
              color: '#61a0a8'
            }
          },
          {
            name: '开心',
            type: 'bar',
            data: dataSource.map(item => item[2]),
            itemStyle: {
              color: '#d48265'
            }
          },
          {
            name: '开心百分比',
            type: 'line',
            yAxisIndex: 1,
            data: dataSource.map(item => ((item[2] / (item[1] + item[2])) * 100).toFixed(2)),
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
    }
  });
  