import React, { useState } from "react"
import { CardContent } from "../../components/Card"

import { FlexContainer } from "../../components/FlexContainer"
import InputText from "../../components/InputText"
import { Starships } from "../../services"
import { FlexAlignments, FlexDirections } from "../../types/flex"
import { IStarship } from "../../types/startshipsService"
import { ResultFlexContainer, StarshipCard, TextWithBackground } from "./styles"
import { calculateStopsNeeded } from "./utils"

const MainPage: React.FC = () => {
    const [mglt, setmglt] = useState<string>()
    const [starshipsCalculated, setstarshipsCalculated] = useState<IStarship[]>([])

    return (
        <>
            <FlexContainer
                id={"main"}
                justify={FlexAlignments.CENTER}
                align={FlexAlignments.CENTER}
                direction={FlexDirections.COLUMN}
                height={"100vh"}
            >
                <p>
                    Write down bellow a value in MGLT (Mega lights)
                </p>
                <InputText
                    value={mglt}
                    onInputTextChange={setmglt}
                />
                <button
                    onClick={async (e) => {
                        e.preventDefault()
                        const starships = await Starships.getAll()
                        const starshipsCalculated = starships?.map((starship) => {
                            return {
                                ...starship,
                                stopsNeeded: calculateStopsNeeded(starship, 1000000)
                            }
                        })
                        setstarshipsCalculated(starshipsCalculated)
                        setTimeout(() => {
                            document.querySelector("#results")?.scrollIntoView()
                        }, 300)
                    }}
                >
                    calculate
                </button>
                <FlexContainer
                    customStyles={{
                        background: "#FFFFF"
                    }}
                >
                    <span>2021 - igor câmara - background credits: <a href='https://br.freepik.com/vetores/fundo'>Fundo vetor criado por tartila - br.freepik.com</a></span>
                </FlexContainer>
            </FlexContainer>
            {
            starshipsCalculated.length > 0 &&
                <div
                    id="results"
                >
                    <TextWithBackground>
                        - Resultados -
                    </TextWithBackground>
                    <ResultFlexContainer
                        justify={FlexAlignments.CENTER}
                        align={FlexAlignments.CENTER}
                        direction={FlexDirections.ROW}
                    >
                        {
                            starshipsCalculated.map((starship, index) => 
                                <StarshipCard
                                    key={starship.name+index}
                                >
                                    <CardContent>
                                        <h4>{starship.name}</h4>
                                        <span><b>{starship.model}</b></span>
                                        <span>{starship.stopsNeeded
                                            ? `Stops needed to complete de journey: ${starship.stopsNeeded}`
                                            : 'Not enough information to calculate'
                                        }</span>
                                    </CardContent>

                                </StarshipCard>
                            )
                        }
                    </ResultFlexContainer>
                </div>
            }
        </>
    )
}

export default MainPage
