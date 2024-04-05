import { useReducer, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { item, loading, error } = state;

  // ACTION CREATORS

  const onError = () => dispatch({ type: actionTypes.error });
  const onSuccess = (item) =>
    dispatch({ type: actionTypes.success, payload: item });
  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item });

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        onSuccess(parsedItem);
      } catch (error) {
        onError();
      }
    }, 500);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    onSave(newItem);
  };

  return { item, saveItem, loading, error };
}

const initialState = {
  error: false,
  loading: true,
  item: [],
};

const actionTypes = {
  error: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.error:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case actionTypes.success:
      return {
        ...state,
        item: action.payload,
        loading: false,
        error: false,
      };
    case actionTypes.save:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};

export { useLocalStorage };
