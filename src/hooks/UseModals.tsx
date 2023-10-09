import { useContext } from "react";
import { ModalsContext } from "../contexts";

export const useModals = () => {
  const modals = useContext(ModalsContext);

  return modals;
};
