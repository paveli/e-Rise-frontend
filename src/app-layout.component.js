import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import { Header } from "./components"

// Global application wrapper
export const AppLayout = ({ children, pageContext }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />

          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <main>{children}</main>
            <footer>© {new Date().getFullYear()}, e-Rise.org</footer>
          </div>
        </>
      )
    }}
  />
)

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout
