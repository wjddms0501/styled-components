// import React from "react";
// import { useLocation } from "react-router-dom";
// src/pages/works.js

// const Works = () => {
//   const location = useLocation();
//   console.log("location :>> ", location);
//   return (
//     <div>
//       <button>버튼</button>
//     </div>
//   );
// };

// src/App.js

// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// const Works = () => {
//   const location = useLocation();
//   console.log("location :>>, location");
//   return (
//     <div>
//       <div>{`현재 페이지 : ${location.pathname.slice(1)}`}</div>
//       <Link to="/contact">contact 페이지로 이동하기</Link>
//     </div>
//   );
// };

// export default Works;

// src/pages/Work.js

// src/pages/Works.js
// src/pages/Works.js

import React from "react";
import { Link, useParams } from "react-router-dom";

const data = [
  { id: 1, todo: "리액트 배우기" },
  { id: 2, todo: "노드 배우기" },
  { id: 3, todo: "자바스크립트 배우기" },
  { id: 4, todo: "파이어 베이스 배우기" },
  { id: 5, todo: "넥스트 배우기" },
  { id: 6, todo: "HTTP 프로토콜 배우기" },
];

function Works() {
  return (
    <div>
      {data.map((work) => {
        return (
          <div key={work.id}>
            <div>할일: {work.id}</div>
            <Link to={`/works/${work.id}`}>
              <span style={{ cursor: "pointer" }}>➡️ Go to: {work.todo}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Works;
