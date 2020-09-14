import Project from '../../models/Project';
import List from '../../models/List';
import Task from '../../models/Task';


export const deleteProject = async (id) => {
  let numDeleted=0;
  const listId=List.query().select('id').where('list.projectId',id);
   numDeleted+= await Task.query().delete().where('task.listId', listId);
   numDeleted+= await List.query().deleteById(listId);
   numDeleted+= await Project.query().deleteById(id);
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

export const deleteList = async id => {
  const numDeleted = 0;
  numDeleted+= await Task.query().delete().where('listId', id);
  numDeleted+= await List.query.deleteById(id);
  return numDeleted;
};

export const addList = async (projectId,name) => {
  const addedList = await List.query().insert({
    'projectId' : projectId,
    'name': name,
  })
  return addedList;
};

export const editExpense = async (id, fieldsForEdit) => {
  const updatedExpense = await Expense.query().patchAndFetchById(id, {
    name: fieldsForEdit.name,
    amount: fieldsForEdit.amount,
    category_id: fieldsForEdit.category_id,
    description: fieldsForEdit.description,
  });
  return updatedExpense;
};
