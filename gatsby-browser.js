require('./src/styles/theme.css')
require('./src/styles/global.styl')
require('prismjs/themes/prism-tomorrow.css')
require('prismjs/plugins/line-numbers/prism-line-numbers.css')

const ensureLegacyChunkNames = () => {
  if (typeof window === 'undefined' || !window.___chunkMapping) {
    return
  }

  const suffixes = [
    [/[-]tsx$/, '-js'],
    [/[-]ts$/, '-js'],
  ]

  Object.keys(window.___chunkMapping).forEach(chunkName => {
    suffixes.forEach(([pattern, replacement]) => {
      if (!pattern.test(chunkName)) {
        return
      }

      const legacyName = chunkName.replace(pattern, replacement)
      if (!window.___chunkMapping[legacyName]) {
        window.___chunkMapping[legacyName] = window.___chunkMapping[chunkName]
      }
    })
  })
}

exports.onClientEntry = () => {
  ensureLegacyChunkNames()
}

exports.onRouteUpdate = ({ location }) => {
  ensureLegacyChunkNames()

  if (
    process.env.NODE_ENV === `production` &&
    typeof window._hmt === `function`
  ) {
    window._hmt.push(['_trackPageview', (location || {}).pathname])
  }
}
