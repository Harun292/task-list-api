import Project from '../../models/Project';
import List from '../../models/List';
import Task from '../../models/Task';


export const deleteList = async (id) => {
  let numDeleted=0;
   numDeleted+= await Task.query().delete().where('task.listId', id);
   numDeleted+= await List.query().deleteById(id);
  return numDeleted;
};

export const addList = async (projectId,name) => {
  const addedList= await List.query().insert({
    projectId,
    name,
  });
  return addedList;
};

export const updateList= async (id, fieldsForEdit) =>{

  const updatedList= List.query().patchAndFetchById(id,{
    name: fieldsForEdit.name,
  });

  return updatedList;
}

