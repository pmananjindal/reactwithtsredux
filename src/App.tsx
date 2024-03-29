import React,{FC} from "react";
import { useDispatch,useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators,State } from "./state";
const App:FC = ()=>{
  const dispatch = useDispatch();
  const {depositMoney,withdrawMoney,bankruptMoney} = bindActionCreators(actionCreators,dispatch)
  const amount = useSelector((state:State)=>state.bank)

  return(
    <div>
      <h1>{amount}</h1>
      <button onClick={()=> depositMoney(1000)}>Deposit</button>
      <button onClick={()=> withdrawMoney(500)}>Withdraw</button>
      <button onClick={()=> bankruptMoney()}>Bankrupt</button>
    </div>
    
  )
}
export default App;