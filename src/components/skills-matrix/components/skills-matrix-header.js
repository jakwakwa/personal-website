import React from "react"
import * as styles from "./skills-matrix-header.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>My Skill Matrix</h1>
      <p className={styles.p}>
        A visual summary of my technical expertise, showcasing a deep
        proficiency in modern web development technologies and methodologies.
      </p>
    </header>
  )
}

export default Header
