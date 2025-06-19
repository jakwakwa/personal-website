import { style } from "@vanilla-extract/css"
import { theme } from "../../../theme.css"

export const section = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: theme.space[4],
  marginBottom: theme.space[6],
  textAlign: "center",
  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },
})

export const metricCard = style({
  backgroundColor: theme.colors.muted,
  padding: theme.space[4],
  borderRadius: theme.radii.large,
  boxShadow: theme.shadows.large,
  border: `1px solid ${theme.colors.gold}`,
})

export const metricValue = style({
  fontSize: theme.fontSizes[6],
  fontWeight: theme.fontWeights.extrabold,
})

export const metricTitle = style({
  fontSize: theme.fontSizes[3],
  fontWeight: theme.fontWeights.semibold,
  color: theme.colors.dark,
  marginTop: theme.space[2],
})

export const metricDescription = style({
  color: theme.colors.brown,
  marginTop: theme.space[1],
})

export const tealText = style({
  color: theme.colors["dark-teal"],
})

export const brownText = style({
  color: theme.colors.brown,
})

export const goldText = style({
  color: theme.colors.gold,
})
