export interface UseDataPayload<T> {
  dataList: T[],
  addDataToList: (newData: T) => Promise<void>,
  deleteDataFromList: (dataId: string) => Promise<void>
  updateDataFromList: (updatedData: T) => Promise<void>
  getDataById: (dataId: string | undefined) => Promise<T | undefined>
}