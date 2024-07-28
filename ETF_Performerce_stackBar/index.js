// import { Chart } from "chart.js";

// window.onload = function() {
    document.addEventListener('DOMContentLoaded', function() {
        // 使用fetch获取数据
        fetch('test.json')
            .then(response => response.json())
            .then(res_data => {
                const date = res_data.date;
                const Long = res_data.Long;
                const Short = res_data.Short;
                const Spreading = res_data.Spreading;
    
                console.log(date, Long, Short, Spreading)
                // const labels = data.map(item => item.date);
                // const closePrices = data.map(item => item.close);
    
                // 绘制图表
                const ctx = document.getElementById("myChart").getContext("2d");
    
                const data = {
                  labels: date,
                  datasets: [
                        {
                            label: "Long",
                            backgroundColor: "#0353a4",
                            data: Long
                        },
                        {
                            label: "Short",
                            backgroundColor: "#ff8552",
                            data: Short
                        },
                        {
                            label: "Spreading",
                            backgroundColor: "#4ecdc4",
                            data: Spreading
                        }
                    ]
                };
    
                const options = {
                    scales: {
                        yAxes: [{ stacked: true }],
                        xAxes: [
                            {
                                stacked: true,
                                ticks: { maxRotation: 90, minRotation: 90 }
                            }
                        ]
                    }
                };
    
                const chart = new Chart(ctx, {
                    // The type of chart we want to create
                    type: "bar",
                    // The data for our dataset
                    data: data,
                    // Configuration options go here
                    options: options
                });
            });
    });