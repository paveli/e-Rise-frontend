import PropTypes from "prop-types";
import { React, Fragment } from "react";
import { Flex, Box, Heading, Text, Button, Image } from "rebass";

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
<<<<<<< HEAD
				backgroundColor: "blue",
				width: "auto",
				height: "auto",
				fontColor: "white"
			}}
		>
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
				<Flex>
					<Box p={3} width={1 / 2}>
						<Heading fontSize={[5, 6]} color="white">
							Where e-Residents and fundraising meet
						</Heading>
						<Text fontSize={[3, 4, 5]} color="white">
							A global platform, where all e-residents meet, share great ideas
							and donation takes place
						</Text>
					</Box>
					<Box p={3} width={1 / 2} style={{ textAlign: "center" }}>
						<Image
							src={imageFile}
							style={{ width: "256px", height: "256px" }}
						/>
					</Box>
				</Flex>
			</div>
=======
				backgroundColor: 'blue',
				width:'auto',
				height:'540px',
				fontColor:'white'
			}}
		>
		<div style={{marginRight: '10%',marginLeft: '10%'}}>
			<Flex>
				<Box p={3} width={1 / 4} color="white">
					<Heading fontSize={[5, 6]} color="primary">
						<Link
							to="/"
							style={{
								color: `white`,
								textDecoration: `none`,
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
			<Flex style={{marginBottom:'80px',marginTop:'80px'}}>
				<Box p={3} width={1 / 2}>
					<Heading fontSize={[5, 6]} color="white">
						Where e-Residents and fundraising meet
					</Heading>
					<Text fontSize={[ 2, 3, 4 ]} color='white'>A global platform, where all e-residents meet, share great ideas and donation takes place</Text>
					
				</Box>
				<Box p={3} width={1 / 2} style={{textAlign:'center'}}>
					<Image src={imageFile} style={{width:'256px', height:'256px' }}/>
				</Box>
			</Flex>
		</div>
>>>>>>> de5aacd3430a40c15acd1210db59780a6ac3425a
		</header>
	</Fragment>
);
