import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import FCPText from '../components/FCPText'
import table from '../images/table.png'

const EmployeeSurveys = () => (
  <Layout>
    <SEO title="Employee Surveys" />
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
    }}> Employee opinion surveys and 360 degree feedback </h4>
    <p style={{
      color: `#565347`,
    }}> We can offer a full organisation survey, or one restricted to specific parts of your organisation. </p>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    }}>
    <img alt="image" src={table}/></div>

  </Layout>
)

export default EmployeeSurveys
