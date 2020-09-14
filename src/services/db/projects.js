import Project from '../../models/Project';
import List from '../../models/List';
import Task from '../../models/Task';


export const deleteProject = async (id) => {
  await Task.query().delete().whereIn('task.listId',List.query().select('list.id').where('list.projectId',id));  
  await List.query().delete().where('list.projectId',id);
  const numDeleted= await Project.query().deleteById(id);
  return numDeleted;
};

export const addProject = async (userId,name,colorName) => {
  const addedProject= await Project.query().insert({
    user_id : userId,
    name: name,
    colorName: colorName,
  });
  return addedProject;
};

export const updateProject= async (id, fieldsForEdit) =>{

  const updatedProject= Project.query().patchAndFetchById(id,{
    name: fieldsForEdit.name,
    colorName: fieldsForEdit.colorName
  });

  return updatedProject;
}


