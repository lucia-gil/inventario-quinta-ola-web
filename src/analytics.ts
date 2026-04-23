import { renderLayout } from "./layout";

import {
    Chart,
    BarElement,
    LineController,
    LineElement,
    PointElement,
    ArcElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend,
    DoughnutController,
    ScatterController,
    BarController
} from "chart.js";

// Register required components (important in Chart.js v3+)
Chart.register(
    LineController,
    DoughnutController,
    ScatterController,
    BarController,
    LineElement,
    BarElement,
    ArcElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend
);

const content = document.getElementById("content").innerHTML

document.getElementById("content").innerHTML = renderLayout(
    "Análisis",
    content,
    "analytics"
);

window.devicePixelRatio = 2
new Chart("myChart00", {
    type: "doughnut",
    data: {
        labels: ["Juguetes", "Artículos Deportivos", "Limpieza", "Construcción", "Frágil", "Tecnología", "Comida"],
        datasets: [
            {
                label: "Sales",
                data: [10, 20, 15, 30, 124, 3, 90],
                backgroundColor: [
                    'rgb(59, 130, 246)',   // blue
                    'rgb(34, 197, 94)',    // green
                    'rgb(250, 204, 21)',   // yellow
                    'rgb(236, 72, 153)',   // pink
                    'rgb(139, 92, 246)',   // purple
                    'rgb(249, 115, 22)',   // orange
                    'rgb(100, 116, 139)',  // slate gray
                ],
                // borderColor: "blue",
                // backgroundColor: "rgba(0,0,255,1)",
            },
        ],
    },
    options: {
        // responsive: true,
        plugins: { legend: { position: 'bottom' } },
    },
});

const labels = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
new Chart("myChart01", {
    type: "line",
    data: {
        labels: labels,
        datasets: [
            {
                label: 'Ingresos',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgb(234, 88, 12)',
                tension: 0.2,
            },
            {
                label: 'Salidas',
                data: [3, 36, 12, 102, 89, 34, 40],
                fill: false,
                borderColor: 'rgb(124, 58, 237)',
                tension: 0.2,
                borderDash: [3, 3],
            }
        ]
    }
});

new Chart("myChart02", {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'Aceptado',
                data: [12, 47, 3, 29, 85, 16, 64],
                backgroundColor: "rgb(34, 197, 94)",
            },
            {
                label: 'Rechazado',
                data: [91, 8, 56, 33, 72, 14, 40],
                backgroundColor: "rgb(239, 68, 68)",
            },
            {
                label: 'Pendiente',
                data: [5, 77, 21, 68, 9, 50, 38],
                backgroundColor: "rgb(156, 163, 175)",
            },
            {
                label: 'Esperando Cambios',
                data: [5, 77, 21, 68, 9, 50, 38],
                backgroundColor: "rgb(250, 204, 21)",
            },
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Chart.js Bar Chart - Stacked'
            },
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true
            }
        }
    }
});