import React from 'react'
import CreateDoneTask from "./task";


function DoneTasksList ({ doneTasks })  {
  return (
    <ul>
      {doneTasks.map(item => {
        return (
          <CreateDoneTask
            key={item.id}
            id={item.id}
            text={item.description}
            date={item.date}
          />
        );
      })}
    </ul>
  );
};

export default DoneTasksList;