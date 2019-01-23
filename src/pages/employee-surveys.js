import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import FCPText from '../components/FCPText'

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
  </Layout>
)

export default EmployeeSurveys
