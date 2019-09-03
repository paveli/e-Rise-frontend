import { Link } from "gatsby"
import PropTypes from "prop-types"
import { React, Fragment } from "react"
import { Button, Flex, Box, Heading } from "rebass"

import { Menu } from "./menu.component"

export const Header = ({ siteTitle }) => (
  <Fragment>
    <header
      style={{
        marginBottom: `1.45rem`,
      }}
    >
      <Flex>
        <Box p={3} width={1 / 4} color="white">
          <Heading fontSize={[5, 6]} color="primary">
            <Link
              href="/"
              style={{
                color: `#0000F0`,
                textDecoration: `none`,
              }}
            >
              {" "}
              {siteTitle}
            </Link>
          </Heading>
        </Box>
        <Box p={3} width={3 / 4} textAlign="right">
          <Menu /> <Button variant="outline">Login with Keeper</Button>
        </Box>
      </Flex>
    </header>
  </Fragment>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
