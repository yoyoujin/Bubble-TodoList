import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

export default function Todo() {
  const [todoData, setTodoData] = useState(JSON.parse(localStorage.getItem('todo')) ?? []);

  useEffect(() => {
    console.log(todoData);

    /**
     *  todoData가 바뀌었을 때
     *  로컬 스토리지에 저장하기
     */

    localStorage.setItem('todo', JSON.stringify(todoData));
  }, [todoData]);

  return (
    <>
      <TodoForm setTodoData={setTodoData} />
      <ul>
        {todoData.map((data) => (
          <TodoItem key={data.id} data={data} setTodoData={setTodoData} />
        ))}
      </ul>
    </>
  );
}

/*
  [
    {
      id: "아이디",
      text: "투두 내용",
      isDone: "했는지 안했는지"
    }
  ]
*/
