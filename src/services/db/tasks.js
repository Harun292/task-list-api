import List from '../../models/List';
import Task from '../../models/Task';
import Project from '../../models/Project';


export const deleteTask = async (id) => {
  let numDeleted = await Task.query().deleteById(id);
  return numDeleted;
};

export const addTask = async (listId,name,deadline,description,priority,completed) => {
  const addedTask= await Task.query().insert({
    listId,
    name,
    deadline,
    description,
    priority,
    completed,
  });
  return addedTask;
};

export const updateTask= async (id, fieldsForEdit) =>{

  const updatedTask= Task.query().patchAndFetchById(id,{
    name: fieldsForEdit.name,
    deadline: fieldsForEdit.deadline,
    description: fieldsForEdit.description,
    priority: fieldsForEdit.priority,
    completed: fieldsForEdit.completed,
  });

  return updatedTask;
}

export const getTasks = async (id)=>{
  const allTasks=Project.query().withGraphFetched('[list,list.[tasks]]').where('project.userId',id);
  return allTasks;
}

