import React from "react"

import { withFallback } from "../cms"
import { SEO, Heading } from "../components"
import { AppLayout } from "../app-layout.component"

const title = "All projects"

export const AllProjectsTemplate = ({ pageContext: allProjects }) => {
	return (
		<article>
			<SEO title={withFallback(title, "")} />
			<Heading tag={1}>{title}</Heading>
			{/* If children should be used instead of body, body will be empty, so it's safe to have both */}
			{JSON.stringify(allProjects)}
		</article>
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
