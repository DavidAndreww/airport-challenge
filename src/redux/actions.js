export const updateConcern = (concern) => {
  return {
    type: 'CONCERN',
    value: concern
  }
}

export const updateConcernDesc = (concernDesc) => {
  return {
    type: 'CONCERN_DESC',
    value: concernDesc
  }
}

export const updateLocation = (location) => {
  return {
    type: 'LOCATION',
    value: location
  }
}

export const updatePhoto = (photo) => {
  return {
    type: 'PHOTO',
    value: photo
  }
}

export const updateCategory = (category) => {
  return {
    type: 'CATEGORY',
    value: category
  }
}

export const updatePrivacy = (privacy) => {
  return {
    type: 'PRIVACY',
    value: privacy
  }
}

export const toggleFormOpen = () => {
  return {
    type: 'TOGGLE_TRUE',
    value: null
  }
}

export const toggleFormClosed = () => {
  return {
    type: 'TOGGLE_FALSE',
    value: null
  }
}
