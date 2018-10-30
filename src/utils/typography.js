import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 2,
  googleFonts: [
    {
      name: 'Space Mono',
      styles: ['400', '600', '800'],
    },
  ],
  headerFontFamily: ['Space Mono', 'monospace'],
  headerWeight: 600,
  bodyFontFamily: ['Space Mono', 'monospace'],
  bodyWeight: 400,
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
