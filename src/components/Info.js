import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useThemeContext } from '../context/ThemeContext'
import Circle from "../images/red-circle.png"

const Wrapper = tw.div`
    pt-5
    lg:pt-0
    w-full
    h-1/3
    flex
    flex-col
    gap-7
    lg:gap-10
`

const Text = styled.h2`
    color: ${({theme}) => theme.text}};
`

const NumberContainer = tw.div`
    flex
    w-24
    items-center
    justify-between
    px-1
    absolute
    left-2
    -top-6
`

const IconContainer = tw.div`
    w-12
    h-9
    flex
    justify-center
    items-center
    cursor-pointer
   
`

const CircleIcon = tw.img`
    w-10
    h-8
`

const ToggleButton = styled.div`
    ${tw`
        h-9
        w-28
        rounded-3xl
        flex
        items-center
        relative
    `}
    background-color: ${({theme}) => theme.keyPad}}
    
`

const ThemeToggleContainer = tw.div`
    flex
    items-center
    gap-5
    lg:gap-10
`

const InfoContainer = tw.div`
    flex
    w-full
    items-center
    justify-between
`

const Screen = styled.div`
    ${tw`
        w-full
        h-24
        md:h-32
        p-3
        rounded-lg
        flex
        items-center
        justify-end
        text-3xl
        lg:text-5xl
        font-semibold
        shadow-md
    `}
    background-color: ${({theme}) => theme.screen}}
    color: ${({theme}) => theme.text}}
`

const Info = ({result}) => {
    const {themeSelect : theme, setThemeIndex, themeIndex} = useThemeContext()
    return (
        <Wrapper>
            <InfoContainer>
                <Text theme={theme} className="font-semibold text-4xl">calc</Text>
                <ThemeToggleContainer>
                    <Text theme={theme} className="text-sm tracking-widest lg:text-base">THEME</Text>
                    <ToggleButton theme={theme}>
                        <IconContainer onClick={() => setThemeIndex(0)}>{themeIndex === 0 && <CircleIcon alt='icon' src={Circle}/>}</IconContainer>
                        <IconContainer onClick={() => setThemeIndex(1)}>{themeIndex === 1 && <CircleIcon alt='icon' src={Circle}/>}</IconContainer>
                        <IconContainer onClick={() => setThemeIndex(2)}>{themeIndex === 2 && <CircleIcon alt='icon' src={Circle}/>}</IconContainer>
                        <NumberContainer>
                            <Text className="text-xs font-semibold lg:text-base" theme={theme}>1</Text>
                            <Text className="text-xs font-semibold lg:text-base" theme={theme}>2</Text>
                            <Text className="text-xs font-semibold lg:text-base" theme={theme}>3</Text>
                        </NumberContainer>
                    </ToggleButton>
                </ThemeToggleContainer>
            </InfoContainer>
            <Screen theme={theme}>{result}</Screen>
        </Wrapper>
    )
}

export default Info
