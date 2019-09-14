import React, { Fragment } from "react";
import hashicon from "hashicon";
import { withFallback } from "../cms";
import { SEO, Heading, Header } from "../components";
import { Box, Flex, Text, Card } from "rebass";
import { AppLayout } from "../app-layout.component";
import { Link } from "../components/link.component";
import ReadMoreReact from 'read-more-react';

const title = "All projects";
const linkBasic = "/projects/";


export const AllProjectsTemplate = ({ pageContext: allProjects }) => {
	return (
		<article>
			<SEO title={withFallback(title, "")} />
			<Fragment>
				<Flex>
					{Object.keys(allProjects.allProjectsData).map(item => {
						return (
							<ProjectList
								pageContext={allProjects.allProjectsData[item]}
								itemKey={item}
							/>
						);
					})}
				</Flex>
			</Fragment>
		</article>
	);
};

//export const readMoreText1 = () => {
//	 render() {
//		return (
//			<b>asdasdads</b>
//		);
//	 }
//};
// foreach jsx
//	{JSON.stringify(allProjects.allProjectsData)}
export const ProjectList = ({ pageContext: projects, itemKey: key }) => {
	return (
		<Box width={1 / 3} p={1} style={{marginRight:'1%'}}>
			<Flex>
				<Box width={1} p={1} >
					<Card style={{textAlign:'center', border:'2px Solid #DBDAE2', backgroundColor:'rgb(240,240,240)'}}>
						<div>
							{typeof document !== `undefined` ? (
								<img alt={key} title={key} src={hashicon(key).toDataURL()} />
							) : (
								""
							)}
						</div>
					</Card>
					<Card style={{marginBottom:'30px'}}>
						<Heading fontSize={[3, 4]} color="primary">
							<Link to={"/projects/".concat(key)}>
								<div style={{display:'inline',color:'#000000',fontWeight:'bold'}}>{projects.fundraiseName.value}</div>
							</Link>
						</Heading>
						<Text>
							<div style={{fontFamily: 'Helvetica', color: '#000000', fontsize:'16px', fontWeight:'regular', marginBottom:'20px'}}>
								<ReadMoreReact text={projects.fundraiseDescription.value} style={{fontWeight:'bold'}}></ReadMoreReact>
							</div>
						</Text>
						<Text>
							<div style={{color: '#000000', fontsize:'16px', fontWeight:'bold'}}>
								by: {projects.eResidentName.value}
							</div>
						</Text>
					</Card>
				</Box>
			</Flex>
		</Box>
	);
};
//<Link to={'/projects/'.concat(key)} >sdfsdfsdf</Link>

const AllProjects = ({ pageContext: allProjects }) => {
	return (
		<AppLayout>
			<AllProjectsTemplate pageContext={allProjects} />
		</AppLayout>
	);
};



export default AllProjects;
