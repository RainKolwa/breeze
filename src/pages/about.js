import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <section id='resume' style={{ padding: '0 15px' }}>
      <h1>我的社交帐号</h1>
      <ul>
        <li>
          <Link to='https://github.com/rainkolwa'>Github</Link>
        </li>
        <li>
          <Link to='https://twitter.com/Rainkolwa'>Twitter</Link>
        </li>
      </ul>
    </section>
  </Layout>
)
