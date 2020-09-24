import React from 'react'
import ConcernView from './ConcernView'
import { useDispatch, useSelector } from 'react-redux'
import { updateConcern, updateConcernDesc } from '../../redux/actions'

export default function ConcernFormModel () {
  const dispatch = useDispatch()

  const concern = useSelector((state) => state.concern)
  const concernDesc = useSelector((state) => state.concernDesc)

  const handleChange = (e) => {
    const [field, value] = [e.target.id, e.target.value]
    if (field === 'concern') dispatch(updateConcern(value))
    else dispatch(updateConcernDesc(value))
  }
  return <ConcernView concern={concern} concernDesc={concernDesc} handleChange={handleChange} />
}
