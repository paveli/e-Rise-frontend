import React from "react";
import { Text, Box, Heading } from "rebass";

import { withFallback } from "../cms";
import { SEO } from "../components";
import Project from "../components/project.component";
import { AppLayout } from "../app-layout.component";

export const ProjectTemplate = ({ pageContext: _Project }) => {
	return (
		<article>
			<SEO title={withFallback(_Project.data.fundraiseName.value, "")} />

			<Box>
				<center>
					<Heading tag={1} color="black" fontSize={[5, 6]}>
						{_Project.data.fundraiseName.value}
					</Heading>
				</center>

				<Project address={_Project.address} data={_Project.data} />
			</Box>

			{/* {JSON.stringify(_Project)} */}
		</article>
	);
};

const ProjectPage = ({ pageContext: _Project }) => {
	return (
		<AppLayout>
			<ProjectTemplate pageContext={_Project} />
		</AppLayout>
	);
};

export default ProjectPage;
