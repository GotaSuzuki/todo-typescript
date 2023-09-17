import React from "react";

const IncompleteTodo = () => {
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        <div className="list-row">
          <li>aaa</li>
          <button>完了</button>
          <button>削除</button>
        </div>
      </ul>
    </div>
  );
};

export default IncompleteTodo;
