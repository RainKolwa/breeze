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

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([React.createElement(ThemeScript, { key: 'theme-script' })])
}
