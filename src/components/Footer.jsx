import React from 'react'
import {Box, Button, HStack, Heading, Stack, VStack,Input,Text} from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai'
function Footer() {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={"stretch"} w={"full"} p={"4"}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={"center"}>
            Subscribe to the Channel
          </Heading>
          <HStack borderBottom={"2px solid white"} p={"2"}>
            <Input
              placeholder="Enter Mail"
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
            />
            <Button
              p={'0'}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
              focusBorderColor={'none'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack w="full" borderLeft={["none","1px solid white"]} borderRight={["none","1px solid white"]}>
        <Heading textTransform={"uppercase"} textAlign={"center"} >VIDEO PLATFORM</Heading>
            <Text>All rights reserved</Text>
        </VStack>
        <VStack w="full">
            <Heading size={"md"} textTransform={"uppercase"}>Social Media</Heading>
            <Button variant={"link"} colorScheme='whitealpha'>
                <a href='https://www.instagram.com/krishna_sasank_9/'>Instagram</a>
            </Button>
        </VStack>
      </Stack>
    </Box>
  );
}

export default Footer