const users = [{ name: 'Marcelo', email: 'marcelosouto@email.com' }]

export const UsersRepository = () => {

  const getByName = (name) => {
    const user = users.find((user) => user.name === name)
    return user
  }

  return { getByName }
}
