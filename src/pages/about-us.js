import React from 'react'
import { Link } from 'gatsby'
import NHS from "../images/NHS.png"

import Layout from '../components/layout'
import SEO from '../components/seo'
import FCPText from '../components/FCPText'

const ThirdPage = () => (
  <Layout>
    <SEO title="About Us" />
    <div style={{
      display: 'flex',
      flexDirection: 'row',
    }}
    >
      <div style={{ flexBasis: '50%', paddingLeft: '1rem', paddingRight: '1rem' }}>
        <div style={{width:300, padding:'0.25rem', margin:'0 auto'}}><img alt="logo" src={NHS}/></div>
          <FCPText>
          Peter is a Business Psychologist and Human Resources Consultant.  Previously he has worked for British Airways and PA Management Consultants.
          He is a Fellow of the Chartered Institute of Personnel and Development; a Fellow of the Institute of Consulting, a Fellow of the Higher Education Academy and an Associate Fellow of the British Psychological Society.
        </FCPText>
      </div>
      <div style={{ flexBasis: '50%', paddingLeft: '1rem', paddingRight: '1rem' }}>
      <div style={{width:300, padding:'0.25rem', margin:'0 auto'}}><img alt="logo" src={NHS}/></div>

        <FCPText>
          Dee is a Database Analyst. She has worked with Peter on assignments aimed at emphasising ‘employee voice’ through the use of employee opinion surveys. 
          Previously she has worked for London Transport and PA Computers and Telecommunications.
        </FCPText>
      </div>
    </div>
  </Layout>
)

export default ThirdPage
