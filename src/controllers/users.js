import generateHashPassword from '../utils/generate.hash';
import { createUser } from '../services/db/users';
import {addProject} from '../services/db/projects';
import {addList} from '../services/db/lists';
import {addTask} from '../services/db/tasks';

export const createUserController = async (req, res, next) => {
  try {
    const user = req.body;
    const hashedPassword = await generateHashPassword(user.password);
    user.password = hashedPassword;
    const newUser = await createUser(user);
    const defaultProject=await addProject(newUser.id,"Default","red");
    const defaultList=await addList(defaultProject.id,"Default");
    const date= new Date(Date.now());
    const defaultTask=await addTask(defaultList.id,"Default",date.toISOString(),"Default",1,false);
    res.status(201).send(newUser);
  } catch (error) {
    next(error);
  }
};
