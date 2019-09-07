const WT = require("@waves/waves-transactions")

const ORACLE_ADDRESS = "3N8QtDWHjwjE6uuwEXyKf3kRVkC8sjvV8EY"
const API_HOST = "https://nodes-testnet.wavesnodes.com"

exports.createPages = async ({ actions: { createPage } }) => {
	const allProjects = await WT.nodeInteraction
		.accountData(ORACLE_ADDRESS, API_HOST)
		.then(res => {
			return res
		})

	// Create a page that lists all Projects.
	createPage({
		path: `/projects/`,
		component: require.resolve("./src/page-templates/all-projects.template.js"),
		context: { allProjects },
	})

	// Create a page for each Project.
	Object.values(allProjects).forEach(project => {
		createPage({
			path: `/projects/${project.key.split("_")[0]}/`,
			component: require.resolve("./src/page-templates/project.template.js"),
			context: { project },
		})
	})
}
