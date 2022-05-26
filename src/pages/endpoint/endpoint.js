import { Link } from "react-router-dom";
import { Router } from "express";
import {soma, dobro, temperatura, media, tabuadaArray, corPrimaria, ingresso, maior, freqcaracter} from './services.js'
const server = Router();

server.get('/dobro/:numero', (resq, resp) => {
    try{
    let num = Number(resq.params.numero)
    let dobro = num * 2

    let resposta = {
        dobro: dobro
    }
    resp.send(resposta);
    }catch (err) {
        err:err.message
    }
})


server.get('/somar', (req, resp) => {
    try{
    let a = Number(req.query.a)
    let b = Number(req.query.b)

    let x = soma (a, b)

    resp.send({
        soma: x
    })
    }catch(err) {
        resp.send({
            err:err.message
        })
    }
})

server.post('/somar', (req, resp) => {
    try{
    let {a,b} =  req.body

    let x = soma(a, b)
    resp.send({
        soma: x
    })
    }catch(err) {
        resp.send({
            err:err.message
        })
    }
})


server.get('/dobro/:', (req, resp) => {
    try{
    let a = req.paramns
    let x = dobro(a)
    resp.send({
        dobro: x
    })
    }catch(err) {
        resp.send({
            err:err.message
        })
    }
})

server.post('/temperatura', (req, resp) => {
    try{
    let a =  (Number(req.query.a))

    let x = temperatura(a)

    resp.send({
        febre: x
    })
    }catch(err) {
        resp.send({
            err:err.message
        })
    }
})


server.post('/media', (req, resp) => {
    try{
    let {a, b, c} = req.body
    let x = media(a, b, c)

    resp.send({
        media: x
    })
    }catch(err) {
        resp.send({
            err: err.message
        })
    }
})

server.get('/tabuadaArray', (req, resp) => {
    try{
    const a = Number(req.query.n)

    const x = tabuadaArray(a)

    resp.send({
        tabuadaArray: x
    
    })
    }
    catch(err) {
        resp.send({
            err:err.message
        })
    }
})

server.get('/corPrimaria/:cor', (req, resp) => {
    try{
    let {cor} = (req.params)
    let x = corPrimaria(cor)

    resp.send({
        cor: x
    })
    }catch(err) {
        err: err.message
    }
})

server.post('/ingresso', (req, resp) => {
    try{
        let {inteira, meia, dia, nacionalidade} = req.body
        let x = ingresso(inteira, meia, dia, nacionalidade)

        resp.send({
            total: x
        })
    }catch(err){
        err:err.message
    }
})

server.post('/maior', (req, resp) => {
    try{
        let {num} = req.body
        let x = maior(num)

        resp.send({
            maior: x
        })
    }catch(err) {
        err: err.message
    }
})

server.post('/freqcaracter', (req, resp) => {
    try{
        let {texto, caracteres} = req.body
        let a = freqcaracter(texto, caracteres)

        resp.send({
            frequencia: a
        })
    }catch(err) {
        err: err.message
    }
})

export default server;




    
  
  
    
        