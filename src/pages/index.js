import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Card from "../components/card"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <SEO title="Home" />
        <h1>EXPLORA</h1>
        <p>Bienvenido al Landing Page de mi portafolio</p>
        <Link to="/page-2/">ENTRAR</Link>
      </div>

      <div className="Cards">
        <h2>TRABAJOS DISPONIBLES</h2>
        <div className="CardGroup">   
          <Card 
            title="DesignSystem"
            text="10% finished"
            image={require('../images/C1.png')} />
          <Card 
            title="React for Designers"
            text="80% finished"
            image={require('../images/C2.png')} />
          <Card 
            title="Sound Design"
            text="100% finished"
            image={require('../images/C3.png')} />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
