import React from "react";
import { Location } from "@reach/router";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Provider } from "react-redux";
import { ThemeProvider } from "emotion-theming";

import createStore from "./store/createStore";
import { Header } from "./components";
import { HeaderSecond } from "./components/headerSecond";

import "./bootstrap-reboot.css";

import preset from "./theme";

import "./app.css";

const store = createStore();

// Global application wrapper
export const AppLayout = ({ children, pageContext, props }) => (
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
				<Provider store={store}>
					<ThemeProvider theme={preset}>
						<Location>
							{props => {
								return props.location.pathname === "/" ||
									props.location.pathname === "/projects" ? (
									<Header siteTitle={data.site.siteMetadata.title} />
								) : (
									<HeaderSecond siteTitle={data.site.siteMetadata.title} />
								);
							}}
						</Location>

						<div
							style={{
								margin: `0 auto`,
								maxWidth: 960,
								padding: `0px 1.0875rem 1.45rem`,
								paddingTop: 0
							}}
						>
							<main>{children}</main>
						</div>
						<footer style={{ marginLeft: "10%", marginRight: "10%" }}>
							<div style={{ color: "blue", display: "inline" }}>e-Rise.org</div>{" "}
							© {new Date().getFullYear()}
						</footer>
					</ThemeProvider>
				</Provider>
			);
		}}
	/>
);

AppLayout.propTypes = {
	children: PropTypes.node.isRequired
};

export default AppLayout;
