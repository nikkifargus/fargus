import React from 'react'
import { Link } from 'gatsby'
import logo from "../images/OPR_Logo.png";
import LMSkills from "../images/LMSkills.png";
import OpinionSurveys from "../images/OpionSurveys.png";
import Layout from '../components/layout'
import SEO from '../components/seo'
import FCPText from '../components/FCPText'

const WhatWeDo = () => (
  <Layout>
    <SEO title="What We Do" />
    <div
      style={{
        // display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
    <FCPText>
      We can help you in the following ways.<br/>
      Please select the service that you are most interested in for more information:
    </FCPText>
    <div style={{ }}>
    <Link
      to="/employee-surveys/"
      style={{
        color: `#565347`,
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
        <div style={{
          width: '8rem',
          height: '8rem',
          padding:'0.25rem',
          marginRight: '2rem',
        }}>
          <img style={{marginBottom: 0 }} alt="logo" src={OpinionSurveys}/>
        </div>
        <div style={{ margin: 'auto 0' }}>
          <FCPText>
            We design and implement employee surveys. 
          </FCPText>
        </div>
      </div>
      </Link>
      <Link
        to="/leadership-skills/"
        style={{
          color: `#565347`,
        }}
      >
      <div style={{
        display: 'flex',
        flexDirection: 'row',
      }}>

        <div style={{
          width: '8rem',
          height: '8rem',
          padding:'0.25rem',
          marginRight: '2rem',
        }}>
          <img style={{marginBottom: 0}} alt="logo" src={LMSkills}/>
        </div>
        <div style={{ margin: 'auto 0' }}>
          <FCPText>
            We develop management and leadership skills. 
          </FCPText>
        </div>
      </div>
      </Link>


    </div>
    <Link
      to="/quality-of-human-capital"
      style={{
        color: `#565347`,
      }}
    >
    <div style={{
      display: 'flex',
      flexDirection: 'row',
    }}>
      <div style={{
        width: '8rem',
        padding:'0.25rem',
        marginRight: '2rem',
        height: '8rem',
      }}>
        <img style={{marginBottom: 0}} alt="logo" src={logo}/>
      </div>
      <div style={{ margin: 'auto 0' }}>
        <FCPText>
          We assess the quality of human capital.
        </FCPText>
      </div>
    </div>
    </Link>
    </div>
  </Layout>
)

export default WhatWeDo
