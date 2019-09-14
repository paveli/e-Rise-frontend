import React from "react"

import { withFallback } from "../cms"
import { SEO, Heading } from "../components"
import Project from "../components/project.component"
import { AppLayout } from "../app-layout.component"

export const ProjectTemplate = ({ pageContext: _Project }) => {
	return (

		<article>
			<SEO title={withFallback(_Project.data.fundraiseName.value, "")} />
			<Heading tag={1}>{_Project.data.fundraiseName.value}</Heading>
			{/* {JSON.stringify(_Project)} */}
			<Project address={_Project.address} data={_Project.data} />
		</article>
	)
}

const ProjectPage = ({ pageContext: _Project }) => {
	return (
		<AppLayout>
			<ProjectTemplate pageContext={_Project} />
		</AppLayout>
	)
}

export default ProjectPage
