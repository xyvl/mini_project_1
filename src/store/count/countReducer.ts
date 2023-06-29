import { IInitialState } from "@/type/redux/TypeCount";
import {
  INCREMENTGOODDEAL,
  DECREMENTBADDEAL,
  DECREMENTGOODDEAL,
  INCREMENTBADDEAL,
} from "./countActions";

const initialState: IInitialState = {
  valueGoodDeal: 0,
  valueBadDeal: 0,
  commissionHard: 0,
  commissionMiddle: 0,
  commissionEasy: 0,
  commissionNone: 0,
};

const coeffGood = 0.3
const coeffBad = 0.3

const p = (valueGoodDeal: number, valueBadDeal: number) => {
  return {
    commissionHard: (
      valueGoodDeal * coeffGood -
      valueBadDeal * coeffBad -
      (valueGoodDeal + valueBadDeal) * 0.08
    ).toFixed(2),

    commissionMiddle: (
      valueGoodDeal * coeffGood -
      valueBadDeal * coeffBad -
      (valueGoodDeal + valueBadDeal) * 0.06
    ).toFixed(2),

    commissionEasy: (
      valueGoodDeal * coeffGood -
      valueBadDeal * coeffBad -
      (valueGoodDeal + valueBadDeal) * 0.04
    ).toFixed(2),
    commissionNone: (valueGoodDeal * coeffGood - valueBadDeal * coeffBad).toFixed(2),
  };
};

export const count = (state = initialState, action: any) => {
  switch (action.type) {
    case INCREMENTGOODDEAL:
      return {
        valueGoodDeal: state.valueGoodDeal + 1,
        valueBadDeal: state.valueBadDeal,
        ...p(state.valueGoodDeal + 1, state.valueBadDeal),
      };
    case DECREMENTGOODDEAL:
      return {
        valueGoodDeal: state.valueGoodDeal - 1,
        valueBadDeal: state.valueBadDeal,
        ...p(state.valueGoodDeal - 1, state.valueBadDeal),
      };
    case INCREMENTBADDEAL:
      return {
        valueGoodDeal: state.valueGoodDeal,
        valueBadDeal: state.valueBadDeal + 1,
        ...p(state.valueGoodDeal, state.valueBadDeal + 1),
      };
    case DECREMENTBADDEAL:
      return {
        valueGoodDeal: state.valueGoodDeal,
        valueBadDeal: state.valueBadDeal - 1,
        ...p(state.valueGoodDeal, state.valueBadDeal - 1),
      };
    default:
      return state;
  }
};
