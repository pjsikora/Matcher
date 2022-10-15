import { Request, Response } from 'express'

exports.registerController = (req: Request, res: Response) => {
  console.log(req.body.login)
  console.log(req.body.password)
  res
    .status(200)
    .json(
      `Stworzono użytkownika o loginie ${req.body.login} i hasle ${req.body.password}`
    )
}
