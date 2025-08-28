import express from 'express'
const router = express.Router()

import CorsoController from '../controllers/CursoControler.js'
const controller = new CorsoController()

const caminhoBase = 'curso/'

router.get('/' + caminhoBase + 'add', controller.openADD)
router.post('/' + caminhoBase + 'add', controller.add)
router.get('/' + caminhoBase + 'lst', controller.list)

export default router