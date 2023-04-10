import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        background: ${({ theme }) => theme.colors.body};
        ::-webkit-scrollbar{
            display: none;
        }
    }
`;
