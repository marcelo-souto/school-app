export const GetUserController = (getUserUseCase) => {
  const handle = (req, res) => {
    const { name } = req.params

    try {
      const response = getUserUseCase.execute(name)
      return res.status(200).json(response)
    } catch (error) {
      return res.status(400).json({ message: error.message })
    }
  }

  return { handle }
}
