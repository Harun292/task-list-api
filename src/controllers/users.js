import generateHashPassword from '../utils/generate.hash';
import { createUser } from '../services/db/users';
import {addProject} from '../services/db/projects';
import {addList} from '../services/db/lists';
import {addTask} from '../services/db/tasks';
import {updateUser} from '../services/db/users';

export const createUserController = async (req, res, next) => {
  try {
    const user = req.body;
    const hashedPassword = await generateHashPassword(user.password);
    user.password = hashedPassword;
    const newUser = await createUser(user);
    const defaultProject=await addProject(newUser.id,"Default","000");
    const defaultList=await addList(defaultProject.id,"Default");
    const date= new Date(Date.now());
    const defaultTask=await addTask(defaultList.id,"Default",date.toISOString(),"Default",1,false);
    res.status(201).send(newUser);
  } catch (error) {
    next(error);
  }
};

export const updateUserController = async (req, res, next) =>{
try {
  const updatedUser=await updateUser(req.id,req.body.user);
  res.status(201).send(updatedUser);
} catch (error) {
  next(error);
}

}
