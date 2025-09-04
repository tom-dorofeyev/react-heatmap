import { createContext, useContext } from "react";
import { defaultServices, Services } from "./container";

export const ServiceContext = createContext<Services>(defaultServices);

export const useServices = () => useContext(ServiceContext);
