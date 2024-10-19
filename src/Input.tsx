import styled from 'styled-components'
import {ChangeEvent, KeyboardEvent} from 'react'

type InputTypeProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  value: number | string
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>)=>void
}

export const Input = ({onChange, value, onKeyDown}: InputTypeProps) => {
  return (
    <div>
      <InputStyle value={value} type="number" onChange={onChange} onKeyDown={onKeyDown}/>
    </div>
  )
}

const InputStyle = styled.input`
    width: 70px;
    border-radius: 5px;
    border: 2px solid #e89797;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    &:focus {
        outline: none;
        border-color: #b8b86c;
        box-shadow: 0 4px 10px rgba(0, 123, 255, 0.5);
    }
`