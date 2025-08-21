import express from 'express'
const router = express.Router()

import AlunoController from '../controllers/AlunoController.js'
const controller = new AlunoController()

const caminhoBase = 'aluno/'

router.get('/' + caminhoBase + 'add', controller.openADD)
router.post('/' + caminhoBase + 'add', controller.add)
router.get('/' + caminhoBase + 'add', controller.list)

export default router