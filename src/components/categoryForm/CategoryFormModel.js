import React, { useState, useEffect } from 'react'
import CategoryFormView from './CategoryFormView'
import { useDispatch } from 'react-redux'
import { updateCategory } from '../../redux/actions'

export default function CategoryFormModel () {
  const [category, setCategory] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setCategory(e.target.value)
  }

  useEffect(() => {
    dispatch(updateCategory(category))
  })

  return <CategoryFormView value={category} handleChange={handleChange} />
}
