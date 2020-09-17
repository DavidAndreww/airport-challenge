import React from 'react'
import CategoryFormView from './CategoryFormView'
import { useDispatch, useSelector } from 'react-redux'
import { updateCategory } from '../../redux/actions'

export default function CategoryFormModel () {
  const dispatch = useDispatch()
  const category = useSelector((state) => state.category)

  const handleChange = (e) => {
    dispatch(updateCategory(e.target.value))
  }

  return <CategoryFormView value={category} handleChange={handleChange} />
}
