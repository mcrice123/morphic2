import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Welcome to my site!</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis lectus quis velit bibendum semper. Donec pulvinar, erat at pretium aliquam, lectus turpis finibus felis, ut tristique massa nulla in mi. Sed ac urna lorem. Nunc aliquam risus ex. Duis magna est, porttitor non velit et, porttitor egestas est. Nunc fermentum eu leo ac vehicula. Maecenas volutpat tincidunt nisi, quis faucibus tortor aliquet eget. Sed id sem malesuada massa finibus posuere eget sit amet nisi. Pellentesque quis tellus mi. Integer quis diam ante. Maecenas placerat sem quis mauris ultrices tincidunt. Curabitur dictum urna sit amet turpis aliquam tincidunt. Integer eleifend quam mauris, et tristique arcu suscipit eget. Ut iaculis placerat ullamcorper.</p>

      
      <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
