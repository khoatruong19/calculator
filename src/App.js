import { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Info from "./components/Info";
import Keyboard from "./components/Keyboard";
import { useThemeContext } from "./context/ThemeContext";


const Container = styled.div`
  ${tw`
    w-screen
    h-screen
    lg:flex
    lg:justify-center
    lg:items-center
  `}
  background-color: ${({theme}) => theme.mainBg} ; 
  
`

const Wrapper = tw.div`
    w-full
    h-full
    p-5
    lg:p-0
    lg:w-2/3
    lg:w-4/5
    lg:py-20
    xl:py-0
    xl:w-1/3
    xl:h-4/5
`

function App() {
  const {themeSelect, themeIndex, setThemeIndex} = useThemeContext()
  const theme = themeSelect
  const [result, setResult] = useState("")
  return (
    <Container theme={theme}>
      <Wrapper>
        <Info result={result}/>
        <Keyboard result={result} setResult={setResult}/>
      </Wrapper>
    </Container>
  );
}

export default App;
