import styled from 'styled-components';

export const Form = styled.form`
  width: 400px;
  border: 1px solid grey;
`;

export const Input = styled.input`
  display: block;
  outline: none;
  border: 1px solid grey;
  border-radius: 4px;

  &:focus {
    border: 1px solid blue;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  border: none;
  height: 35px;
  border-radius: 5px;
  background-color: #87cefa;
  color: #fff;

  &:hover {
    background-color: #4682b4;
  }
`;
