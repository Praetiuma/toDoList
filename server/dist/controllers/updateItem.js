"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateItem = void 0;
const updateItem = async (request, response) => {
    // try {
    //     const { item_id } = request.params
    //     const itemToUpdate = await Todo.findOne({ where: { id: item_id } }) as unknown as TodoAttributes
    //     if (!itemToUpdate) {
    //         return response.status(404).json({
    //             status: 'error',
    //             message: 'Item not found'
    //         });
    //     }
    //     if (request.body.title) {
    //         itemToUpdate.title = request.body.title;
    //     }
    //     if (request.body.description) {
    //         itemToUpdate.description = request.body.description;
    //     }
    //     if (request.body.duration) {
    //         itemToUpdate.duration = request.body.duration;
    //     }
    //     await itemToUpdate.save();
    //     return response.status(200).json({
    //         status: 'success',
    //         message: 'Item updated successfully',
    //         updatedItem: itemToUpdate
    //     });
    // } catch (error) {
    //     console.log(error.message);
    //     return response.status(500).json({
    //         status: 'error',
    //         message: 'Internal Server Error'
    //     });
    // }
};
exports.updateItem = updateItem;
