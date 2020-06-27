import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.primary};
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  .sidebar {
    background-color: ${({ theme }) => theme.body};
  }

  .navbar{
    background-color: ${({ theme }) => theme.navbar};
  }

  .avatarbg{
    background-color: ${({ theme }) => theme.navbar};

  }

  .sideborder{
    border-color: ${({ theme }) => theme.navbar};
  }

  .bg-primary {
    background-color: ${({ theme }) => theme.primary};
  }

  .bg-secondary {
    background-color: ${({ theme }) => theme.secondary};
  }

  .bg {
    background-color: ${({ theme }) => theme.body};
  }

  .text-primary {
    color: ${({ theme }) => theme.primary};
  }

  .text-secondary {
    color: ${({ theme }) => theme.secondary};
  }

  .text-default {
    color: ${({ theme }) => theme.default};
  }

  .text-black {
    color: #000;
  }

  .text-white {
    color: #fff;
  }

  .selectedlink {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.body};
  }

  .navlink {
    color: ${({ theme }) => theme.primary};
    :hover {
      background-color: ${({ theme }) => theme.body};

    }
  }

  .socialicon{
    color: ${({ theme }) => theme.primary};
    :hover {
      color: ${({ theme }) => theme.secondary};
    }
  }

}

`
