import React from "react"

import { withFallback } from "../cms"
import { SEO, Heading } from "../components"
import Project from "../components/project.component"
import { AppLayout } from "../app-layout.component"

// TODO print unique title
const title = "Project"

export const ProjectTemplate = ({ pageContext: _Project }) => {
	return (
		<article>
			<SEO title={withFallback(title, "")} />
			<Heading tag={1}>{title}</Heading>
			{/* {JSON.stringify(_Project.project)} */}
			<Project address={_Project.project.key.split("_")[0]} />
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
