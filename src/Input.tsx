import styled from 'styled-components'
import {ChangeEvent} from 'react'

type InputTypeProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  value: number | string
}

export const Input = ({onChange, value}: InputTypeProps) => {
  return (
    <div>
      <InputStyle value={value} type="number" onChange={onChange}/>
    </div>
  )
}

const InputStyle = styled.input`
    width: 70px;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {        -webkit-appearance: none;
    }
`