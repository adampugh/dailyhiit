import React, { useCallback, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { getDayIndex } from '../utils/dates';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
    plugins: {
        title: {
            text: 'Chart.js Bar Chart - Stacked',
            display: false,
        },
        legend: {
            display: false,
        },
        tooltip: {
            enabled: false,
        },
    },
    responsive: true,
    interaction: {
        mode: 'index' as const,
        intersect: false,
    },
    scales: {
        x: {
            stacked: true,
            ticks: {
                color: '#fff',
                font: {
                    family: 'Sarabun',
                    weight: 100,
                },
            },
        },
        y: {
            stacked: true,
            ticks: {
                color: '#fff',
                font: {
                    family: 'Sarabun',
                    weight: 100,
                },
            },
        },
    },
};

const daysOfTheWeek = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
const day = daysOfTheWeek[getDayIndex()];

const index = daysOfTheWeek.indexOf(day);
const start = daysOfTheWeek.slice(index);
const end = daysOfTheWeek.slice(0, index);
const labels = [...start, ...end];

const StatsChart = () => {
    const [gradient, setGradient] = useState('');

    const chartRef = useCallback((node) => {
        if (node !== null) {
            const updatedGradient = node.ctx.createLinearGradient(0, 0, 0, 400);
            updatedGradient.addColorStop(0, '#7253A0');
            updatedGradient.addColorStop(1, '#E8A0AC');
            setGradient(updatedGradient);
        }
    }, []);

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [100, 200, 300, 400, 500, 600, 700],
                backgroundColor: gradient,
                stack: 'Stack 0',
            },
        ],
    };

    return (
        <div className='mt-4'>
            <Bar options={options} data={data} ref={chartRef} />
        </div>
    );
};

export default StatsChart;
