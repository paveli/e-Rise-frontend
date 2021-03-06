import React from "react";
import { navigate } from "gatsby";

import { Heading, SEO } from "../components";
import { RenderMarkdown } from "../core";
import {
	safelyGetFrontMatter,
	withFallback,
	CMS_SCOPE,
	CMS_COMPONENTS
} from "../cms";

export const HomePageTemplate = ({ title, sections }) => (
	<article>
		<SEO title={title} />
		{/* <Heading tag={1}>{title}</Heading>
		{withFallback(sections, []).map((section, i) => {
			return (
				<section key={i}>
					<h2>{section.title}</h2>
					<RenderMarkdown
						md={section.body}
						scope={CMS_SCOPE}
						components={CMS_COMPONENTS}
					/>
					<hr />
				</section>
			);
		})} */}
		{typeof window !== `undefined` ? navigate("/projects") : ""}
	</article>
);

const HomePage = ({ pageContext }) => {
	return (
		<HomePageTemplate
			{...safelyGetFrontMatter(pageContext)}
			isPreview={false}
		/>
	);
};

export default HomePage;
