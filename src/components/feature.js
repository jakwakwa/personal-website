import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Container,
  Section,
  Flex,
  Box,
  Subhead,
  Kicker,
  Text,
  ButtonList,
  Techstack,
} from "./ui"

import { theme } from "../theme.css.ts"

export default function Feature(props) {
  return (
    <Section padding={4} background="muted">
      <Container>
        <div style={{ position: "relative" }}>
          <Flex gap={4} variant="responsive">
            <Box width="half" order={props.flip ? 1 : null} mobile={true}>
              {props.image && (
                <Box
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "50%",

                    // This is a hack to make the image fill the container
                  }}
                  overlay
                >
                  <GatsbyImage
                    overlayColor={theme.colors.black}
                    overflow="hidden"
                    alt={props.image.alt}
                    image={getImage(props.image.gatsbyImageData)}
                    backgroundColor={theme.colors.muted}
                  />
                </Box>
              )}
            </Box>

            <Box width="half">
              <Subhead>
                {props.kicker && <Kicker>{props.kicker}</Kicker>}
                {props.heading}
              </Subhead>
              <Subhead>
                {props.techstack && <Techstack>{props.techstack}</Techstack>}
              </Subhead>

              <Text variant="lead">{props.text}</Text>
              <ButtonList links={props.links} />
            </Box>
          </Flex>
        </div>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageFeatureContent on HomepageFeature {
    id
    kicker
    heading
    techstack
    text
    links {
      id
      href
      text
    }
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
