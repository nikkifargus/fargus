import React from 'react'
import { Link } from 'gatsby'
import peterFargus from "../images/peterFargus.jpeg";
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
    <div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
        <div style={{ width: '10rem', padding:'0.25rem' }}>
          <img style={{marginBottom: 0}} alt="logo" src={peterFargus}/>
        </div>
        <div style={{ margin: 'auto 0' }}>
          <FCPText>
            We design and implement employee surveys. 
          </FCPText>
        </div>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
        <div style={{ width: '10rem', padding:'0.25rem' }}>
          <img style={{marginBottom: 0}} alt="logo" src={peterFargus}/>
        </div>
        <div style={{ margin: 'auto 0' }}>
          <FCPText>
            We develop management and leadership skills. 
          </FCPText>
        </div>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
        <div style={{ width: '10rem', padding:'0.25rem' }}>
          <img style={{marginBottom: 0}} alt="logo" src={peterFargus}/>
        </div>
        <div style={{ margin: 'auto 0' }}>
          <FCPText>
            We assess the quality of human capital.
          </FCPText>
        </div>
      </div>
    </div>
  </Layout>
)

export default ThirdPage
