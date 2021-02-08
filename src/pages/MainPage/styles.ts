import styled from "styled-components";
import { StyledCard } from "../../components/Card/styles";
import { StyledFlexContainer } from "../../components/FlexContainer/styles";

export const ResultFlexContainer = styled(StyledFlexContainer)`
    width: "100%";
    overflow: auto;
    flex-wrap: wrap;
    background: url("bg.jpg");
    background-position: center;
    background-size: contain;
    padding: 64px 0;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    @media only screen and (max-width: 767px) {
        padding: 4px 12px;
    }
`

export const StarshipCard = styled(StyledCard)`
    height: 200px;
    width: 320px;
    margin: 16px;
    border-radius: 5px;
    border-top: solid 3px #bfae1c;
    @media only screen and (max-width: 425px) {
        width: 100%;
        margin: 8px 0;
    }
`

export const TextWithBackground = styled.div`
    font-family: "StarJediHol";
    background: #1b1b1b;
    width: 100%;
    color: #bfae1c;
    display: inline-block;
    text-align: center;
    padding: 32px 0;
    font-size: 1.9rem;
    font-weight: bold;
`
