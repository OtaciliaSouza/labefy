import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    margin-top: 14%;
    width: 60%;
    background-color: #333333;
    border-width: 0px 0px 1px;
    border-color:black;
    padding: 1rem 0.5rem 0.2rem;
    margin-bottom: 2rem;
    color: #000000;

    ::placeholder {
      color: #ffffff;
      font-size: 1.2rem;
    }
  }

  h2 {
    padding-top: 5rem;
    font-size: 3rem;
  }

  button {
    width: 16%;
    border: none;
    border-radius: 4px;
    padding: 1rem 2rem;
    color: #ffffff;
    background-color: #666666
    ;
    margin-bottom: 1rem;
  }

  button:nth-child(3) {
    background-color: #666666;
  }
`;

const Text = styled.div`
  margin: 2rem;

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    line-height: 1.5rem;
  }
`;

export { MainContainer, Text };
