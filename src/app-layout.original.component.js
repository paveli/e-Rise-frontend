import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Provider } from "react-redux";
import { ThemeProvider } from "emotion-theming";

import createStore from "./store/createStore";
import { HeaderOriginal } from "./components";

import "./bootstrap-reboot.css";
import preset from "./theme";

const store = createStore();

// Global application wrapper
export const AppLayoutOriginal = ({ children, pageContext }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQueryOriginal {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => {
			return (
				<Provider store={store}>
					<ThemeProvider theme={preset}>
						<HeaderOriginal siteTitle={data.site.siteMetadata.title} />

						<div
							style={{
								margin: `0 auto`,
								maxWidth: 960,
								padding: `0px 1.0875rem 1.45rem`,
								paddingTop: 0
							}}
						>
							<main>{children}</main>
							<footer>© {new Date().getFullYear()}, e-Rise.org</footer>
						</div>
					</ThemeProvider>
				</Provider>
			);
		}}
	/>
);

AppLayoutOriginal.propTypes = {
	children: PropTypes.node.isRequired
};

export default AppLayoutOriginal;
