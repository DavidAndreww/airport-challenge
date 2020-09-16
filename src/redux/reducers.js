import { combineReducers } from 'redux'

const concern = (state = null, action) => {
  switch (action.type) {
    case 'CONCERN':
      return action.value
    default:
      return state
  }
}
const concernDesc = (state = null, action) => {
  switch (action.type) {
    case 'CONCERN_DESC':
      return action.value
    default:
      return state
  }
}
const location = (state = null, action) => {
  switch (action.type) {
    case 'LOCATION':
      return action.value
    default:
      return state
  }
}
const photo = (state = null, action) => {
  switch (action.type) {
    case 'PHOTO':
      return action.value
    default:
      return state
  }
}
const category = (state = null, action) => {
  switch (action.type) {
    case 'CATEGORY':
      return action.value
    default:
      return state
  }
}
const privacy = (state = null, action) => {
  switch (action.type) {
    case 'PRIVACY':
      return action.value
    default:
      return state
  }
}

export default combineReducers({ concern, concernDesc, location, photo, category, privacy })
