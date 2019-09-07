import { React, Component, Fragment } from "react"
import { Button } from "rebass"
import { connect } from "react-redux"
import hashicon from "hashicon"

import { updateWavesAddress } from "../store/actions"
import { navigate } from "gatsby"

function mapDisptchToProps(dispatch) {
	return {
		updateWavesAddress: wavesAddress =>
			dispatch(updateWavesAddress(wavesAddress)),
	}
}

function mapStateToProps(state) {
	return {
		wavesAddress: state.wavesAddress,
	}
}

class Auth extends Component {
	loginWithWavesKeeper = () => {
		if (typeof window !== `undefined`) {
			if (typeof window.Waves !== `undefined`) {
				this.Waves = window.Waves
			} else {
				navigate("/content/waves-keeper-install")
				return // stops function execution
			}
		}

		this.Waves.auth({
			name: "e-Rise.org",
			data: "Login on e-Rise.org",
			//icon:
			//	"https://docs.wavesplatform.com/_theme/brand-logo/waves-docs-logo.png",
		})
			.then(res => {
				this.props.updateWavesAddress(res.address)

				// data in variable res is shown below
				//{
				//  "data":"Waves Keeper",
				//  "prefix":"WavesWalletAuthentication",
				//  "host":"localhost",
				//  "name":"Waves Keeper",
				//  "icon":"https://docs.wavesplatform.com/_theme/brand-logo/waves-docs-logo.png",
				//  "timestamp":1543175910353,
				//  "address":"3PKqkMWvjjwjqbVSu8eL48dNfzWc3ifaaWi",
				//  "publicKey":"4WLcUznGiQXCoy2TnCohGKzDR8c14LFUGezvLNu7CVPA",
				//  "signature":"4s2nz8RxT29UwbJoNjPWxYwjsXYeoaMWK4dDM5eQN5gRmeZWGrN1HbpsirhTzWMJFAGtzzw4U78RNRKeEtwficwR"
				//}
			})
			.catch(function(err) {
				console.log(err)
			})
	}

	render() {
		return this.props.wavesAddress ? (
			<Fragment>
				<Button disabled variant="outline" title={this.props.wavesAddress}>
					<img
						width="26"
						height="26"
						alt={this.props.wavesAddress}
						title={this.props.wavesAddress}
						src={hashicon(this.props.wavesAddress).toDataURL()}
					/>{" "}
					Welcome!
					{/* <Box
						sx={{
							fontSize: "4pt",
						}}
					>
						{this.props.wavesAddress}
					</Box> */}
				</Button>
			</Fragment>
		) : (
			<Button variant="outline" onClick={this.loginWithWavesKeeper}>
				Login with Waves Keeper
			</Button>
		)
	}
}

export default connect(
	mapStateToProps,
	mapDisptchToProps
)(Auth)
