import {
    updateList,
    deleteList,
    addList,
  } from '../services/db/lists';
  import { HttpError } from '../utils/httpError';
  
  
  export const addListController = async (req, res, next) => {
    try {
      const addedList = await addList(
        req.body.projectId,
        req.body.name,
      );
      res.status(201).send({
        message: 'List ' + addedList.name + ' successfully added',
        list: addedList,
      });
    } catch (error) {
      next(error);
    }
  };
  
  export const deleteListController = async (req, res, next) => {
    try {
      const id = req.params.id;
      const numDeleted = await deleteList(id);
      if (numDeleted != 1)
        throw new HttpError(422, 'Error while trying to delete list');
      res.status(200).send('List successfully deleted');
    } catch (error) {
      next(error);
    }
  };
  
  export const editListController = async (req, res, next) => {
    try {
      const id = req.params.id;
      const editedList = await updateList(id, req.body.list);
      if (!editedList)
        throw new HttpError(422, 'Error while trying to update list');
      res.status(200).send({
        message: 'List ' + editedList.name + ' successfully edited',
        list: editedList,
      });
    } catch (error) {
      next(error);
    }
  };
  