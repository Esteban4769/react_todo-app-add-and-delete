import { useContext } from 'react';
import { TodoInfo } from '../Todo/TodoInfo';
import { TodosContext } from '../../contexts/TodosContext';

export const TodoList:React.FC = () => {
  const { todos, waitingForResponseTodosId } = useContext(TodosContext);

  return (
    <div className="todos_list">
      {todos.map(todo => {
        const isWaiting = waitingForResponseTodosId.includes(todo.id);

        return (
          <TodoInfo
            key={todo.id}
            todo={todo}
            isWaitingResponse={isWaiting}
          />
        );
      })}
    </div>
  );
};
