import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from './counterSlice';

const Counter = () => {
    const count = useSelector((state) => {
        console.log('state', state);
        console.log('state.counter', state.counter);

        return state.counter.count
    });
    const dispatch = useDispatch();
  return (
    <div>
      <section>
        <p>{count}</p>
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
      </section>
    </div>
  )
}

export default Counter
