import styled from "styled-components";
export const Main = styled.div`
  padding: 50px 100px;
  color: #8892b0;
  h1 {
    font-weight: 800;
    background: #000;
    -webkit-text-fill-color: transparent;
    color: #fff;
    animation: colors 10s linear infinite;
    @keyframes colors {
      0% {
        background: linear-gradient(90deg, #00dbde 0%, #fc00ff 100%);
        -webkit-background-clip: text;
      }

      25% {
        background: linear-gradient(
          225deg,
          #ff3cac 0%,
          #784ba0 50%,
          #2b86c5 100%
        );
        -webkit-background-clip: text;
      }
      50% {
        background: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
        -webkit-background-clip: text;
      }

      75% {
        background: linear-gradient(to right, #e96443, #904e95);
        -webkit-background-clip: text;
      }
      100% {
        background: linear-gradient(
          109.6deg,
          rgba(61, 245, 167, 1) 11.2%,
          rgba(9, 111, 224, 1) 91.1%
        );
        -webkit-background-clip: text;
      }
    }
  }
  p {
    font-size: 20px;
    color: #fff;
  }
  @media (max-width: 800px) {
    padding: 20px;
  }
`;
