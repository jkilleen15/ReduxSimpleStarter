// is just component not container bc does not need to talk to Redux
// it is a functional component rather than class bc does not utilize application state

// lodash already installed in project
// but we could enter npm install --save lodash or _(underscore)
import _ from 'lodash';
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

// helper function
function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  // below - props.data makes data type dynamic i.e. {temps}, props.color makes color dynamic
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <div>
        {average(props.data)} {props.units}
      </div>
    </div>
  )

}
