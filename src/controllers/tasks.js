import {
  updateProject,
  deleteProject,
  addProject,
} from '../services/db/tasks';
import { HttpError } from '../utils/httpError';


export const addProjectController = async (req, res, next) => {
  try {
    const addedProject = await addProject(
      req.id,
      req.body.name,
      req.body.colorName,
    );
    res.status(201).send({
      message: 'Project ' + addedProject.name + ' successfully added',
      project: addedProject,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProjectController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const numDeleted = await deleteProject(id);
    if (numDeleted != 1)
      throw new HttpError(422, 'Error while trying to delete project');
    res.status(200).send('Project successfully deleted');
  } catch (error) {
    next(error);
  }
};

export const editProjectController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const editedProject = await updateProject(id, req.body.project);
    if (!editedProject)
      throw new HttpError(422, 'Error while trying to update project');
    res.status(200).send({
      project: editedProject,
    });
  } catch (error) {
    next(error);
  }
};
