/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import { ThemeProvider } from "emotion-theming"

import "./src/bootstrap-reboot.css"
import preset from "./src/theme"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={preset}>{element}</ThemeProvider>
)
