import { useState } from 'react';

export default function useProjects(key, initialValue = []) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const items = window.localStorage.getItem(key);
      return items ? JSON.parse(items) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const data = [...storedValue, { id: Date.now(), name: value }];
      setStoredValue(data);
      window.localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  };

  const remove = (id) => {
    try {
      const element = [...storedValue].find((value) => value.id === id);
      const data = [...storedValue].filter((value) => value.id !== id);
      setStoredValue(data);
      window.localStorage.setItem(key, JSON.stringify(data));
      window.localStorage.removeItem(element.name);
    } catch (error) {
      console.error(error);
    }
  };

  return { storedValue, setValue, remove };
}
