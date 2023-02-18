import * as React from 'react';
import { ITodo, TodoContext, TodoContextType } from './TodoContext'; 

const AddTodo: React.FC = () => {
  const { addTodo } = React.useContext(TodoContext) as TodoContextType;
  const [formData, setFormData] = React.useState({title:""});
  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({title: e.currentTarget.value});
  };
  const handleSaveTodo = (e: React.FormEvent, formData: ITodo | any) => {
    e.preventDefault();
    addTodo({id:Math.random(),title:formData,completed:false});
  };
  return (
    <form onSubmit={(e) => handleSaveTodo(e, formData)}>
      <div>
        <div>
          <label htmlFor="title">Title</label>
          <input onChange={handleForm} type="text" id="title" />
        </div>
      </div>
      <button disabled={formData.title === "" ? true : false}>Add Todo</button>
    </form>
  );
};
export default AddTodo;