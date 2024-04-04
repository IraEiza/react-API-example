import api from "./config"

export async function getTodos() {
  const { data } = await api.get('/todos')
  console.log(data)
  return data
}

