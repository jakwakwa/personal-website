import { style } from "@vanilla-extract/css"
import { theme } from "../../../theme.css"

export const header = style({
  textAlign: "center",
  marginBottom: theme.space[6],
})

export const h1 = style({
  fontSize: "36px",
  fontWeight: theme.fontWeights.black,
  color: theme.colors["dark-teal"],
  marginBottom: theme.space[2],
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "60px",
    },
  },
})

export const h2 = style({
  fontSize: "20px",
  fontWeight: theme.fontWeights.black,
  color: theme.colors["dark-teal"],
  marginBottom: theme.space[2],
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "24px",
    },
  },
})

export const p = style({
  fontSize: "18px",
  color: theme.colors.brown,
  maxWidth: "48rem",
  margin: "0 auto",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "20px",
    },
  },
})
