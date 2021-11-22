import './src/styles/theme.css'
import './src/styles/global.styl'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

export const onRouteUpdate = function({ location }) {
  // Don't track while developing.
  if (process.env.NODE_ENV === `production` && typeof _hmt === `function`) {
    _hmt.push(['_trackPageview', (location || {}).pathname])
  }
}