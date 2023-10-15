export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const time = date.getHours().toString().padStart(2, '0')
  const minute = date.getMinutes().toString().padStart(2, '0')
  return `${day}/${month}/${year} às ${time}:${minute} horas`
}
