import styled from 'styled-components'
import {ChangeEvent, useState, KeyboardEvent} from 'react'
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
    setSumVlad(parseFloat((sumVlad + Number(currentNumberVlad)).toFixed(2)))
    setSumIlona(parseFloat((sumIlona + Number(currentNumberIlona)).toFixed(2)))
    setSumYaroslav(parseFloat((sumYaroslav + Number(currentNumberYaroslav)).toFixed(2)))
    setStateIlona([...stateIlona, parseFloat(Number(currentNumberIlona).toFixed(2))])
    setStateYaroslav([...stateYaroslav, parseFloat(Number(currentNumberYaroslav).toFixed(2))])
    setStateVlad([...stateVlad, parseFloat(Number(currentNumberVlad).toFixed(2))])
    setSum(prev => parseFloat((prev + Number(currentNumberVlad) + Number(currentNumberIlona) + Number(currentNumberYaroslav)).toFixed(2)))
    SetCurrentNumberVlad('')
    SetCurrentNumberIlona('')
    SetCurrentNumberYaroslav('')
  }

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClickHandler();
    }
  };

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
    <Debts key={index}>
    {line}
      <br/>
  </Debts>
  ))

  return (
    <Flex>
      <div style={{display: 'flex', gap: '1rem'}}>
        <Person sumPerson={sumIlona} data={stateIlona} name={debts[0].name} value={currentNumberIlona}
                onChange={onChangeIlonaHandler} onKeyDown={onKeyDownHandler}/>
        <Person sumPerson={sumVlad} data={stateVlad} name={debts[1].name} value={currentNumberVlad}
                onChange={onChangeVladHandler} onKeyDown={onKeyDownHandler}/>
        <Person sumPerson={sumYaroslav} data={stateYaroslav} name={debts[2].name} value={currentNumberYaroslav}
                onChange={onChangeYaroslavHandler} onKeyDown={onKeyDownHandler}/>

      </div>

      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <SuperButton onClick={onClickHandler}>Добавить</SuperButton>
          <div>
          </div>
        </div>
      </div>
      <small>Всего за период: <Sum>{sum}р</Sum></small> <br/>
      <small>Среднее <Average>{average}р</Average></small><br/>
      <div>{formattedRes}</div>

    </Flex>
  )
}

const Flex = styled.div`
    background: linear-gradient(135deg, #7F7F7F, #C0C0C0);
    color: white;
    padding: 35px;
    border-radius: 30px;
    border: solid 2px black;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2)
`
const SuperButton = styled.button`
    background: linear-gradient(135deg, #ff6b6b, #f7d9a0);
    width: 140px;
    height: 30px;
    border-radius: 2rem;
    margin: 10px 0;
    color: white;
`

const Debts = styled.span`
    color: #ac4c4c;
    font-weight: bold;
`

const Sum = styled.span`
    color: #66ff00;
    font-weight: bold;
`

const Average = styled.span`
    font-weight: bold;
    color: black;
`