import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import FCPText from '../components/FCPText'
import logo from '../images/OPR_Logo.png'
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
    <h4 style={{
      color: `#565347`,
    }}> Assessing the Quality of Human Capital </h4>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
    }}>
      <div>
      <FCPText>
        During strategic planning
      </FCPText>
      <FCPText>
        Before transformation
      </FCPText>
      <FCPText>
        Before mergers and acquisitions
      </FCPText>
      </div>
      <div><img alt="logo" src={logo}/></div>
    </div>
    <h4 style={{
      color: `#565347`,
    }}>
      For more information go to <a style={{
        color: `#565347`,
      }}href="http://www.ourpeoplereview.com">ourpeoplereview.com</a>
    </h4>
  </Layout>
)

export default HumanCapital
