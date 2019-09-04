import { UPDATE_WAVESADDRESS } from "./constants/action-types"

export function updateWavesAddress(payload) {
	return { type: UPDATE_WAVESADDRESS, payload }
}
