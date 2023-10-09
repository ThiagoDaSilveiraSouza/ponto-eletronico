import { Card, Avatar, Heading, Flex } from "@radix-ui/themes";
import { IUser } from "../../../interfaces/IUser";
import { UseData, useModals } from "../../../../hooks";

interface UserCardProps {
  user: IUser;
}

export const UserCard = ({ user }: UserCardProps) => {
  const { AddTimeModal } = useModals();
  const { useCurrentItemId, modalOpenStatus } = AddTimeModal;
  const [, setCurrentUserId] = useCurrentItemId;
  const [, setAddTimeModalIsOpen] = modalOpenStatus;
  const firstLettersOfNames = user.name
    .split(" ")
    .map((currentName) => currentName.substring(0, 1).toUpperCase());

  const [firstLetter, secondLetter] = firstLettersOfNames;
  const avatarText = [firstLetter, secondLetter].join("");

  const cardHandlerClick = () => {
    setCurrentUserId(user.id);
    setAddTimeModalIsOpen(true);
  };

  return (
    <Card
      size={"3"}
      variant="classic"
      style={{ width: "250px", boxSizing: "border-box", cursor: "pointer" }}
      onClick={cardHandlerClick}
    >
      <Flex align={"center"} gap={"2"}>
        <Avatar fallback={avatarText} size={"4"} radius="full" />
        <Heading as={"h3"} size={"3"}>
          {user.name}
        </Heading>
      </Flex>
    </Card>
  );
};
