/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Wrapper from "./wrapper"

const Layout = ({ children }) => {
  const {
    site:
    {
      siteMetadata: {
        title,
        description
      }
    }
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          minHeight: "100vh",
          backgroundColor: "#0d0431",
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Header siteDescription={description} siteTitle={title} />
        <main>{children}</main>
        <Wrapper>
          <footer>
            © {new Date().getFullYear()}, Built with
          {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </Wrapper>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
