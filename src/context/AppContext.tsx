"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface AppContextType {
  showSidebar: boolean;
  tableSearch: boolean;
  toggleSidebar: () => void;
  showTableSearch: () => void;
  hideTableSearch: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [showSidebar, setSidebar] = useState<boolean>(false);
  const [tableSearch, setTableSearch] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };

  const showTableSearch = () => {
    setTableSearch(true);
  };

  const hideTableSearch = () => {
    setTableSearch(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebar(true);
      } else {
        setSidebar(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        hideTableSearch();
      } else {
        showTableSearch();
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setSidebar(false);
    }
  }, [pathname]);

  return (
    <AppContext.Provider
      value={{
        showSidebar,
        toggleSidebar,
        tableSearch,
        showTableSearch,
        hideTableSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within a UI Provider");
  }

  return context;
};
