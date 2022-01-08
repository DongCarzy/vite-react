import React from 'react';
import { Radio } from 'antd'
import STATUS from '../../config/status';

const TodoSearch = (props) => {

    const {searchStatus, onSearch} = props;

    const handlerStatusChange = (event) => {
        const value = event.target.value;
        onSearch && onSearch(value);
    }

    return (
        <div className="todo-search">
            <Radio.Group defaultValue={searchStatus} onChange={handlerStatusChange} buttonStyle="solid">
                <Radio.Button value={`${STATUS.IS_CREATE},${STATUS.IS_DONE}`}>全部</Radio.Button>
                <Radio.Button value={`${STATUS.IS_CREATE}`}>未完成</Radio.Button>
                <Radio.Button value={`${STATUS.IS_DONE}`}>已完成</Radio.Button>
            </Radio.Group>
        </div>
    )
}

export default TodoSearch;