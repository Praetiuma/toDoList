"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.completeItem = void 0;
const todoModel_1 = require("../model/todoModel");
const completeItem = async (request, response) => {
    try {
        const { item_id } = request.params;
        const completeItem = await todoModel_1.Todo.findOne({ where: { id: item_id } });
        if (!completeItem)
            return response.status(404).json({ status: `error`, message: `Item not found` });
        if (completeItem.status === true)
            return response.status(400).json({ status: `error`, message: `Item already completed` });
        await todoModel_1.Todo.update({ status: true }, { where: { id: item_id } });
        const checkComplete = await todoModel_1.Todo.findOne({ where: { id: item_id } });
        if (checkComplete.status !== true)
            return response.status(400).json({ status: `error`, message: `Item not completed` });
        return response.status(201).json({ status: `success`, message: `Item completed successfully`, checkComplete });
    }
    catch (error) {
        console.log(error.message);
        return response.status(500).json({
            status: `error`,
            message: `Internal Server Error`
        });
    }
};
exports.completeItem = completeItem;
