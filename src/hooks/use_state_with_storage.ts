import { useState } from 'react';

export const useStateWithStorage = (init: string, key: string): [string, (s: string) => void] => {
  const [value, setValue] = useState<string>(localStorage.getItem(key) || init)
  // console.log(value)

  const setValueWithStorage = (nextValue: string): void => {
    // console.log(value)
    setValue(nextValue)
    localStorage.setItem(key, nextValue)
  }

  return [value, setValueWithStorage]
}
