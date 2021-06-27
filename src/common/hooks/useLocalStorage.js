import { useState, useEffect } from 'react';

export function useLocalStorage(key, defaultValue = {}) {
  const [value, _setValue] = useState(
    JSON.parse(localStorage.getItem(key)) || defaultValue
  );

  useEffect(() => {
    if (!localStorage[key]) {
      localStorage[key] = JSON.stringify(defaultValue);
    }
  }, [key, defaultValue]);

  function setValue(value) {
    localStorage[key] = JSON.stringify(value);
    _setValue(value);
  }

  function remove() {
    localStorage.removeItem(key);
  }

  return [value, setValue, remove];
}
