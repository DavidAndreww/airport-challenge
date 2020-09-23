import React from 'react'
import DataModel from '../dataContainer/DataModel'

export default function AdminView ({ jsonArray }) {
  console.log(jsonArray)
  if (jsonArray === null) {
    return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>No data available...</div>
  }
  // if (jsonArray.length === 0) {
  //   return <div>There are no concerns currently submitted.</div>
  // }
  if (jsonArray.length > 0) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {jsonArray.map((concern) => {
          return <DataModel key={concern.concern.timeOfConcern} admin state={concern.concern} />
        })}
      </div>
    )
  }
}
