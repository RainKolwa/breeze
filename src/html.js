import React from 'react'
import PropTypes from 'prop-types'

export default function HTML (props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        {props.headComponents}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5V45GJT');
                `
          }}
        />
        <script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var adsbygoogle = window.adsbygoogle || [];
              adsbygoogle.push({
                google_ad_client: 'ca-pub-8250876673332836',
                enable_page_level_ads: true
              });
                `
          }}
        />
      </head>
      <body {...props.bodyAttributes}>
        <noscript>
          <iframe src='https://www.googletagmanager.com/ns.html?id=GTM-5V45GJT'
            height='0' width='0' style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
        {props.preBodyComponents}
        <noscript key='noscript' id='gatsby-noscript'>
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id='___gatsby'
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
}
