import { style } from "@vanilla-extract/css"
import { theme } from "../../../theme.css"

export const chartContainer = style({
  backgroundColor: theme.colors.muted,
  padding: theme.space[4],
  borderRadius: theme.radii.large,
  boxShadow: theme.shadows.large,
  border: `1px solid ${theme.colors.gold}`,
})

export const chartContainerSpan = style({
  "@media": {
    "screen and (min-width: 768px)": {
      gridColumn: "span 2 / span 2",
    },
  },
})

export const title = style({
  fontSize: theme.fontSizes[4],
  fontWeight: theme.fontWeights.bold,
  textAlign: "center",
  marginBottom: theme.space[3],
  color: theme.colors["dark-teal"],
})

export const description = style({
  textAlign: "center",
  color: theme.colors.brown,
  marginBottom: theme.space[4],
  maxWidth: "42rem",
  margin: "0 auto",
})

export const canvasContainer = style({
  position: "relative",
  width: "100%",
  maxWidth: "100%",
  margin: "0 auto",
  height: "24rem",
  "@media": {
    "screen and (min-width: 768px)": {
      height: "32rem",
    },
  },
})

export const tallCanvasContainer = style({
  height: "32rem",
  "@media": {
    "screen and (min-width: 768px)": {
      height: "40rem",
    },
  },
})
