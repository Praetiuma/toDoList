import { Request, Response} from 'express'
import { Todo, TodoAttributes } from '../model/todoModel';

export const deleteItem = async (request: Request, response: Response) => {
    try{
        const { item_id } = request.params

        const deleteItem = await Todo.destroy({ where: { id: item_id } })

        const checkDelete = await Todo.findOne({ where: { id: item_id } })

        if (checkDelete) return response.status(404).json({status: `error`, message: `Item not deleted`})

        return response.status(201).json({status: `success`, message: `Item found successfully`, deleteItem})
        
    }catch(error:any){
        console.log(error.message)
        return response.status(500).json({
            status: `error`,
            message: `Internal Server Error`
        })
    }
}