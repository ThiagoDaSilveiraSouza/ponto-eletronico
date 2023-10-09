import {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import * as MocData from "../MocData";

type MocDataContextProps = {
  [key in keyof typeof MocData]: [
    (typeof MocData)[key],
    Dispatch<SetStateAction<(typeof MocData)[key]>>
  ];
};

export const MocDataContext = createContext<MocDataContextProps>(
  {} as MocDataContextProps
);

interface MocDataProviderProps {
  children: ReactNode;
}
export const MocDataProvider = ({ children }: MocDataProviderProps) => {
  const updatedMocDataContextProps = Object.entries(MocData).reduce(
    (updatedMocDataContextProps, [currentKey, currentValue]) => {
      return {
        ...updatedMocDataContextProps,
        [currentKey]: useState<typeof currentValue>([]),
      };
    },
    {} as MocDataContextProps
  );
  return (
    <MocDataContext.Provider value={updatedMocDataContextProps}>
      {children}
    </MocDataContext.Provider>
  );
};
