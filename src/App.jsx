import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`현재 count 값 : ${count}`);
  }, [count]);

  return (
    <div className="bg-red-100 text-center">
      <button onClick={() => setCount(count - 1)}>-</button>
      <span className="mx-4">{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default App;

//useEffect(() => {
//   if (count === 0) {
//    console.log("Hello, useEffect");
//  } else {
//    console.log(`count? ${count}`);
//  }
// }, [count]);
