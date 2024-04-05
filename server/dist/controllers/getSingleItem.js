"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleItem = void 0;
const todoModel_1 = require("../model/todoModel");
const getSingleItem = async (request, response) => {
    try {
        const { item_id } = request.params;
        const getSingleItem = await todoModel_1.Todo.findAll({ where: { id: item_id } });
        if (!getSingleItem)
            return response.status(404).json({ status: `error`, message: `No item found` });
        return response.status(201).json({ status: `success`, message: `Item found successfully`, getSingleItem });
    }
    catch (error) {
        console.log(error.message);
        return response.status(500).json({
            status: `error`,
            message: `Internal Server Error`
        });
    }
};
exports.getSingleItem = getSingleItem;
