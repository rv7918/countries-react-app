import { createContext, useState, useMemo, ReactNode, useEffect } from "react";
import { Country } from "../components/grid/Grid.interface";

interface IContext {
  addedItems: Country[];
  setAddedItems: React.Dispatch<React.SetStateAction<Country[]>>;
}

export const DataContext = createContext<IContext>({
  addedItems: [],
  setAddedItems: () => {},
});

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [addedItems, setAddedItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("favourites")) ?? [];
    setAddedItems(storedItems);
  }, []);

  const value = useMemo(() => {
    return {
      addedItems,
      setAddedItems,
    };
  }, [setAddedItems, addedItems]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
