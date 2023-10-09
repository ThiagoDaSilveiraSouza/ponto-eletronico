import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import * as modals from "../components/ModalContainer/modals";

type ModalsContextProps = {
  [key in keyof typeof modals]: {
    modalOpenStatus: [boolean, Dispatch<SetStateAction<boolean>>];
    useCurrentItemId: [string, Dispatch<SetStateAction<string>>];
  };
};

export const ModalsContext = createContext<ModalsContextProps>(
  {} as ModalsContextProps
);

interface ModalsContextProviderProps {
  children: ReactNode;
}
export const ModalsContextProvider = ({
  children,
}: ModalsContextProviderProps) => {
  const updateModalProps = Object.keys(modals).reduce(
    (updateModalProps, currentKey) => {
      return {
        ...updateModalProps,
        [currentKey]: {
          modalOpenStatus: useState(false),
          useCurrentItemId: useState(""),
        },
      };
    },
    {} as ModalsContextProps
  );

  return (
    <ModalsContext.Provider value={updateModalProps}>
      {children}
    </ModalsContext.Provider>
  );
};
