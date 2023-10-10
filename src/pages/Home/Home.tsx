import { Flex } from "@radix-ui/themes";
import { userList } from "../../MocData/userList";
import { UserCard } from "./components";

export const Home = () => {
  const orderedUserList = userList.sort((currentUser, nextUser) => {
    if (currentUser.name < nextUser.name) {
      return -1;
    } else if (currentUser.name > nextUser.name) {
      return 1;
    }
    return 0;
  });
  return (
    <Flex wrap={"wrap"} gap={"2"} style={{ justifyContent: "space-evenly" }}>
      {orderedUserList.map((currentUser) => (
        <UserCard user={currentUser} key={currentUser.id + currentUser.name} />
      ))}
    </Flex>
  );
};
