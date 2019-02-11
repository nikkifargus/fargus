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
    <div>
    <h4 style={{
      color: `#565347`,
    }}> Assessing the Quality of Human Capital </h4>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
    }}>
      <div style={{
        width: '33.33%',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <FCPText>
        - During strategic planning
      </FCPText>
      <FCPText>
        - Before transformation
      </FCPText>
      <FCPText>
        - Before mergers and acquisitions
      </FCPText>
      </div>
      <div style={{
        width: '33.33%',
        textAlign: 'center',
      }}>
        <img alt="logo" src={logo}/>
      </div>
      <div style={{ width: '33.33%'}}/>

    </div>
    </div>
    <h3 style={{
      color: `#565347`,
      textAlign: 'center'
    }}>
      For more information go to <a style={{
        color: `#565347`,
      }}href="http://www.ourpeoplereview.com">ourpeoplereview.com</a>
    </h3>
  </Layout>
)

export default HumanCapital
