import Aluno from '../models/aluno.js'

export default class AlunoController {

constructor(caminhoBase='aluno/'){
    this.caminhoBase = caminhoBase

this.openADD = async(req, res)=> {
    res.render(caminhoBase + "add")
}
this.add = async(req, res)=>{
    await Aluno.creater({
        nome: req.body.nome,
        matricula:req.bod.matricula
    })
    res.redirect('/'+caminhoBase + 'add')
}
this.lisy = async(req, res)=>{
    const resultado = await Aluno.find({})
    res.render(caminhoBase + 'lst', {Aluno:resultado})
}
}
}