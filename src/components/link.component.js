import { React } from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link as RebassLink } from "rebass"

export const Link = props => <RebassLink {...props} as={GatsbyLink} />
