"use client"

import React, { ReactNode } from "react";
import { AppProvider } from "./AppContext";

function Providers({ children }: { children: ReactNode }) {
  return <AppProvider>{children}</AppProvider>;
}

export default Providers;
