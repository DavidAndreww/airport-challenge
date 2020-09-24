import React from 'react'
import DataModel from '../jsonDataDisplay/DataModel'

export default function AdminView ({ jsonArray }) {
  console.log(jsonArray)
  if (jsonArray === null) {
    return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>No data available...</div>
  }
  if (jsonArray.length > 0) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h4>Open and active concerns:</h4>
        {jsonArray.map((concern) => {
          return <DataModel key={concern.concern.timeOfConcern} admin state={concern.concern} />
        })}
      </div>
    )
  }
}
