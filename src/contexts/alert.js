import { createContext } from "react";

const AlertContext = createContext();

const {
  Provider: AlertProvider,
  Consumer: AlertConsumer
} = AlertContext;

export { AlertProvider, AlertConsumer, AlertContext };
