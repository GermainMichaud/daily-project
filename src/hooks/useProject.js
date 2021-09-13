import { useState } from 'react';

export default function useProject(key, intialValue = []) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : intialValue;
    } catch (error) {
      console.error(error);
      return intialValue;
    }
  });

  const setValue = (value) => {
    try {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const time = date.toLocaleTimeString('fr');
      const stored = storedValue;
      const data = [
        ...stored,
        {
          id: Date.now(),
          year,
          month,
          day,
          time,
          value,
        },
      ];
      setStoredValue(data);
      window.localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
