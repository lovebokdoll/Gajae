import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
/**
 *
 * @returns 이용후기 게시판
 */
const ReviewBoradPage = () => {
  const navigate = useNavigate();

  const writeReview = () => {
    navigate("write");
  };

  return (
    <>
      <div class="row">
        <div class="card card-margin search-form">
          <div class="card-body p-0">
            <form id="search-form">
              <div class="row">
                <div class="col-12">
                  <div class="row no-gutters">
                    <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                      <label for="search-type" hidden>
                        검색 유형
                      </label>
                      <select
                        class="form-control"
                        id="search-type"
                        name="searchType"
                      >
                        <option>제목</option>
                        <option>본문</option>
                        <option>id</option>
                        <option>닉네임</option>
                        <option>해시태그</option>
                      </select>
                    </div>
                    <div class="col-lg-8 col-md-6 col-sm-12 p-0">
                      <label for="search-value" hidden>
                        검색어
                      </label>
                      <input
                        type="text"
                        placeholder="검색어..."
                        class="form-control"
                        id="search-value"
                        name="searchValue"
                      />
                    </div>
                    <div class="col-lg-1 col-md-3 col-sm-12 p-0">
                      <button type="submit" class="btn btn-base">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-search"
                        >
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="row">
        <table class="table" id="article-table">
          <thead>
            <tr>
              <th class="title col-6">
                <a>제목</a>
              </th>
              <th class="hashtag col-2">
                <a>해시태그</a>
              </th>
              <th class="user-id">
                <a>작성자</a>
              </th>
              <th class="created-at">
                <a>작성일</a>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="title">
                <a>첫글</a>
              </td>
              <td class="hashtag">#java</td>
              <td class="user-id">Uno</td>
              <td class="created-at">
                <time>2022-01-01</time>
              </td>
            </tr>
            <tr>
              <td>두번째글</td>
              <td>#spring</td>
              <td>Uno</td>
              <td>
                <time>2022-01-02</time>
              </td>
            </tr>
            <tr>
              <td>세번째글</td>
              <td>#java</td>
              <td>Uno</td>
              <td>
                <time>2022-01-03</time>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="row">
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <Button onClick={writeReview}>리뷰 작성</Button>
        </div>
      </div>

      <div class="row">
        <nav id="pagination" aria-label="Page navigation">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <a class="page-link" href="#">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default ReviewBoradPage;
