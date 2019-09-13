import React from "react"

import { withFallback } from "../cms"
import { SEO, Heading } from "../components"
import { Box,Flex,Text } from "rebass"
import { AppLayout } from "../app-layout.component"
import { Link } from "../components/link.component"

const title = "All projects"
const linkBasic = "/projects/";

export const AllProjectsTemplate = ({ pageContext: allProjects }) => {
	return (
		<article>
			<SEO title={withFallback(title, "")} />
			<Heading tag={1}>{title}</Heading>
			// foreach jsx
			{JSON.stringify(allProjects.allProjectsData)}
			
			{Object.keys(allProjects.allProjectsData).map(item => {
				return <ProjectList pageContext={allProjects.allProjectsData[item]} itemKey={item}/>
			})}
		</article>
	)
}

export const ProjectList = ({ pageContext: projects, itemKey: key}) => {
	return (
		<Flex mx={-2}>
				<Box width={1/2} px={2}>
				<Text p={1} color='background' bg='primary'>
					{projects.eResidentName.value}
				</Text>
				</Box>
				<Box width={1/2} px={2}>
				<Text p={1} color='background' bg='primary'>
					{key}
				</Text>
				<Link to={'/projects/'.concat(key)} >sdfsdfsdf</Link>
				</Box>
				
				
		</Flex>
	)
}


const AllProjects = ({ pageContext: allProjects }) => {
	return (
		<AppLayout>
			<AllProjectsTemplate pageContext={allProjects} />
		</AppLayout>
	)
}

export default AllProjects
