import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import FCPText from '../components/FCPText'

const HumanCapital = () => (
  <Layout>
    <SEO title="Quality of Human Capital" />
    <h4>
      <Link
        to="/what-we-do/"
        style={{
          color: `#565347`,
        }}
      >
      BACK
      </Link>
    </h4>
  </Layout>
)

export default HumanCapital
