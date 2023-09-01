import "./styles.css";
import { useState } from "react";

export default function App() {
  const orderObj = { item: "apple", count: 0 };
  const [order, setOrder] = useState(orderObj);
  const changeName = (e) => {
    setOrder({ ...order, item: e.target.value });
  };
  const countUp = () => {
    setOrder({ ...order, count: order.count + 1 });
  };
  const countDown = () => {
    setOrder({ ...order, count: order.count - 1 });
  };

  return (
    <div className="App">
      <h3>Item: {order.item}</h3>
      <h3>Count: {order.count}</h3>
      <input type="text" onChange={changeName} />
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </div>
  );
}
