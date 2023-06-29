'use client'

import { decrementBADDEAL, decrementGoodDeal, incrementBADDEAL, incrementGoodDeal } from "@/store/count/countActions"
import { IInitialState } from "@/type/redux/TypeCount"
import { useDispatch, useSelector } from "react-redux"

export default function Home() {
  const dispatch = useDispatch();
  const value: IInitialState = useSelector((state: any) => state.count)

  return (
    <div className="wrapper">
      <div className="grid">
          <p className="plus_1 why">Плюсовая</p>
          <p className="plus_2 count">{value.valueGoodDeal}</p>
          <button onClick={() => dispatch(incrementGoodDeal())} className="plus_3">+</button>
          <button onClick={() => value.valueGoodDeal > 0 ? dispatch(decrementGoodDeal()): null} className="plus_4">-</button>
          <h1 className="res_1 res">(0.08): <span className={value.commissionHard > 0 ? 'green' : "red"}>{value.commissionHard}</span>%</h1>
          <h1 className="res_2 res">(0.06): <span className={value.commissionMiddle > 0 ? 'green' : "red"}>{value.commissionMiddle}</span>%</h1>
          <h1 className="res_3 res">(0.04): <span className={value.commissionEasy > 0 ? 'green' : "red"}>{value.commissionEasy}</span>%</h1>
          <h1 className="res_4 res">(0.00): <span className={value.commissionNone > 0 ? 'green' : "red"}>{value.commissionNone}</span>%</h1>
          <p className="minus_1 why">Минусовая</p>
          <p className="minus_2 count">{value.valueBadDeal}</p>
          <button onClick={() => dispatch(incrementBADDEAL())} className="minus_3">+</button>
          <button onClick={() => value.valueBadDeal > 0 ?dispatch(decrementBADDEAL()): null} className="minus_4">-</button>
      </div>
    </div>
  );
}
