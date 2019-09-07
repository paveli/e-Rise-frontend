import React, { Fragment, useState, useEffect } from "react"
import { nodeInteraction } from "@waves/waves-transactions"

const API_HOST = "https://nodes-testnet.wavesnodes.com"

const Project = ({ address }) => {
	const [addressData, setAddressData] = useState(0)

	const getProjectData = async projectAddress => {
		await nodeInteraction.accountData(projectAddress, API_HOST).then(res => {
			setAddressData(res)
		})
	}

	useEffect(() => {
		getProjectData(address)
	}, [])

	return (
		<Fragment>
			<div>{JSON.stringify(addressData)}</div>
		</Fragment>
	)
}

export default Project
