"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createItem = void 0;
const todoModel_1 = require("../model/todoModel");
const uuid_1 = require("uuid");
const createItem = async (request, response) => {
    try {
        const { title, description, duration } = request.body;
        const checkItem = await todoModel_1.Todo.findOne({ where: { title } });
        if (checkItem)
            return response.status(400).json({ status: `error`, message: `${title} already exists` });
        const createNewList = await todoModel_1.Todo.create({
            id: (0, uuid_1.v4)(),
            title,
            description,
            duration,
            status: false
        });
        const confirmItem = await todoModel_1.Todo.findOne({ where: { title, id: createNewList.id } });
        if (!confirmItem)
            return response.status(400).json({ status: `error`, message: `${title} not created, please try again` });
        return response.status(201).json({ status: `success`, message: `${title} created successfully`, confirmItem });
    }
    catch (error) {
        console.log(error.message);
        return response.status(500).json({
            status: `error`,
            message: `Internal Server Error`
        });
    }
};
exports.createItem = createItem;
