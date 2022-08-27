import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

export function ModalComponent({ isOpen, setIsOpen, data }) {
  const onClose = () => {
    setIsOpen(false);
  };

  console.log(data);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="/mens">Mens page</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            {data.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <img src={data.src} alt="" />
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
