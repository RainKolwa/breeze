const React = require('react')

const ThemeScript = () => {
  const script = `
(function() {
  try {
    var theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`
  return React.createElement('script', {
    key: 'theme-script',
    dangerouslySetInnerHTML: { __html: script },
  })
}

exports.onRenderBody = ({ setPreBodyComponents, setPostBodyComponents }) => {
  setPreBodyComponents([React.createElement(ThemeScript, { key: 'theme-script' })])
  
  setPostBodyComponents([
    React.createElement('script', {
      key: 'cloudflare-analytics',
      defer: true,
      src: 'https://static.cloudflareinsights.com/beacon.min.js',
      'data-cf-beacon': '{"token": "151082918e514eef9af3fb026b1771cf"}',
    }),
  ])
}
