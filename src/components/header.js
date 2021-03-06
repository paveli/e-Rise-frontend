// import PropTypes from "prop-types";
import { React, Fragment } from "react";
import { Flex, Box, Heading, Text, Image } from "rebass";

import { Menu } from "./menu.component";
import { Link } from "./link.component";
import Auth from "./auth";
import imageFile from "../images/hero-image@2x.png";

//<Box p={1} width={1}>
//					<Button variant='primary' style={{backgroundColor:'turquoise'}} mr={2}>Sign up with Waves Keeper</Button>
//				<Button variant='secondary' style={{backgroundColor:'white'}} mr={2}><Text color='blue'>Secondary</Text></Button>
//			</Box>

export const Header = ({ siteTitle }) => (
	<Fragment>
		<header
			style={{
				marginBottom: `1.45rem`,
				backgroundColor: "blue",
				width: "auto",
				height: "740px",
				fontColor: "white"
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
									color: `white`,
									textDecoration: `none`
								}}
							>
								{" "}
								{siteTitle}
							</Link>
						</Heading>
					</Box>
					<Box p={3} width={3 / 4} textAlign="right">
						<Menu /> {"  "} <Auth />
					</Box>
				</Flex>
				<Flex style={{ marginBottom: "80px", marginTop: "110px" }}>
					<Box p={3} width={1 / 2} style={{marginTop:"70px"}}>
						<Heading fontSize={[5, 6]} color="white">
							Where e-Residents go to raise funds
						</Heading>
						<Text fontSize={[2, 3, 4]} color="white">
							A global approach to fundraising and boosting businesses, built on blockchain.
						</Text>
					</Box>
					<Box p={3} width={1 / 2} style={{ textAlign: "center" }}>
						<Image
							src={imageFile}
							style={{ width: "350px", height: "350px" }}
						/>
					</Box>
				</Flex>
			</div>
		</header>
	</Fragment>
);
