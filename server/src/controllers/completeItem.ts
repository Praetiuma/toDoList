import { Request, Response} from 'express'
import { Todo, TodoAttributes } from '../model/todoModel';

export const completeItem = async (request: Request, response: Response) => {
    try{
        const { item_id } = request.params

        const completeItem = await Todo.findOne({ where: { id: item_id } }) as unknown as TodoAttributes

        if (!completeItem) return response.status(404).json({status: `error`, message: `Item not found`})

        if (completeItem.status === true) return response.status(400).json({status: `error`, message: `Item already completed`})

        await Todo.update({ status: true }, { where: {id: item_id} })

        const checkComplete = await Todo.findOne({ where: { id: item_id } }) as unknown as TodoAttributes

        if (checkComplete.status !== true) return response.status(400).json({status: `error`, message: `Item not completed`})

        return response.status(201).json({status: `success`, message: `Item completed successfully`, checkComplete})
        
    }catch(error:any){
        console.log(error.message)
        return response.status(500).json({
            status: `error`,
            message: `Internal Server Error`
        })
    }
}