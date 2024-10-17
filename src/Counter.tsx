import styled from 'styled-components'
import {ChangeEvent, useState} from 'react'
import {Person} from './Person'

export const Counter = () => {


  const family = [
    'Илона', 'Влад', 'Ярослав'
  ]


  const [sum, setSum] = useState(0)
  const [stateVlad, setStateVlad] = useState<number[]>([])
  const [stateIlona, setStateIlona] = useState<number[]>([])
  const [stateYaroslav, setStateYaroslav] = useState<number[]>([])
  const [currentNumberVlad, SetCurrentNumberVlad] = useState<string | number>('')
  const [currentNumberIlona, SetCurrentNumberIlona] = useState<string | number>('')
  const [currentNumberYaroslav, SetCurrentNumberYaroslav] = useState<string | number>('')
  const [sumVlad, setSumVlad] = useState(0)
  const [sumIlona, setSumIlona] = useState(0)
  const [sumYaroslav, setSumYaroslav] = useState(0)

  const onChangeVladHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newData = Number(event.currentTarget.value)
    SetCurrentNumberVlad(newData)
  }
  const onChangeIlonaHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newData = Number(event.currentTarget.value)
    SetCurrentNumberIlona(newData)
  }
  const onChangeYaroslavHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newData = Number(event.currentTarget.value)
    SetCurrentNumberYaroslav(newData)
  }

  const onClickHandler = () => {
    setSumVlad(sumVlad + Number(currentNumberVlad))
    setSumIlona(sumIlona + Number(currentNumberIlona))
    setSumYaroslav(sumYaroslav + Number(currentNumberYaroslav))
    setStateIlona([...stateIlona, Number(currentNumberIlona)])
    setStateYaroslav([...stateYaroslav, Number(currentNumberYaroslav)])
    setStateVlad([...stateVlad, Number(currentNumberVlad)])
    setSum(prev => parseFloat((prev + Number(currentNumberVlad) + Number(currentNumberIlona) + Number(currentNumberYaroslav)).toFixed(2)))
    SetCurrentNumberVlad('')
    SetCurrentNumberIlona('')
    SetCurrentNumberYaroslav('')
  }

  const average: number = Number((sum / family.length).toFixed(2))
  const ilona = (average - sumIlona).toFixed(2)
  const vlad = (average - sumVlad).toFixed(2)
  const yaroslav = (average - sumYaroslav).toFixed(2)

  const debts = [
    {name: 'Илона', general: ilona},
    {name: 'Влад', general: vlad},
    {name: 'Ярослав', general: yaroslav}
  ]

  let res = ''

  const filterPlus = debts.filter(el => Number(el.general) > 0
  )

  const filterMinus = debts.filter((el => Number(el.general) < 0))

  if (filterPlus.length === 2) {
    filterPlus.map(el => res += `${el.name} должен ${filterMinus.map(el => el.name).join('')} ${el.general}р
    `)
  }
  if (filterPlus.length === 1) {
    filterMinus.map(el => res += `${filterPlus.map(el => el.name).join('')} должен ${Math.abs(Number(el.general))}р ${el.name}
    `)
  }
  const formattedRes = res.split('\n').map((line, index) => (
    <span key={index}>
    {line}
      <br/>
  </span>
  ))

  return (
    <Flex>
      <div style={{display: 'flex', gap: '1rem'}}>
        <Person sumPerson={sumIlona} data={stateIlona} name={family[0]} value={currentNumberIlona}
                onChange={onChangeIlonaHandler}/>
        <Person sumPerson={sumVlad} data={stateVlad} name={family[1]} value={currentNumberVlad}
                onChange={onChangeVladHandler}/>
        <Person sumPerson={sumYaroslav} data={stateYaroslav} name={family[2]} value={currentNumberYaroslav}
                onChange={onChangeYaroslavHandler}/>

      </div>

      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <button onClick={onClickHandler}>Добавить</button>
          <div>
          </div>
        </div>
      </div>
      <span>Всего за период: {sum}р</span> <br/>
      <span>Среднее {average}р</span><br/>
      <div>{formattedRes}</div>

    </Flex>
  )
}

const Flex = styled.div`
  
`
