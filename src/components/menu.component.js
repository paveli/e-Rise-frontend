import { React, Fragment } from "react";
import { graphql, StaticQuery } from "gatsby";
import { Link } from "./link.component";
import { safelyGetSiteConfig } from "../cms";

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
`;

export const Menu = props => (
	<StaticQuery
		query={query}
		render={data => {
			const menu = safelyGetSiteConfig(data.sitePage).menu_nav || [];
			return (
				<Fragment>
					{menu.map((item, i) =>
						props.type === "second" ? (
							<Link
								variant="nav"
								to={item.url}
								key={i}
								style={{ textDecoration: `none` }}
							>
								{item.text}
							</Link>
						) : (
							<Link
								variant="nav"
								to={item.url}
								key={i}
								style={{ color: `white`, textDecoration: `none` }}
							>
								{item.text}
							</Link>
						)
					)}
				</Fragment>
			);
		}}
	/>
);
