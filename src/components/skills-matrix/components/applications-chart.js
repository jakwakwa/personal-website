import React, { useEffect, useRef } from "react"
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
} from "chart.js"
import * as styles from "./charts.css"

Chart.register(ArcElement, Tooltip, Legend, DoughnutController)

const ApplicationsChart = () => {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  useEffect(() => {
    if (!chartRef.current) return

    const ctx = chartRef.current.getContext("2d")
    if (!ctx) return

    // Destroy existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy()
      chartInstance.current = null
    }

    const chartColors = {
      brown: "#a67244",
      gold: "#d8b08c",
      peach: "#f9b87f",
    }

    const data = {
      labels: ["Figma", "Framer", "Zeplin"],
      datasets: [
        {
          label: "Years of Experience",
          data: [4, 1, 1],
          backgroundColor: [
            chartColors.brown,
            chartColors.gold,
            chartColors.peach,
          ],
          hoverOffset: 4,
        },
      ],
    }

    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data,
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: "#a67244",
            },
          },
        },
      },
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
        chartInstance.current = null
      }
    }
  }, [])

  return (
    <div className={styles.chartContainer}>
      <h2 className={styles.title}>Design & Application Expertise</h2>
      <p className={styles.description}>
        This visualization illustrates my experience with critical design and
        application tools, with a significant focus on Figma for creating and
        translating high-fidelity designs into pixel-perfect web applications.
      </p>
      <div className={styles.canvasContainer}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  )
}

export default ApplicationsChart
