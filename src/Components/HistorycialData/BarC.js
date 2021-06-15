import React from 'react';
import { Bar, Bubble } from 'react-chartjs-2';
const BarC = ({data,location}) => {
  console.log(data)
    return (
        <div>
            <Bar
                data={{
                    labels: data.map(param => param.parameter),
                    datasets: [
                        {
                        label: `Historical Data Of No2, O3 at ${location}`,
                        data: data.map(value => value.value),
                        backgroundColor: '#FF6394',
                        borderColor: '#FF6394',
                        borderWidth:1
                        },
                    ],
                    
                }}
                width={600}
                height={400}
                options={{ maintainAspectRatio: false,
                    scales: {
                        yAxes: [
                          {
                            ticks: {
                              beginAtZero: true,
                            },
                          },
                        ],
                    },
                    legend: {
                        labels: {
                          fontSize: 25,
                        },
                      },
                
                }}
            />
        </div>
    );
};

export default BarC;