const tableFormat = (measure: string | number) => {
  const newLocal = measure === 'No definido'

  if (newLocal) return measure
  return measure + 'mm'
}

export default tableFormat
