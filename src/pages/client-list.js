import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import fsa from "../images/fsa.png"
import lch from "../images/lch.png"
import myTravel from "../images/myTravel.png"
import NHS from "../images/NHS.png"
import NPS from "../images/NPS.png"
import pwc from "../images/pwc.png"
import stockport from "../images/stockport.jpg"
import ukSport from "../images/ukSport.jpg"

const ClientList = () => (
  <Layout>
    <SEO title="Client List" />
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
    <div style={{width:230, padding:'1rem', margin:'auto 0'}}><img alt="logo" src={fsa}/></div>
    <div style={{width:230, padding:'1rem', margin:'auto 0'}}><img alt="logo" src={lch}/></div>
    <div style={{width:230, padding:'1rem', margin:'auto 0'}}><img alt="logo" src={myTravel}/></div>
    <div style={{width:230, padding:'1rem', margin:'auto 0'}}><img alt="logo" src={stockport}/></div>
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
    <div style={{width:230, padding:'1rem', margin:'auto 0'}}><img alt="logo" src={NHS}/></div>
    <div style={{width:230, padding:'1rem', margin:'auto 0'}}><img alt="logo" src={pwc}/></div>
    <div style={{width:230, padding:'1rem', margin:'auto 0'}}><img alt="logo" src={NPS}/></div>
    <div style={{width:230, padding:'1rem', margin:'auto 0'}}><img alt="logo" src={ukSport}/></div>
  </div>
  </Layout>
)

export default ClientList
