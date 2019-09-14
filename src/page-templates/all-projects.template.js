import React, { Fragment } from "react"
import hashicon from "hashicon";
import { withFallback } from "../cms"
import { SEO, Heading } from "../components"
import { Box,Flex,Text,Card } from "rebass"
import { AppLayout } from "../app-layout.component"
import { Link } from "../components/link.component"

const title = "All projects"
const linkBasic = "/projects/";


export const AllProjectsTemplate = ({ pageContext: allProjects }) => {
	return (
		<article>
			<SEO title={withFallback(title, "")} />
			<Heading tag={1}>{title}</Heading>
			{JSON.stringify(allProjects.allProjectsData)}
			{Object.keys(allProjects.allProjectsData).map(item => {
				return <ProjectList pageContext={allProjects.allProjectsData[item]} itemKey={item}/>
			})}
		</article>
	)
}
// foreach jsx
//
export const ProjectList = ({ pageContext: projects, itemKey: key}) => {
	return (
		<Fragment>
		<Flex>
				<Box width={1/4} p={1}>
					<Card>
						<Flex>
							
							<Box width={1} p={1}>
								<center> <img alt={key} title={key} src={hashicon(key).toDataURL()} />	</center>
								<Heading fontSize={[3, 4]} color="primary">
									<Link to={'/projects/'.concat(key)} >{projects.fundraiseName.value}</Link>
								</Heading>
								<Text>
									by: {projects.fundraiseDescription.value}
								</Text>	
								<Text>
									by: {projects.eResidentName.value}
								</Text>	
							</Box>
						
						</Flex>
					</Card>
				</Box>
		</Flex>
		</Fragment>
		
	)
}
//<Link to={'/projects/'.concat(key)} >sdfsdfsdf</Link>

const AllProjects = ({ pageContext: allProjects }) => {
	return (
		<AppLayout>
			<AllProjectsTemplate pageContext={allProjects} />
		</AppLayout>
	)
}

export default AllProjects
