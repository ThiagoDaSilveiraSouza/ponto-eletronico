import { UseData, useModals } from "../../../../hooks";
import { MainModal } from "../../../";
import { Button, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { IUser } from "../../../../pages/interfaces/IUser";

export const AddTimeModal = () => {
  const { AddTimeModal } = useModals();
  const { modalOpenStatus, useCurrentItemId } = AddTimeModal;
  const [currentUserId] = useCurrentItemId;
  const { getDataById } = UseData("userList");
  const [currentUser, setCurrentUser] = useState<IUser>();

  const updateCurrentUser = async () => {
    const currentUser = await getDataById(currentUserId);
    currentUser && setCurrentUser(currentUser);
  };

  useEffect(() => {
    updateCurrentUser();
  }, []);

  return (
    <MainModal useModal={modalOpenStatus}>
      <Text>
        Adicionar ponto para usuário <b>{currentUser?.name}?</b>
      </Text>
      <Button>Confirmar</Button>
      <Button>Cancelar</Button>
    </MainModal>
  );
};
