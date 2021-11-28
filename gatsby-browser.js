require('./src/styles/theme.css')
require('./src/styles/global.styl')
require('prismjs/themes/prism-tomorrow.css')
require('prismjs/plugins/line-numbers/prism-line-numbers.css')

exports.onRouteUpdate = ({ location }) => {
  if (
    process.env.NODE_ENV === `production` &&
    typeof window._hmt === `function`
  ) {
    window._hmt.push(['_trackPageview', (location || {}).pathname])
  }
}
