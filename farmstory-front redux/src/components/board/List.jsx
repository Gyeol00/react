import React from "react";

const List = () => {
  return (
    <div id="board">
      <section className="list">
        <nav>
          <form action="#">
            <input
              type="text"
              name="search"
              placeholder="제목 키워드, 글쓴이 검색"
            />
            <input type="submit" value="검색" />
          </form>
        </nav>
        <h1>글목록</h1>
        <table border="0">
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>글쓴이</th>
            <th>날짜</th>
            <th>조회</th>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <a href="./view.html">공지사항 게시물입니다.[3]</a>
            </td>
            <td>길동이</td>
            <td>20-05-12</td>
            <td>12</td>
          </tr>
        </table>

        <div class="page">
          <a href="#" class="prev">
            이전
          </a>
          <a href="#" class="num current">
            1
          </a>
          <a href="#" class="num">
            2
          </a>
          <a href="#" class="num">
            3
          </a>
          <a href="#" class="next">
            다음
          </a>
        </div>

        <a href="./write.html" class="btn btnWrite">
          글쓰기
        </a>
      </section>
    </div>
  );
};

export default List;
