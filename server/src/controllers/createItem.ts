import { Request, Response} from 'express'
import { Todo, TodoAttributes } from '../model/todoModel';
import { v4 } from 'uuid'

export const createItem = async (request: Request, response: Response) => {
    try{
        const { title, description, duration } = request.body;

        const checkItem = await Todo.findOne({ where: {title} })

        if (checkItem) return response.status(400).json({status: `error`, message: `${title} already exists`})

        const createNewList = await Todo.create({
            id: v4(),
            title,
            description,
            duration,
            status: false
        }) as unknown as TodoAttributes

        const confirmItem = await Todo.findOne({ where: {title, id: createNewList.id} })

        if (!confirmItem) return response.status(400).json({status: `error`, message: `${title} not created, please try again`})

        return response.status(201).json({status: `success`, message: `${title} created successfully`, confirmItem})
        
    }catch(error:any){
        console.log(error.message)
        return response.status(500).json({
            status: `error`,
            message: `Internal Server Error`
        })
    }
}