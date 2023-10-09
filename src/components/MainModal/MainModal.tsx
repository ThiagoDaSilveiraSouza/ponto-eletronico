import { ReactNode, Dispatch, SetStateAction } from "react";
import { Card, Flex } from "@radix-ui/themes";

interface MainModalProps {
  children: ReactNode;
  useModal: [boolean, Dispatch<SetStateAction<boolean>>];
}

export const MainModal = ({ children, useModal }: MainModalProps) => {
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
        transition: "0.3s",
      }}
      justify={"center"}
      align={"center"}
    >
      <div
        style={{ width: "100%", height: "100%", background: "rgba(0,0,0,0.8)" }}
        onClick={() => setIsOpen(false)}
      ></div>
      <Card
        style={{
          position: "absolute",
          transform: isOpen ? "traslateX(0)" : "traslateX(-50%)",
        }}
      >
        {children}
      </Card>
    </Flex>
  );
};
