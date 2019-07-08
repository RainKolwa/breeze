import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'
import oceanBeachTheme from 'typography-theme-ocean-beach'

oceanBeachTheme.baseFontFamily = ['lucida grande', 'lucida sans unicode', 'lucida', 'helvetica', 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', 'sans-serif']
oceanBeachTheme.plugins = [
  new CodePlugin()
]
const typography = new Typography(oceanBeachTheme)

export const { scale, rhythm, options } = typography
export default typography
