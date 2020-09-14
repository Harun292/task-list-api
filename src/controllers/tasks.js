import {
    updateTask,
    deleteTask,
    addTask,
  } from '../services/db/tasks';
  import { HttpError } from '../utils/httpError';
  
  
  export const addTaskController = async (req, res, next) => {
    try {
      const addedTask = await addTask(
        req.body.listId,
        req.body.name,
        req.body.deadline,
        req.body.description,
        req.body.priority,
        req.body.completed,
      );
      res.status(201).send({
        message: 'Task ' + addTask.name + ' successfully added',
        task: addedTask,
      });
    } catch (error) {
      next(error);
    }
  };
  
  export const deleteTaskController = async (req, res, next) => {
    try {
      const id = req.params.id;
      const numDeleted = await deleteTask(id);
      if (numDeleted != 1)
        throw new HttpError(422, 'Error while trying to delete task');
      res.status(200).send('Task successfully deleted');
    } catch (error) {
      next(error);
    }
  };
  
  export const editTaskController = async (req, res, next) => {
    try {
      const id = req.params.id;
      const editedTask = await updateTask(id, req.body.task);
      if (!editedTask)
        throw new HttpError(422, 'Error while trying to update task');
      res.status(200).send({
        message: 'Task ' + editedTask.name + ' successfully edited',
        task: editedTask,
      });
    } catch (error) {
      next(error);
    }
  };
  