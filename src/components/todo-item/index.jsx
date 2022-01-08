import React, { useState } from 'react';
import { Input, Button } from 'antd';
import STATUS from '../../config/status';

const TodoItem = (props) => {
    const {onSubmit} = props;

    const [item, setItem] = useState({})

    const addItem = () => {
        onSubmit && onSubmit({
            ...item,
            id: Math.random()
        })
    }

    const handleChange = (event) => {
        setItem({
            content: event.target.value,
            status: STATUS.IS_CREATE
        })
    }

    return (
        <div className="todo-item">
            <Input placeholder="请添加待办事项" value= {item.content} onChange={handleChange} onPressEnter={addItem} />
            <Button type="primary" size="large" onClick={addItem}>提交</Button>
        </div>
    )
}

export default TodoItem;