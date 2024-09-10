import { useState } from "react";

export const useLocalStorage = (key, initialValues)=>{

    const [state, setState]= useState(()=>{
        const persistedStateSerialized = localStorage.getItem(key)
        if(persistedStateSerialized){
           const persistedState = JSON.parse(persistedStateSerialized)
           return persistedState
        }
        return initialValues

    })

    const setLocalStorage = (value) => {
      // Проверяваме дали стойността е функция и ако е, я извикваме с текущото състояние
      if (typeof value === "function") {
        setState((prevState) => {
          const result = value(prevState); // Предаваме текущото състояние на функцията
          localStorage.setItem(key, JSON.stringify(result));
          return result;
        });
      } else {
        setState(value);
        localStorage.setItem(key, JSON.stringify(value));
      }
    };
   return [state, setLocalStorage]
}