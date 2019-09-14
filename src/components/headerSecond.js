import PropTypes from "prop-types";
import { React, Fragment } from "react";
import { Flex, Box, Heading } from "rebass";

import { Menu } from "./menu.component";
import { Link } from "./link.component";
import Auth from "./auth";

export const HeaderSecond = ({ siteTitle }) => (
	<Fragment>
		<header
			style={{
				marginBottom: `1.45rem`,
				width: "auto",
				height: "auto"
			}}
		>
			<br />
			<div style={{ marginRight: "10%", marginLeft: "10%" }}>
				<Flex>
					<Box p={3} width={1 / 4} color="white">
						<Heading fontSize={[5, 6]} color="primary">
							<Link
								to="/"
								style={{
									color: `#0000F0`,
									textDecoration: `none`
								}}
							>
								{" "}
								{siteTitle}
							</Link>
						</Heading>
					</Box>
					<Box p={3} width={3 / 4} textAlign="right">
						<Menu type="second" /> {"  "} <Auth />
					</Box>
				</Flex>
			</div>
		</header>
	</Fragment>
);

HeaderSecond.propTypes = {
	siteTitle: PropTypes.string
};

HeaderSecond.defaultProps = {
	siteTitle: ``
};
