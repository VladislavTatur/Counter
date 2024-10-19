import styled from 'styled-components'
import {Input} from './Input'
import {ChangeEvent, KeyboardEvent} from 'react'
import {useAutoAnimate} from '@formkit/auto-animate/react'

type PersonPropsType = {
  value: number | string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  name: string
  data: number[]
  sumPerson: number | string
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void
}

export const Person = ({value, onChange, name, data, sumPerson,onKeyDown}: PersonPropsType) => {
  const [listRef] = useAutoAnimate<HTMLUListElement>()
  return (
    <div>
      <Name>
        {name}
      </Name>
      <Data>
        <List  ref={listRef}>
          {data.length ? data.map(el => <li>{el}</li>
          ) : (<li></li>)}
        </List>

      </Data>
      <div>Сумма:{sumPerson}</div>
      <Input onKeyDown={onKeyDown} value={value} onChange={onChange}/>
    </div>

  )
}

const Name = styled.div`
    display: flex;
    gap: 2.3rem;
    justify-content: center;
    color:  #FFD700;
    font-size: 1.2rem;

`
const Data = styled.div`
    display: flex;
`

const List = styled.ul`
    list-style: none;
    text-align: right;
    color: black;
`