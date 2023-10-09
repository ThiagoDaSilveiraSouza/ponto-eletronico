import { UseMocData } from "./UseMocData";
import * as mocData from "../MocData";

type MocDataPropsKeys = keyof typeof mocData;
export const UseData = (dataName: MocDataPropsKeys) => {
  const mocData = UseMocData(dataName);
  return mocData;
};
