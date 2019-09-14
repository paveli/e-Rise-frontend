import React, { Fragment } from "react";
import hashicon from "hashicon";
import { withFallback } from "../cms";
import { SEO, Heading, Header } from "../components";
import { Box, Flex, Text, Card } from "rebass";
import { AppLayout } from "../app-layout.component";
import { Link } from "../components/link.component";

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
// foreach jsx
//	{JSON.stringify(allProjects.allProjectsData)}
export const ProjectList = ({ pageContext: projects, itemKey: key }) => {
	return (
		<Box width={1 / 4} p={1}>
			<Card>
				<Flex>
					<Box width={1} p={1}>
						<center>
							{typeof document !== `undefined` ? (
								<img alt={key} title={key} src={hashicon(key).toDataURL()} />
							) : (
								""
							)}
						</center>
						<Heading fontSize={[3, 4]} color="primary">
							<Link to={"/projects/".concat(key)}>
								{projects.fundraiseName.value}
							</Link>
						</Heading>
						<Text>by: {projects.fundraiseDescription.value}</Text>
						<Text>
							<br />
							by: {projects.eResidentName.value}
						</Text>
					</Box>
				</Flex>
			</Card>
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
