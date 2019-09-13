import React, { Fragment, useState, useEffect } from "react";
import { Flex, Box, Text, Heading, Button, Card } from "rebass";
import { nodeInteraction } from "@waves/waves-transactions";
import hashicon from "hashicon";
import styled from "styled-components";
import { CheckShield } from "styled-icons/boxicons-regular/CheckShield";
import axios from "axios";
import moment from "moment";

const startCalcDateBlock = 674950;
const startCalcDate = "14 Sep 2019";

const GreenCheckShield = styled(CheckShield)`
	color: green;
`;
// import Link from "./link.component"

const API_HOST = "https://nodes-testnet.wavesnodes.com";
const API_MATCHER_EUR =
	"http://matcher.wavesnodes.com/matcher/orderbook/WAVES/Gtb1WRznfchDnTh37ezoDTJ4wcoKaRsKqKjJjy7nm2zU/status";

const Project = ({ address, data }) => {
	const [currentHeightNum, setCurrentHeightNum] = useState();
	const [projectIcon, setProjectIcon] = useState();
	const [balance, setBalance] = useState(0);
	const [eurPrice, setEurPrice] = useState();

	const getFutureBlockDate = block => {
		return moment(startCalcDate).add((block - startCalcDateBlock) / 1440);
	};

	const getCurrentHeightNum = async () => {
		await nodeInteraction.currentHeight(API_HOST).then(res => {
			setCurrentHeightNum(res);
		});
	};

	const getProjectIcon = async address => {
		setProjectIcon(await hashicon(address).toDataURL());
	};

	const getBalance = async address => {
		await nodeInteraction.balance(address, API_HOST).then(res => {
			setBalance(res);
		});
	};

	const getEurPriceFromMatcher = async () => {
		await axios.get(API_MATCHER_EUR).then(res => {
			setEurPrice(res.data.lastPrice / 100);
		});
	};

	useEffect(() => {
		getCurrentHeightNum();
	}, []);

	useEffect(() => {
		getProjectIcon(address);
	}, []);

	useEffect(() => {
		getBalance(address);
	}, []);

	useEffect(() => {
		getEurPriceFromMatcher();
	}, []);

	return (
		<Fragment>
			<Flex>
				<Box width={1} p={1}>
					<Card>
						<Flex>
							<Box>
								<img alt={address} title={address} src={projectIcon} />
								<Text>
									by: {data.eResidentName.value} (e-Resident personal code:{" "}
									{data.eResidentPersonalCode.value})
								</Text>
							</Box>
							<Box>
								<Heading fontSize={[3, 4]} color="primary">
									{eurPrice
										? ((balance / 100000000) * eurPrice).toFixed(2)
										: ""}{" "}
									EUR
								</Heading>
								<Text>
									of{" "}
									{eurPrice
										? (data.fundraiseTargetWaves.value * eurPrice).toFixed(2)
										: ""}{" "}
									EUR fundraise goal
								</Text>
								<Text>
									({(balance / 100000000).toFixed(2)} WAVES of{" "}
									{data.fundraiseTargetWaves.value} WAVES)
								</Text>
								{/* <Text>Current block: {currentHeightNum}</Text> */}
								{/* <Text>
									Expiary date:
									{JSON.stringify(
										moment(startCalcDate, "YYYYMMDD").calendar()
										)
									)}
									{(data.fundraiseExpiryBlock.value - startCalcDateBlock) /
										1440}
								</Text> */}
								<Text>
									(Expiary block:
									{data.fundraiseExpiryBlock.value})
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
						Project approved: <GreenCheckShield size="25" /> yes
						<br />
						Smart contract address:{" "}
						<a href={"https://wavesexplorer.com/testnet/address/" + address}>
							{address}
						</a>
						<br />
						Smart contract code: <GreenCheckShield size="25" /> verified e-Rise
						smart contract v1.0 <br />
						Current block: {currentHeightNum}, expiary block:{" "}
						{data.fundraiseExpiryBlock.value}
					</Text>
				</Box>
			</Flex>
			{/* <div>{JSON.stringify(address)}</div>
			<div>{JSON.stringify(data)}</div> */}
		</Fragment>
	);
};

export default Project;
