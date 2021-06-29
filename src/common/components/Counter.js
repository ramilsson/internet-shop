import React from 'react';
import './Counter.scss';

export function Counter({ name, value, onChange }) {
  function increment() {
    onChange(name, value + 1);
  }

  function decrement() {
    onChange(name, value - 1);
  }

  return (
    <div className="counter">
      <button onClick={decrement} className="button">
        –
      </button>
      <input
        name={name}
        className="counter__input"
        value={value}
        readOnly={true}
      />
      <button onClick={increment} className="button">
        +
      </button>
    </div>
  );
}
