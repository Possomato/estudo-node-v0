import { Request, Response } from 'express'

export class ProductController{
  create(req: Request, res: Response){
    const product = req.body
    res.send(product)
  }
}