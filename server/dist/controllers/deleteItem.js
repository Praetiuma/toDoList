"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = void 0;
const todoModel_1 = require("../model/todoModel");
const deleteItem = async (request, response) => {
    try {
        const { item_id } = request.params;
        const deleteItem = await todoModel_1.Todo.destroy({ where: { id: item_id } });
        const checkDelete = await todoModel_1.Todo.findOne({ where: { id: item_id } });
        if (checkDelete)
            return response.status(404).json({ status: `error`, message: `Item not deleted` });
        return response.status(201).json({ status: `success`, message: `Item found successfully`, deleteItem });
    }
    catch (error) {
        console.log(error.message);
        return response.status(500).json({
            status: `error`,
            message: `Internal Server Error`
        });
    }
};
exports.deleteItem = deleteItem;
