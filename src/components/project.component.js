import React, { Fragment, useState, useEffect } from "react"
import { Flex, Box, Text, Heading, Button, Card } from "rebass"
import { nodeInteraction } from "@waves/waves-transactions"
import hashicon from "hashicon"

import Link from "./link.component"

const API_HOST = "https://nodes-testnet.wavesnodes.com"

const Project = ({ address, data }) => {
	const [currentHeightNum, setCurrentHeightNum] = useState()

	const getCurrentHeightNum = async () => {
		await nodeInteraction.currentHeight(API_HOST).then(res => {
			setCurrentHeightNum(res)
		})
	}

	useEffect(() => {
		getCurrentHeightNum()
	}, [])

	return (
		<Fragment>
			<Flex>
				<Box width={1} p={1}>
					<Card>
						<Flex>
							<Box>
								<img src={hashicon(address).toDataURL()} />
								<Text>
									by: {data.eResidentName.value} (e-Resident personal code:{" "}
									{data.eResidentPersonalCode.value})
								</Text>
							</Box>
							<Box>
								<Heading fontSize={[3, 4]} color="primary">
									0 WAVES
								</Heading>
								<Text>
									of {data.fundraiseTargetWaves.value} WAVES fundraise goal
								</Text>
								<Text>Current block: {currentHeightNum}</Text>
								<Text>
									Expiary block:
									{data.fundraiseExpiryBlock.value}
								</Text>
								<Button variant="primary">Support project</Button>
							</Box>
						</Flex>
					</Card>

					<Heading fontSize={[3, 4]} color="primary">
						About project:
					</Heading>
					<Text>{data.fundraiseDescription.value}</Text>
					<br />
					<Heading fontSize={[3, 4]} color="primary">
						Blockchain data:
					</Heading>
					<Text>
						Project approved: <br />
						Smart contract address: <br />
						Smart contract code: verified e-Rise v1 <br />
						See transactions: <br />
					</Text>
				</Box>
			</Flex>
			{/* <div>{JSON.stringify(address)}</div>
			<div>{JSON.stringify(data)}</div> */}
		</Fragment>
	)
}

export default Project
