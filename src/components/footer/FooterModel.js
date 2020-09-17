import React from 'react'
import FooterView from './FooterView'
import { useDispatch } from 'react-redux'
import { toggleFormOpen, toggleFormClosed } from '../../redux/actions'

export default function FooterModel () {
  const dispatch = useDispatch()

  const handleClick = (e) => {
    const id = e.currentTarget.id

    if (id === 'create') dispatch(toggleFormOpen())
    else dispatch(toggleFormClosed())
  }

  return <FooterView handleClick={handleClick} />
}
