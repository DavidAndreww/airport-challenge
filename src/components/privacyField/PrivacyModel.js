import React from 'react'
import PrivacyView from './PrivacyView'
import { useDispatch, useSelector } from 'react-redux'
import { updatePrivacy } from '../../redux/actions'

export default function PrivacyModel () {
  const dispatch = useDispatch()
  const privacy = useSelector((state) => state.privacy)

  const handleChange = (e) => {
    dispatch(updatePrivacy(e.target.value))
  }

  return <PrivacyView value={privacy} handleChange={handleChange} />
}
