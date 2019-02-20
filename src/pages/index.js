import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import FCPText from '../components/FCPText'
import logo from "../images/logo.png"

const IndexPage = () => (
  <Layout>
    <div style={{ maxWidth: `300px`, margin: '0 auto' }}>
      <img alt="image" src={logo}/>
    </div>
    <div style={{ textAlign: 'center' }}>
    <FCPText> Managing Motivation in Business </FCPText>
    <FCPText> The Fargus Consulting Partnership (FCP) is a family business. We specialise in measuring and improving motivation in business. Our approach is detailed in our Executive Briefing entitled Measuring and Improving Employee Motivation available here. </FCPText>
    </div>
  </Layout>
)

export default IndexPage
