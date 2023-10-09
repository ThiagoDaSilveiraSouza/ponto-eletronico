import { useContext, useEffect } from "react";
import { MocDataContext } from "../contexts";
import { UseDataPayload } from "../interfaces";
import * as mocData from "../MocData";

type MocDataPropsKeys = keyof typeof mocData;

export const UseMocData = (mocDataName: MocDataPropsKeys) => {
  const mocContext = useContext(MocDataContext);
  const [dataList, setDataList] = mocContext[mocDataName];
  type itemType = (typeof dataList)[0];

  const timer = async (time = 1000) =>
    await new Promise((resolve) => setTimeout(resolve, time));

  useEffect(() => {
    const currentData = mocData[mocDataName];
    setDataList(currentData);
  }, []);

  return {
    dataList,
    addDataToList: async (newData: itemType) => {
      await timer();
      setDataList((prevState) => {
        return { ...prevState, newData };
      });
    },
    deleteDataFromList: async (dataId) => {
      await timer();
      setDataList((prevState) =>
        prevState.filter((currentItem) => currentItem.id !== dataId)
      );
    },
    updateDataFromList: async (updatedData) => {
      await timer();
      setDataList((prevState) =>
        prevState.map((currentItem) => {
          const isSameId = currentItem.id === updatedData.id;
          return isSameId ? updatedData : currentItem;
        })
      );
    },
    getDataById: async (dataId) => {
      await timer();
      const targeData = dataList.find(
        (currentData) => currentData.id === dataId
      );
      return targeData;
    },
  } as UseDataPayload<itemType>;
};
