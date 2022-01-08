import { List } from 'antd';
import React, { useState } from 'react';
import { CloseCircleTwoTone, CheckCircleTwoTone } from '@ant-design/icons'
import STATUS from '../../config/status';

const TodoList = (props) => {

    const { todos = [], onOperate, searchStatus } = props;

    const handlerOperare = (operate, item) => {
        switch (operate) {
            case 'is_delete':
                onOperate && onOperate({ ...item, status: STATUS.IS_DELETE })
                break;
            case 'is_done':
                onOperate && onOperate({ ...item, status: item.status === STATUS.IS_DONE ? STATUS.IS_CREATE : STATUS.IS_DONE })
                break;
            default:
                break;
        }
    }

    const showTodos = todos.filter(todo => {
        return todo.status !== STATUS.IS_DELETE && searchStatus.indexOf(todo.status.toString()) > -1
    })

    return (
        <div>
            <List
                bordered
                dataSource={showTodos}
                renderItem={item => (
                    <List.Item className={item.status === STATUS.IS_DONE ? "todo-container-list-done" : "todo-container-list"}>
                        {item && item.content}
                        <div>
                            <CloseCircleTwoTone onClick={() => handlerOperare('is_delete', item)} />
                            <CheckCircleTwoTone onClick={() => handlerOperare('is_done', item)} />
                        </div>
                    </List.Item>
                )}
            />
        </div>
    );
}

export default TodoList;