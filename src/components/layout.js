import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <div>
  <Header/>
  <div
    style={{
      paddingLeft: `6rem`,
      paddingRight: `6rem`,
      flex: 1,
    }}
  >
    {children}
    <footer style={{paddingTop: '2rem'}}>
      <p style={{fontSize: 15, marginBottom: 0, textAlign: 'center', color: `#565347`}}> Our standards are based on those specified by the <a href="https://www.cipd.co.uk/">Chartered Institute of Personnel & Development</a>, the <a href="http://www.bps.org.uk/">British Psychological Society</a>, and the <a href="http://www.ibconsulting.org.uk/">Institute of Business Consulting</a>.</p>
      <p style={{fontSize: 17, marginBottom: 0, textAlign: 'center', color: `#565347`}}>peter@fargus.co.uk | 01423 566035 | dee@fargus.co.uk</p>
    </footer>
    </div>

  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
