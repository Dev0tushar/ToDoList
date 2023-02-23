import React, { useEffect, useState } from 'react';

const ToDo = ({ todo, handleToggle, handleChange }) => {
    const [edit, setEdit] = useState(false)
    const [editingText, setEditingText] = useState("")
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }


    const handleEdit = (e) => {
        e.preventDefault()
        setEdit(false)
        handleChange(editingText, e.currentTarget.id)
    }

    return (
        <div>

            <div key={todo.id + todo.task} name="todo" className="todo">
                {/* <input type="checkbox" id={`box${item?.id}`} defaultChecked={defaultChecked} onChange={(e) => editValue(item?.id, e.target.checked,"completed")} /> */}
                {edit ?
                    <>
                        <input

                            type="text"
                            defaultValue={todo.task}

                            onChange={(e) => setEditingText(e.target.value)}
                        />
                        <button id={todo.id} onClick={handleEdit} >
                            save
                        </button>
                    </>
                    : <>
                        <div>
                            <input type="checkbox" name="todo" id={todo.id} defaultChecked={todo?.complete} onChange={handleClick} />
                        </div>
                        <div onDoubleClick={() => setEdit(true)}>{todo.task}</div>
                    </>}

            </div>
        </div>
    );
};

export default ToDo;