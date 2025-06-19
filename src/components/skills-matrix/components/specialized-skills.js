import React from "react"
import * as styles from "./specialized-skills.css"
import * as keyMetricStyles from "./key-metrics.css"
import { cx } from "../../ui"

const SpecializedSkills = () => {
  const skills = [
    {
      title: "API Integration",
      value: "5+",
      description:
        "Years of experience connecting to and managing RESTful APIs.",
      colorClass: keyMetricStyles.tealText,
    },
    {
      title: "Cloud Services",
      value: "AWS",
      description:
        "1 year of experience with foundational cloud infrastructure.",
      colorClass: keyMetricStyles.brownText,
    },
    {
      title: "UI + DEV UNICORN",
      value: "UI Design Systems",
      description: "",
      colorClass: keyMetricStyles.goldText,
    },
  ]

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Other Skills</h2>
      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <h3 className={cx(styles.skillTitle, skill.colorClass)}>
              {skill.title}
            </h3>
            <p className={styles.skillValue}>{skill.value}</p>
            <p className={styles.skillDescription}>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SpecializedSkills
