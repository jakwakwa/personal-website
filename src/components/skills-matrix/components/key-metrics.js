import React from "react"
import * as styles from "./key-metrics.css"
import { cx } from "../../ui"

const KeyMetrics = () => {
  const metrics = [
    {
      value: "10+",
      title: "Years HTML Experience",
      description:
        "Building the web's foundation with semantic and accessible markup.",
      colorClass: styles.tealText,
    },
    {
      value: "8+",
      title: "Years UI/UX Design",
      description:
        "Crafting intuitive, user-centric interfaces from concept to code.",
      colorClass: styles.brownText,
    },
    {
      value: "6+",
      title: "Years JavaScript Mastery",
      description: "Developing dynamic and responsive web applications.",
      colorClass: styles.goldText,
    },
  ]

  return (
    <section className={styles.section}>
      {metrics.map((metric, index) => (
        <div key={index} className={styles.metricCard}>
          <p className={cx(styles.metricValue, metric.colorClass)}>
            {metric.value}
          </p>
          <p className={styles.metricTitle}>{metric.title}</p>
          <p className={styles.metricDescription}>{metric.description}</p>
        </div>
      ))}
    </section>
  )
}

export default KeyMetrics
