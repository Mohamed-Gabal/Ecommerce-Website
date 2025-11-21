import { createContext, useState } from "react";

export const shopContext = createContext();

import ProductData from "../../assets/Data";

const shopContextProvider = ({ children }) => {
  const [products, setProducts] = useState(ProductData);
  return (
    <shopContext.Provider value={{ products }}>{children}</shopContext.Provider>
  );
};
export default shopContextProvider;
