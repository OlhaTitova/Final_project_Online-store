const formTrimStringValidator = (rejectMessage = 'The field should not contain just a spaces.') => () => {
  const stringTrimCheck = (_, value) => (
    value.trim() ? Promise.resolve() : Promise.reject(rejectMessage)
  )
  return {
    validator: stringTrimCheck
  }
}
export default formTrimStringValidator