import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { theme } from 'twin.macro'
import { useThemeContext } from '../context/ThemeContext'

const keys = ["7","8","9","DEL","4","5","6","+","1","2","3","-",".","0","/","x"]

const Container = styled.div`
    flex
    justify-center
    items-center
    w-full
    h-2/3
`

const Wrapper = styled.div`
    ${tw`
        lg:-mt-4
        lg:pt-0
        w-full
        h-full
        flex
        flex-col
        rounded-lg
        gap-4
        p-5
        lg:py-4
        shadow-lg

    `}
    background-color: ${({theme}) => theme.keyPad}}
`

const PrimaryKey = styled.div`
    ${tw`
        w-full
        h-full
        flex
        justify-center
        items-center
        rounded-xl
        text-2xl
        lg:text-4xl
        shadow-lg
        cursor-pointer
        hover:opacity-75
        font-semibold
        py-4
        lg:py-5
    `}
    background-color: ${({theme}) => theme.keyBg}}
    color: ${({theme}) => theme.resetDeleteText}}

`

const DelAndResKey = styled.div`
    ${tw`
        w-full
        h-full
        text-center
        flex
        justify-center
        items-center
        rounded-xl
        font-semibold
        lg:text-xl
        text-lg
        shadow-lg
        cursor-pointer
        hover:opacity-75
        py-4

    `}
    background-color: ${({theme}) => theme.resetDeleteBg}}
    color: ${({theme}) => theme.resetDeleteText}}
`

const EqualKey = styled.div`
    ${tw`
        w-full
        h-full
        text-center
        flex
        h-14
        lg:h-20
        justify-center
        items-center
        rounded-xl
        text-2xl
        lg:text-4xl
        shadow-lg
        cursor-pointer
        hover:opacity-75
        py-4

    `}
    background-color: ${({theme}) => theme.equal}}
    color: ${({theme}) => theme.text}}

`

const FirstPart = tw.div`
    grid 
    grid-cols-4
    gap-3
    lg:gap-5
`

const SecondPart = tw.div`
    grid 
    grid-cols-2
    gap-3
    lg:gap-5

`

const Keyboard = ({result, setResult}) => {
    const {themeSelect : theme} = useThemeContext()
    const [backupResult, setBackupResult] = useState("")
    const valueClick = (value) => {
        setResult(result + value)
        setBackupResult(result + value)
    }
    const handelDelete = () => {
        let newResult = result.substring(0, result.length - 1)
        setResult(newResult)
        setBackupResult(newResult)
    }
    const handelReset = () => {
        setResult("")
        setBackupResult("")
    }
    const handelResult = () => {
        let total = (eval(backupResult.replace("x", "*")))
        setBackupResult("")
        setResult(total)
    }
    console.log(backupResult)

    return (
        <Container>
            <Wrapper theme={theme}>
                <FirstPart>
                    {keys.map((item, index) => (
                        item !== "DEL" ? <PrimaryKey onClick={() => valueClick(item)} theme={theme} key={index}>{item}</PrimaryKey> : <DelAndResKey onClick={handelDelete} theme={theme} key={index}>{item}</DelAndResKey>
                    ))}
                </FirstPart>
                <SecondPart>
                    <DelAndResKey onClick={handelReset} theme={theme}>RESET</DelAndResKey>
                    <EqualKey onClick={handelResult} theme={theme}>=</EqualKey>
                </SecondPart>
            </Wrapper>
        </Container>
    )
}

export default Keyboard
