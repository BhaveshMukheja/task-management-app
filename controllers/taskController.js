const { now } = require('mongoose')
const prisma = require('../prisma/index')

//create a new task 

exports.createTask = async(req, res, next)=>{
    try {
        const {title, descrip, status, deadline, createdAt, priority, authorId} = req.body

      const result = await prisma.task.create({
        data:{
            title,
            descrip,
            status,
            priority,
            deadline:new Date(),
            createdAt: new Date(),
            author: {connect:{id: authorId}}
        }
      })
      res.json(result)
    } catch (error) {
        throw new Error(error)
        
    }
}

exports.updateTask = async(req, res, next)=>{
    const {id} = req.params;
    const {title, descrip, status,deadline, createdAt, priority} = req.body
    try {
        const result = await prisma.task.update({
            where:{id:id},
            data:{
                title: title,
                descrip: descrip,
                status:status,
                priority:priority,
                deadline:new Date(),
                createdAt: new Date(),
            }
        })
        res.json(result)
    } catch (error) {
        // throw new Error(error)
        res.json({error:`Post with the id:${id} does not exsist`})
        
    }
}

exports.deleteTask = async(req, res, next)=>{
    const {id} = req.params;
    try {
        const result = await prisma.task.delete({
           where:{id:id} 
        });
        res.json(result)
    } catch (error) {
        res.json({error:`Post with the id:${id} does not exsist`})
    }
}

//get all Tasks

exports.getTasks = async(req, res, next)=>{
    const {id} = req.params;

    try {
        
        const result = await prisma.user.findUnique({
            where:{id:id},
            include:{
                tasks:true
            }
        })
        res.json(result)
    } catch (error) {
        res.json({error:`No post was found`})
    }
}

