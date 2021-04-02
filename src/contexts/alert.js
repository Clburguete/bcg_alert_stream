import { createContext, useContext } from "react";

const AlertContext = createContext();

const {
  Provider: AlertProvider,
  Consumer: AlertConsumer
} = AlertContext;

const useAlert = () => {
  const context = useContext(AlertContext);
  return context;
}

export { AlertProvider, AlertConsumer, AlertContext, useAlert };
