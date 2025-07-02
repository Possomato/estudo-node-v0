import { Request, Response, NextFunction } from 'express'

export function categoryHandle(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const category = req.body.category

  if (category !== 'office') {
    res.send('Erro! Apenas é possível cadastrar itens de escritório')
    return
  } else {
    next()
  }
}
