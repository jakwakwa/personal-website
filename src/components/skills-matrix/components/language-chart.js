import React, { useEffect, useRef } from "react"
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import * as styles from "./charts.css"
import { cx } from "../../ui"

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend
)

const LanguageChart = () => {
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
      darkTeal: "#1f3736",
      brown: "#a67244",
      gold: "#d8b08c",
      peach: "#f9b87f",
      teal: "#116964",
    }

    const wrapLabel = (label) => {
      const maxLength = 16
      if (label.length <= maxLength) {
        return label
      }
      const words = label.split(" ")
      const lines = []
      let currentLine = ""
      for (const word of words) {
        if ((currentLine + word).length > maxLength) {
          lines.push(currentLine.trim())
          currentLine = ""
        }
        currentLine += word + " "
      }
      lines.push(currentLine.trim())
      return lines.filter((line) => line)
    }

    const labels = [
      "HTML 5",
      "UI/UX Design",
      "CSS / Sass",
      "JavaScript",
      "ReactJs",
      "API (including RESTful)",
      "Styled Components / Emotion",
      "NextJs",
      "Typescript",
      "Redux",
      "Formik- form library",
      "Jest.js",
      "Angular",
      "AWS",
      "React Native",
    ].map((l) => wrapLabel(l))

    const data = {
      labels,
      datasets: [
        {
          label: "Years of Experience",
          data: [10, 10, 10, 5, 5, 4, 4, 4, 4, 3, 3, 1, 1, 1, 0.5],
          backgroundColor: [
            chartColors.teal,
            chartColors.brown,
            chartColors.darkTeal,
            chartColors.darkTeal,
            chartColors.darkTeal,
            chartColors.peach,
            chartColors.darkTeal,
            chartColors.darkTeal,
            chartColors.darkTeal,
            chartColors.darkTeal,
            chartColors.darkTeal,
            chartColors.gold,
            chartColors.gold,
            chartColors.gold,
            chartColors.gold,
          ],
          borderColor: "rgba(255, 255, 255, 0)",
          borderWidth: 1,
        },
      ],
    }

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data,
      options: {
        indexAxis: "y",
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          x: {
            beginAtZero: true,
            title: { display: true, text: "Years", color: "#a67244" },
            grid: { color: "#d8b08c40" },
            ticks: { color: "#a67244" },
          },
          y: {
            grid: { display: false },
            ticks: {
              color: "#a67244",
              callback: function (value, index, ticks) {
                const label = this.getLabelForValue(value)
                if (Array.isArray(label)) {
                  return label.join("\n")
                }
                return label
              },
            },
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              title: (tooltipItems) => {
                const item = tooltipItems[0]
                const label = item.chart.data.labels?.[item.dataIndex]
                if (Array.isArray(label)) {
                  return label.join(" ")
                }
                return label || ""
              },
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
    <div className={cx(styles.chartContainer, styles.chartContainerSpan)}>
      <h2 className={styles.title}>Language & Framework Proficiency</h2>
      <p className={styles.description}>
        This chart compares my years of hands-on experience across various
        essential programming languages and frameworks, highlighting a long-term
        focus on the React ecosystem and core web technologies.
      </p>
      <div className={cx(styles.canvasContainer, styles.tallCanvasContainer)}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  )
}

export default LanguageChart
