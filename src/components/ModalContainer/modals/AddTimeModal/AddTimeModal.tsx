import { UseData, useModals } from "../../../../hooks";
import { MainModal } from "../../../";
import { Button, Flex, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { IUser } from "../../../../interfaces";

export const AddTimeModal = () => {
  const { AddTimeModal } = useModals();
  const { modalOpenStatus, useCurrentItemId } = AddTimeModal;
  const [addTimeModalIsOpen, setAddTimeModalIsOpen] = modalOpenStatus;
  const [currentUserId, setCurrentUserId] = useCurrentItemId;
  const { getDataById } = UseData("userList");
  const [currentUser, setCurrentUser] = useState<IUser>();

  const updateCurrentUser = async () => {
    if (!!currentUserId) {
      const currentUser = await getDataById(currentUserId);
      currentUser && setCurrentUser(currentUser);
    } else {
      setCurrentUser(undefined);
    }
  };

  const confirmButtonHandlerClick = async () => {
    setCurrentUser(undefined);
  };

  useEffect(() => {
    updateCurrentUser();
  }, [currentUserId]);

  useEffect(() => {
    if (!addTimeModalIsOpen) {
      setCurrentUserId("");
    }
  }, [addTimeModalIsOpen]);

  return (
    <MainModal useModal={modalOpenStatus} isLoading={!currentUser}>
      <Text>
        Adicionar ponto para usuário <b>{currentUser?.name}?</b>
      </Text>
      <Flex justify={"center"} gap={"2"}>
        <Button color="jade" onClick={confirmButtonHandlerClick}>
          Confirmar
        </Button>
        <Button color="ruby">Cancelar</Button>
      </Flex>
    </MainModal>
  );
};
