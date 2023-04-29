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
        <div
          style={{
            position: "relative",
            background: "rgba(10,155,155,0.07)",
            padding: "40px",
            borderRadius: "29px",
          }}
        >
          <Flex gap={4} variant="responsive">
            <Box width="half" order={props.flip ? 1 : null} mobile={true}>
              {props.image && (
                <Box
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "100%",
                    marginTop: "20px",
                  }}
                  overlay
                  mobile={true}
                >
                  <GatsbyImage
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
                <span
                  style={{
                    color: "#76e6b3",
                    paddingBottom: "15px",
                    display: "block",
                  }}
                >
                  {props.kicker && <Kicker>{props.kicker}</Kicker>}
                </span>
                <span>{props.heading}</span>
              </Subhead>
              <Subhead>
                {props.techstack && <Techstack>{props.techstack}</Techstack>}
              </Subhead>

              <Text style={{ marginTop: "30px" }} variant="lead">
                {props.text}
              </Text>
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
