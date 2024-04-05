"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllItems = void 0;
const todoModel_1 = require("../model/todoModel");
const getAllItems = async (request, response) => {
    try {
        const allItems = await todoModel_1.Todo.findAll({});
        if (!allItems || allItems.length === 0)
            return response.status(404).json({ status: `error`, message: `No items found` });
        return response.status(201).json({ status: `success`, message: `Items found successfully`, allItems });
    }
    catch (error) {
        console.log(error.message);
        return response.status(500).json({
            status: `error`,
            message: `Internal Server Error`
        });
    }
};
exports.getAllItems = getAllItems;
