import styled from 'styled-components'
import {Input} from './Input'
import {ChangeEvent} from 'react'

type PersonPropsType = {
  value: number | string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  name: string
  data: number[]
  sumPerson: number | string
}

export const Person = ({value, onChange, name, data, sumPerson}: PersonPropsType) => {
  return (
    <div>
      <Name>
        {name}
      </Name>
      <Data>
        <List>
          {data.length ? data.map(el => <li>{el}</li>
          ) : (<li></li>)}
        </List>

      </Data>
      <div>Сумма:{sumPerson}</div>
      <Input value={value} onChange={onChange}/>
    </div>

  )
}

const Name = styled.div`
    display: flex;
    gap: 2.3rem;
    justify-content: center;
`
const Data = styled.div`
    display: flex;
`

const List = styled.ul`
    list-style: none;
    text-align: right;
`