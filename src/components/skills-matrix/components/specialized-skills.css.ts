import { style } from "@vanilla-extract/css"
import { theme } from "../../../theme.css"

export const container = style({
  backgroundColor: theme.colors.muted,
  padding: theme.space[4],
  borderRadius: theme.radii.large,
  boxShadow: theme.shadows.large,
  border: `1px solid ${theme.colors.gold}`,
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
  marginBottom: theme.space[4],
  color: theme.colors["dark-teal"],
})

export const grid = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: theme.space[3],
  textAlign: "center",
  "@media": {
    "screen and (min-width: 640px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },
})

export const skillCard = style({
  border: `1px solid ${theme.colors.gold}`,
  padding: theme.space[3],
  borderRadius: theme.radii.large,
})

export const skillTitle = style({
  fontSize: theme.fontSizes[3],
  fontWeight: theme.fontWeights.bold,
})

export const skillValue = style({
  fontSize: theme.fontSizes[5],
  fontWeight: theme.fontWeights.extrabold,
  margin: `${theme.space[2]} 0`,
  color: theme.colors.dark,
})

export const skillDescription = style({
  color: theme.colors.brown,
})
