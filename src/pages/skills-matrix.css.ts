import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"

export const page = style({
  backgroundColor: theme.colors.background,
  color: theme.colors.text,
  minHeight: "100vh",
  padding: theme.space[4],
  "@media": {
    "screen and (min-width: 768px)": {
      padding: theme.space[6],
    },
  },
})

export const main = style({
  display: "grid",
  gap: theme.space[5],
  gridTemplateColumns: "1fr",
  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
})
