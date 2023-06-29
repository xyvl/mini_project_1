export const INCREMENTGOODDEAL = "INCREMENTGOODDEAL"
export const DECREMENTGOODDEAL = "DECREMENTGOODDEAL"
export const INCREMENTBADDEAL = "INCREMENTBADDEAL"
export const DECREMENTBADDEAL = "DECREMENTBADDEAL"

export const incrementGoodDeal = () => {
	return {
		type: INCREMENTGOODDEAL
	}
}
export const decrementGoodDeal = () => {
	return {
		type: DECREMENTGOODDEAL
	}
}
export const incrementBADDEAL = () => {
	return {
		type: INCREMENTBADDEAL
	}
}
export const decrementBADDEAL = () => {
	return {
		type: DECREMENTBADDEAL
	}
}