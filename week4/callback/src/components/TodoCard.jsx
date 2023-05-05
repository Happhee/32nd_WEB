const TodoCard = () => {
  let todoData = "";

  const getTodoData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        todoData = res;
        console.log("콜백함수", todoData);
      })
      .catch((err) => console.log(err));
  };
  getTodoData();

  console.log("바깥", todoData);
  return (
    <div>
      <p>결과 값 :</p>
      {todoData}
    </div>
  );
};

export default TodoCard;
