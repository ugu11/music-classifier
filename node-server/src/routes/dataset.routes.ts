import { Router, Request, Response} from 'express'
import * as datasetController from '../controller/dataset.controller'
const datasetRouter = Router()

datasetRouter.get('/', async (_req: Request, res: Response) => {
  const result = await datasetController.getAll()
  return res.status(200).send(result)
})

datasetRouter.post('/', async (req: Request, res: Response) => {
  const result = await datasetController.getAll()

  console.log(req.files)

  return res.status(200).send({
    status: true,
    result
  })
})

export default datasetRouter