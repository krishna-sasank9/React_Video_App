import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react'
import {Link} from "react-router-dom"
import {BiMenuAltLeft} from "react-icons/bi"


function Header() {
  
  const {isOpen,onClose,onOpen} =useDisclosure()  
    return (
    <>
      <Button
        size={'15'}
        pos={'fixed'}
        top={'3'}
        left={'3'}
        colorScheme="purple"
        zIndex={"overlay"}
        p={'0'}
        h={'7'}
        w={'7'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft />
      </Button>
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
          <DrawerOverlay/>
          <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader>VIDEO PLATFORM</DrawerHeader>
            <DrawerBody>
                <VStack alignItems={"flex-start"}>
                    <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                        <Link to={"/"}>Home</Link>
                    </Button>
                    <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                        <Link to={"/videos"}>Videos</Link>
                    </Button>
                    <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                        <Link to={"/videos?category=free"}>Free Video</Link>
                    </Button>
                    <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                        <Link to={"/upload"}>Upload Video</Link>
                    </Button>
                </VStack>
                <HStack pos={"absolute"} bottom={"8.5"} left={"1"} w={"full"} justifyContent={"space-around"}>
                    <Button onClick={onClose} colorScheme='purple'>
                        <Link to="/login">Log In</Link>
                    </Button>
                    <Button onClick={onClose} colorScheme='purple'  variant={"outline"}>
                        <Link to="/signup">Sign Up</Link>
                    </Button>
                </HStack>
            </DrawerBody>
          </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header