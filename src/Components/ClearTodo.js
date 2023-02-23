import ToDo from "./TodoList";

const ToDoList = ({toDoList, handleToggle, handleFilter,handleChange}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} handleChange={handleChange}/>
                )
            })}
            <button className='todo-btn' style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
};

export default ToDoList;