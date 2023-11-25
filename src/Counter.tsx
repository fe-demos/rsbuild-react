import { useState } from 'react';

export function Counter() {
    const [count, setCount] = useState(0);
    const increase = () => setCount(count + 1);

    return (
        <div className="counter">
            <h2>Counter</h2>
            <button className="increase" onClick={increase}>
                +
            </button>
            <span className="count">{count}</span>
        </div>
    );
}
