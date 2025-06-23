"use client";

import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  const boxStyle = `p-4 rounded w-fit border ${
    count >= 10 ? "bg-green-200" : "bg-white"
  }`;

  useEffect(() => {
    console.log("count 변경됨", count);
  }, [count]);

  return (
    <div className={boxStyle}>
      <h2 className="text-xl font-bold">카운터</h2>
      <p className="my-2">현재 숫자: {count}</p>
      <div className="flex gap-2">
        <button
          onClick={() => {
            setCount(count - 1);
            console.log("버튼 클릭 시 count:", count);
          }}
          className="bg-red-300 px-2 py-1 rounded"
        >
          -1
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-300 px-2 py-1 rounded"
        >
          +1
        </button>
      </div>
    </div>
  );
}

export default Counter;
