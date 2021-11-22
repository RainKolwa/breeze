import './src/styles/theme.css'
import './src/styles/global.styl'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

export const onRouteUpdate = function({ location }) {
  if (
    process.env.NODE_ENV === `production` &&
    typeof window._hmt === `function`
  ) {
    window._hmt.push(['_trackPageview', (location || {}).pathname])
  }
}