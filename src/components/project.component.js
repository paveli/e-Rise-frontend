import React, { Fragment, useState, useEffect } from "react";
import { navigate } from "gatsby";
import { Flex, Box, Text, Heading, Button, Card } from "rebass";
import { Label, Input } from "@rebass/forms";
import { nodeInteraction } from "@waves/waves-transactions";
import hashicon from "hashicon";
import styled from "styled-components";
import { CheckShield } from "styled-icons/boxicons-regular/CheckShield";
import axios from "axios";
import moment from "moment";
import numeral from "numeral";

const startCalcDateBlock = 674950;
const startCalcDate = "14 Sep 2019";

const GreenCheckShield = styled(CheckShield)`
	color: green;
`;
// import Link from "./link.component"

const API_HOST = "https://nodes-testnet.wavesnodes.com";
const API_MATCHER_EUR =
	"https://matcher.wavesnodes.com/matcher/orderbook/WAVES/Gtb1WRznfchDnTh37ezoDTJ4wcoKaRsKqKjJjy7nm2zU/status";

const Project = ({ address, data }) => {
	let [currentHeightNum, setCurrentHeightNum] = useState();
	let [projectIcon, setProjectIcon] = useState();
	let [balance, setBalance] = useState(0);
	let [eurPrice, setEurPrice] = useState();
	let [wavesToSend, setWavesToSend] = useState();

	// const getFutureBlockDate = block => {
	// 	return moment(startCalcDate).add((block - startCalcDateBlock) / 1440);
	// };

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
			console.log("get balance :" + res);
		});
	};

	const updateWavesToSend = amount => {
		setWavesToSend(amount);
		console.log("amount: " + amount);
	};

	// For the purpose oh hackathon the price is x1000
	const hackathonMultiplier = 1000;
	const getEurPriceFromMatcher = async () => {
		await axios.get(API_MATCHER_EUR).then(res => {
			setEurPrice(hackathonMultiplier);
		});
	};
	// const getEurPriceFromMatcher = async () => {
	// 	await axios.get(API_MATCHER_EUR).then(res => {
	// 		setEurPrice((res.data.lastPrice / 100) * hackathonMultiplier);
	// 	});
	// };

	let Waves;

	const sendWaves = async amount => {
		if (typeof window !== `undefined`) {
			if (typeof window.Waves !== `undefined`) {
				Waves = window.Waves;
				// const state = await Waves.publicState();
				// const ts = invokeScript(
				// 	{
				// 		dApp: address,
				// 		call: {
				// 			function: "donate",
				// 			args: []
				// 		},
				// 		payment: [{ amount: 500000000 }]
				// 	},
				// 	state.account.publicKey
				// );
				// console.log(ts);

				Waves.signAndPublishTransaction({
					type: 16,
					data: {
						fee: {
							tokens: "0.05",
							assetId: "WAVES"
						},
						dApp: address,
						call: {
							function: "donate",
							args: []
						},
						payment: [{ assetId: "WAVES", tokens: wavesToSend }]
					}
				})
					.then(tx => {
						console.log(tx);
						setBalance(balance + parseInt(wavesToSend) * 100000000);
					})
					.catch(error => {
						console.error("Oooops. Something went wrong: ", error);
					});
			} else {
				navigate("/content/waves-keeper-install");
				return; // stops function execution
			}
		}
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
										? numeral(
												((balance / 100000000) * eurPrice).toFixed(0)
										  ).format("0,0")
										: ""}{" "}
									EUR
								</Heading>
								<Text>
									of{" "}
									{eurPrice
										? numeral(
												(data.fundraiseTargetWaves.value * eurPrice).toFixed(0)
										  ).format("0,0")
										: ""}{" "}
									EUR fundraise goal
								</Text>
								<Text fontSize={[1, 2]}>
									({numeral((balance / 100000000).toFixed(2)).format("0,0.00")}{" "}
									WAVES of{" "}
									{numeral(data.fundraiseTargetWaves.value).format("0,0.00")}{" "}
									WAVES)
								</Text>
								<br />
								<Text>
									Expiary date:{" "}
									{JSON.stringify(
										(data.fundraiseExpiryBlock.value - startCalcDateBlock) /
											1440 >
											0
									)
										? moment(startCalcDate)
												.add(
													(data.fundraiseExpiryBlock.value -
														startCalcDateBlock) /
														1440,
													"day"
												)
												.calendar()
										: moment(startCalcDate)
												.substract(
													(data.fundraiseExpiryBlock.value -
														startCalcDateBlock) /
														1440,
													"day"
												)
												.calendar()}
									{}
								</Text>

								{/* <Text>Current block: {currentHeightNum}</Text> */}
								<Text fontSize={[1, 2]}>
									(Current/Expiary blocks: {currentHeightNum}/
									{data.fundraiseExpiryBlock.value})
								</Text>
								<Label htmlFor="amount">Waves</Label>
								<Input
									id="amount"
									name="amount"
									type="number"
									sx={{
										width: 80
									}}
									onChange={evt => updateWavesToSend(evt.target.value)}
								/>
								<Button
									variant="primary"
									sx={{
										width: 200
									}}
									onClick={() => sendWaves(100)}
								>
									Support project
								</Button>
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
