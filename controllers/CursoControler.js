import Curso from '../models/curso.js'

export default class CorsoController {

constructor(caminhoBase='curso/'){
    this.caminhoBase = caminhoBase

this.openADD = async(req, res)=> {
    res.render(caminhoBase + "add")
}
this.add = async(req, res)=>{
    await Curso.create({
        nome: req.body.nome,
        area:req.body.area,
        anofundacao:req.body.anofundacao,
        nivel:req.body.nivel
    })
    res.redirect('/'+caminhoBase + 'add')
}
this.list= async(req, res)=>{
    const resultado = await Curso.find({})
    res.render(caminhoBase + 'lst', {Cursos:resultado})
}
}
}