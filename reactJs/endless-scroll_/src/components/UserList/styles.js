import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
    color: #333;
  }

  button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px 0;
    transition: background-color 0.3s;

    &:hover {
      background-color: #2980b9;
    }

    &:disabled {
      background-color: #bdc3c7;
      cursor: not-allowed;
    }
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid #eee;

      &:last-child {
        border-bottom: none;
      }

      img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin-right: 15px;
      }

      p {
        margin: 0;
        color: #555;

        &:first-child {
          font-weight: bold;
        }
      }
    }
  }

  .error {
    color: red;
    text-align: center;
  }
`;
