import { ReactNode } from "react";
import styled from 'styled-components'

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <StyledGrid>
            <StyledHeader>
                <img src='logo.png' alt='Equilibrium Energy' />
                <h4>Castor Odell take-home submission</h4>
            </StyledHeader>
            <section>
                {children}
            </section>
        </StyledGrid>
    )

}

const StyledGrid = styled.main`
    background-color: white;
    display: grid;
    font-family: sans-serif;
    grid-template-rows: auto 1fr;
`

const StyledHeader = styled.header`
    align-items: center;
    background-color: #555;
    color: #eee;
    column-gap: 1rem;
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
    img {
        height: 4rem;
    }
    @media (max-width: 720px) {
        padding: 1rem;
        img {
          height: 2rem;
        }
        h4 {
            font-size: 0.75em;
        }
    }
`