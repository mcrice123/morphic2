import React from 'react'
import Layout from '../components/layout'
import Embed from '../../static/embed/a-little-lost.jpg'
const NotFoundPage = () => (
  <Layout>
    <div className="post-body">
      <h1>A little lost?</h1>
      <p>You just hit a route that doesn&#39;t exist.</p>
      <img src={Embed} alt="Errie and Capri, the goat, look confused. Errie says 'Awkward...'" />
    </div>
  </Layout>
)

export default NotFoundPage
