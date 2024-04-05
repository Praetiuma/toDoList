import { Request, Response} from 'express'
import { Todo, TodoAttributes } from '../model/todoModel';

export const getAllItems = async (request: Request, response: Response) => {
    try{
        const allItems = await Todo.findAll({})

        if (!allItems || allItems.length === 0) return response.status(404).json({status: `error`, message: `No items found`})

        return response.status(201).json({status: `success`, message: `Items found successfully`, allItems})
        
    }catch(error:any){
        console.log(error.message)
        return response.status(500).json({
            status: `error`,
            message: `Internal Server Error`
        })
    }
}