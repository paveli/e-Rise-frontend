const WT = require("@waves/waves-transactions")

const ORACLE_ADDRESS = "3N8QtDWHjwjE6uuwEXyKf3kRVkC8sjvV8EY"
const API_HOST = "https://nodes-testnet.wavesnodes.com"

const asyncForEach = async (array, callback) => {
	for (let index = 0; index < array.length; index++) {
		await callback(array[index], index, array)
	}
}

exports.createPages = async ({ actions: { createPage } }) => {
	const allProjects = await WT.nodeInteraction
		.accountData(ORACLE_ADDRESS, API_HOST)
		.then(res => {
			return res
		})

	let getAllProjectsData = async allProjects => {
		let allProjectsData = {}
		const allProjectsArray = Object.values(allProjects)
		await asyncForEach(allProjectsArray, async project => {
			let address = project.key.split("_")[0]
			await WT.nodeInteraction.accountData(address, API_HOST).then(res => {
				allProjectsData = {
					...allProjectsData,
					[address]: res,
				}
			})
		})
		return allProjectsData
	}

	const allProjectsData = await getAllProjectsData(allProjects)

	// Create a page that lists all Projects.
	createPage({
		path: `/projects/`,
		component: require.resolve("./src/page-templates/all-projects.template.js"),
		context: { allProjectsData },
	})

	// Create a page for each Project.
	const allProjectsArray = Object.values(allProjects)
	await asyncForEach(allProjectsArray, async project => {
		let address = project.key.split("_")[0]
		await WT.nodeInteraction.accountData(address, API_HOST).then(res => {
			createPage({
				path: `/projects/${address}/`,
				component: require.resolve("./src/page-templates/project.template.js"),
				context: { address: address, data: res },
			})
		})
	})
}
