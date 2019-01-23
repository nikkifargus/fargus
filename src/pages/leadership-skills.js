import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import FCPText from '../components/FCPText'
import leadership from "../images/leadershipImg.jpeg"

const LeadershipSkills = () => (
  <Layout>
    <SEO title="Leadership Skill" />
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
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    }}>
    <img alt="image" src={leadership}/></div>
  </Layout>
)

export default LeadershipSkills
