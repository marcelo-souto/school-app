export const GetUserUseCase = (usersRepository) => {

  const execute = (name) => {
    const user = usersRepository.getByName(name)
    if (!user) throw new Error('Usuario nao existe')

    return user
  }

  return { execute }
}
