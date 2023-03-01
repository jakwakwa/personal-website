import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Section, Text, SuperHeading } from "./ui"
import * as styles from "./about-hero.css"

export default function AboutHero(props) {
  return (
    <Section>
      <Container width="wide">
        {props.image && (
          <GatsbyImage
            borderRadius="0%"
            alt={props.image.alt}
            image={getImage(props.image.gatsbyImageData)}
            className={styles.aboutHeroImage}
          />
        )}
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment AboutHeroContent on AboutHero {
    id
    heading
    text
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
