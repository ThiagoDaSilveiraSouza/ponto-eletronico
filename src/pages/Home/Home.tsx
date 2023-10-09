import { Grid } from "@radix-ui/themes";
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
    <Grid gap={"3"} columns={"4"}>
      {orderedUserList.map((currentUser) => (
        <UserCard user={currentUser} key={currentUser.id + currentUser.name} />
      ))}
    </Grid>
  );
};
