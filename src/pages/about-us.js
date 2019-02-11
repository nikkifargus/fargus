import React from 'react';
import { Link } from 'gatsby';
import deeFargus from "../images/dee_fargus.png";
import peterFargus from "../images/peter_fargus.png";
import Layout from '../components/layout';
import SEO from '../components/seo';
import FCPText from '../components/FCPText';

const AboutUs = () => (
  <Layout>
    <SEO title="About Us" />
    <div style={{
      display: 'flex',
      flexDirection: 'row',
    }}
    >
      <div style={{ flexBasis: '50%', paddingLeft: '1rem', paddingRight: '1rem' }}>
        <div style={{ width: '20rem', padding:'0.25rem', margin:'0 auto'}}>
          <img style={{marginBottom: 0}} alt="logo" src={peterFargus}/>
        </div>
          <p style={{ color: `#565347`, textAlign: 'center'}}>
          Peter is a Business Psychologist and Human Resources Consultant.  Previously he has worked for British Airways and PA Management Consultants.
          He is a Fellow of the Chartered Institute of Personnel and Development; a Fellow of the Institute of Consulting, a Fellow of the Higher Education Academy and an Associate Fellow of the British Psychological Society. To view Peter&#39;s LinkedIn <a href="https://www.linkedin.com/in/pfargus/">Click here</a>

        </p>
      </div>
      <div style={{ flexBasis: '50%', paddingLeft: '1rem', paddingRight: '1rem' }}>
      <div style={{ width: '20rem', padding:'0.25rem', margin:'0 auto'}}>
        <img style={{ marginBottom: 0 }} alt="logo" src={deeFargus}/>
      </div>

        <p style={{color: `#565347`, textAlign: 'center'}}>
          Dee is a Database Analyst. She has worked with Peter on assignments aimed at emphasising ‘employee voice’ through the use of employee opinion surveys. 
          Previously she has worked for London Transport and PA Computers and Telecommunications. To view Dee&#39;s LinkedIn <a href="https://www.linkedin.com/in/dee-fargus-20382b12/">Click here</a>
        </p>
      </div>
    </div>
  </Layout>
)

export default AboutUs
