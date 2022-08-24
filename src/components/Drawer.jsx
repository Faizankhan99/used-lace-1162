import styles from "../components/Nav.module.css";
 import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Text
  } from '@chakra-ui/react'   
import { useRef } from 'react'


export function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Open
            </Button>

        <div className={styles.draw}>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
         finalFocusRef={btnRef}
    
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
                    <DrawerHeader>
                        
                    
                    </DrawerHeader>
  
            <DrawerBody>
             
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
            </DrawerFooter>
          </DrawerContent>
                </Drawer>
                
                </div>
      </>
    )
  }