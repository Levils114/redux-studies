import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { ActionTypes } from '../redux-old-school'
import { Action, Dispatch } from 'redux'
import { incrementAmount } from './features/counter/counter-slice'
import { RootState } from './store'

/* interface MapStateToProps{
  count: number;
}

interface DispatchToProps extends MapStateToProps{
  increment: () => void,
  incrementAmount: (amount: number) => void;
} */

function App() {
  const { value: count } = useSelector((state: RootState) => state.counter);
  console.log(count);
  const dispatch = useDispatch<Dispatch<Action<ActionTypes>>>();

  function handleClickButton(amount: number){
    //incrementAmount(2);
    //dispatch({ type: "counter/incrementAmount", payload: amount });
    dispatch(incrementAmount(2));
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => handleClickButton(2)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App;

/* function mapStateToProps(state: StateProps): MapStateToProps{
  return {
    count: state.counter.value
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action<ActionTypes>>){
  return {
    increment: () => dispatch({ type: "counter/increment" }),
    incrementAmount: (amount: number) => dispatch({ type: "counter/incrementAmount", payload: amount }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); */
