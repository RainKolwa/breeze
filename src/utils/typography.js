import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'
import oceanBeachTheme from 'typography-theme-ocean-beach'

const FAMILY = ['PingFang SC', 'Helvetica Neue', 'Microsoft YaHei', '微软雅黑', 'Helvetica', 'Arial', 'sans-serif']

oceanBeachTheme.bodyFontFamily = FAMILY
oceanBeachTheme.headerFontFamily = FAMILY
oceanBeachTheme.overrideStyles = ({ adjustFontSizeTo, scale, rhythm }, options) => {
  const linkColor = '#70c0b1'
  return {
    a: {
      color: linkColor,
      textDecoration: 'none',
      textShadow: 'none'
    }
  }
}
// oceanBeachTheme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
//   'h2,h3': {
//     color: 'red'
//   }
// })
oceanBeachTheme.plugins = [
  new CodePlugin()
]
const typography = new Typography(oceanBeachTheme)

export const { scale, rhythm, options } = typography
export default typography
