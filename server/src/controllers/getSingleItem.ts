import { Request, Response} from 'express'
import { Todo, TodoAttributes } from '../model/todoModel';

export const getSingleItem = async (request: Request, response: Response) => {
    try{
        const { item_id } = request.params

        const getSingleItem = await Todo.findAll({ where:{ id: item_id } })

        if (!getSingleItem) return response.status(404).json({status: `error`, message: `No item found`})

        return response.status(201).json({status: `success`, message: `Item found successfully`, getSingleItem})
        
    }catch(error:any){
        console.log(error.message)
        return response.status(500).json({
            status: `error`,
            message: `Internal Server Error`
        })
    }
}