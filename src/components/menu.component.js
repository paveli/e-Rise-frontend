import { React, Fragment } from "react"
import { graphql, StaticQuery } from "gatsby"
import { Link } from "rebass"
import { safelyGetSiteConfig } from "../cms"

export const query = graphql`
  query {
    sitePage(path: { eq: "/config/" }) {
      context {
        frontmatter {
          menu_nav {
            text
            url
          }
        }
      }
    }
  }
`

export const Menu = () => (
  <StaticQuery
    query={query}
    render={data => {
      const menu = safelyGetSiteConfig(data.sitePage).menu_nav || []
      return (
        <Fragment>
          {menu.map((item, i) => (
            <Link variant="nav" href={item.url} key={i}>
              {item.text}
            </Link>
          ))}
        </Fragment>
      )
    }}
  />
)
