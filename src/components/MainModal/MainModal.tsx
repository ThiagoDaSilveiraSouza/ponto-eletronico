import { ReactNode } from "react";
import { Card, Flex, Heading } from "@radix-ui/themes";
import { ReloadIcon } from "@radix-ui/react-icons";

interface MainModalProps {
  children: ReactNode;
  useModal: [boolean, (value: boolean) => void];
  isLoading?: boolean;
}

export const MainModal = ({
  children,
  useModal,
  isLoading = false,
}: MainModalProps) => {
  const [isOpen, setIsOpen] = useModal;

  return (
    <Flex
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        visibility: isOpen ? "visible" : "hidden",
        opacity: isOpen ? "1" : "0",
        transition: "0.3s",
      }}
      justify={"center"}
      align={"center"}
    >
      <div
        style={{ width: "100%", height: "100%", background: "rgba(0,0,0,0.8)" }}
        onClick={() => setIsOpen(false)}
      ></div>
      {isLoading ? (
        <Flex
          direction={"column"}
          align={"center"}
          justify={"center"}
          style={{ position: "absolute" }}
        >
          <ReloadIcon
            color="white"
            style={{
              width: "50px",
              height: "50px",
              animation: "logo-spin 1s linear infinite",
            }}
          />
          <Heading style={{ color: "white" }}>Carregando...</Heading>
        </Flex>
      ) : (
        <Card
          style={{
            position: "absolute",
            transform: isOpen ? "traslateX(0)" : "traslateX(-50%)",
            transition: "0.3s",
          }}
        >
          {children}
        </Card>
      )}
    </Flex>
  );
};
