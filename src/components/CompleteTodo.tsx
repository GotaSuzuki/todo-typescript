import React from "react";

const CompleteTodo = () => {
  return (
    <div className="complete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        <div className="list-row">
          <li>aaa</li>
          <button>戻す</button>
        </div>
      </ul>
    </div>
  );
};

export default CompleteTodo;
