import styled from "styled-components";

export const Container = styled.div`
  max-width: 100% !important;
`;

export const BoxInput = styled.div`
  width: 100%;
  padding: 0.625rem;
`;

export const Text = styled.label`
  font-family: inter;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 2px;
  color: #2f3237;
`;

export const Title = styled.p`
  display: flex;
  font-family: inter;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 20px;
  color: #2f3237;
`;

export const Price = styled.p`
  max-width: 90% !important;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding: 5px;
  font-family: inter;
  font-size: 18px;
  font-weight: 400;
  color: #666666;
`;
