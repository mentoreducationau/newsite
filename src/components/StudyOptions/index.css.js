import styled from "styled-components"

export const CourseOptionContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const IntroContainer = styled.div`
  margin-top: 2rem;

  h3 {
    font-size: 32px;
    color: #333;
    line-height: 38px;
    margin-bottom: 1rem;
  }
  a {
    color: #c0202f;
    text-decoration: underline;
  }
`
export const CourseOptionTable = styled.table`
  margin-top: 2rem;
  background-color: #f1f1f1;
  margin-right: 10px;
  margin-bottom: 2rem;
  height: 100%;
  padding: 40px;
  float: left;
  font-family: "Futura Medium";
  color: #707070;

  tr,
  th {
    vertical-align: top;
    border: none;
  }

  th {
    padding-top: 2rem;
    font-weight: 700;
    font-size: 24px;
    padding-bottom: 10px;
    text-transform: uppercase;
    text-align: center;
  }
  td {
    font-size: 18px;
    line-height: 1.5em;
    padding: 0 1rem;
    vertical-align: top;
  }
  ul {
    margin: 0;
    padding-left: 20px;

    & li {
      display: list-item;
      font-size: 16px;
    }
  }

  .price {
    font-size: 1.6em;
  }
  .oldprice {
    color: #bd212f;
  }
  .booknow {
    text-align: center;
  }

  .nextbtn {
    border-radius: 4px;
    width: 60%;
    cursor: pointer;
    width: 80%;
    line-height: 3em;
    margin: 0 auto;
    padding: 0 5%;
    text-align: center;
    background-color: #c93e38;
    color: #ffffff;
    font-weight: bold;
    border: none;
  }
`
