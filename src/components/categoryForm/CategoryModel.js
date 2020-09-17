import React from 'react'
import CategoryView from './CategoryView'
import { useDispatch, useSelector } from 'react-redux'
import { updateCategory } from '../../redux/actions'

export default function CategoryModel () {
  const dispatch = useDispatch()
  const category = useSelector((state) => state.category)

  const handleChange = (e) => {
    dispatch(updateCategory(e.target.value))
  }

  return <CategoryView value={category} handleChange={handleChange} />
}
