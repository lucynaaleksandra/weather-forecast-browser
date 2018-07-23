import React from 'react'
import {
  round,
  sum,
} from 'lodash'

import { 
  Sparklines, 
  SparklinesLine, 
  SparklinesReferenceLine 
} from 'react-sparklines'


function average(data) {
  return round(sum(data)/data.length)
}

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <div>
        {/* calculate avg, pass array of data to that func */}
        {average(props.data)} {props.units}
      </div>
    </div>
  )
}