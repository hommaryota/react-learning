import {Button, ChakraProvider} from "@chakra-ui/react";
import "./App.css";

export default function App() {
  return (
    <ChakraProvider>
      <Button colorScheme="teal">ボタン</Button>
    </ChakraProvider>
  );
}
