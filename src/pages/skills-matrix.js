import React from "react"
import Layout from "../components/layout"
import Header from "../components/skills-matrix/components/skills-matrix-header"
import KeyMetrics from "../components/skills-matrix/components/key-metrics"
import LanguageChart from "../components/skills-matrix/components/language-chart"
import ToolsChart from "../components/skills-matrix/components/tools-chart"
import ApplicationsChart from "../components/skills-matrix/components/applications-chart"
import SpecializedSkills from "../components/skills-matrix/components/specialized-skills"
import { graphql } from "gatsby"
import { Container } from "../components/ui"
import * as styles from "../components/skills-matrix/skills-matrix.css"

function SkillsMatrixPage() {
  return (
    <Layout>
      <div className={styles.page}>
        <Container>
          <Header />
          <KeyMetrics />

          <main className={styles.main}>
            <LanguageChart />
            <ToolsChart />
            <ApplicationsChart />
            <SpecializedSkills />
          </main>
        </Container>
      </div>
    </Layout>
  )
}

export default SkillsMatrixPage

export const query = graphql`
  query SkillsMatrixPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`
