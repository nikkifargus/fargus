import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import FCPText from '../components/FCPText'

const ThirdPage = () => (
  <Layout>
    <SEO title="What We Do" />
    <FCPText>
      We can help you in the following ways:
    </FCPText>
    <FCPText>
      Please select the service that you are most interested in for more information:
    </FCPText>
  </Layout>
)

export default ThirdPage
