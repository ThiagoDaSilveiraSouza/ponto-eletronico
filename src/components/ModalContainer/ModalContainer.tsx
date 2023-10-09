import * as modals from "./modals";

export const ModalContainer = () =>
  Object.values(modals).map((ModalComponent, index) => {
    return <ModalComponent key={index} />;
  });
