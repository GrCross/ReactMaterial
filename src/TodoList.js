import React from "react";
import { Todo } from "./Todo";

export class TodoList extends React.Component{

    constructor(props){
        super(props);

    }
    render(){
        const listItems = this.props.items.map((todo,i) => (
            <Todo key={i}text={todo.text} priority={todo.priority} dueDate={todo.dueDate}/>
        ));

        return(
            <table>
                <thead>
                <tr>
                    <th>Task</th>
                    <th>Priority</th>
                    <th>Due Date</th>
                </tr>
                </thead>
                <tbody>
                {listItems}
                </tbody>
            </table>
        );
    }
}
