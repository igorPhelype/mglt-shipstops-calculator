import React, { useState } from "react"
import { Button } from "../../components/Button"
import { CardContent } from "../../components/Card"

import { FlexContainer } from "../../components/FlexContainer"
import InputText from "../../components/InputText"
import Loader from "../../components/Loader"
import { Starships } from "../../services"
import { FlexAlignments, FlexDirections } from "../../types/flex"
import { IStarship } from "../../types/startshipsService"
import { ResultFlexContainer, StarshipCard, TextWithBackground } from "./styles"
import { calculateStopsNeeded } from "./utils"

const MainPage: React.FC = () => {
    const [mglt, setmglt] = useState<string>()
    const [starshipsCalculated, setstarshipsCalculated] = useState<IStarship[]>([])
    const [error, seterror] = useState<string>("")
    const [loading, setloading] = useState<boolean>(false)

    const handleMGLTInputChange = (value: string) => {
        setmglt(value)
        seterror("")
    }
    const handleCalculateButton = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
        setloading(true)
        e.preventDefault()
        try{
            if(!(mglt && Number(mglt) > 0)){
                throw new Error("mglt must be a number and larger than zero")
            }
            const starships = await Starships.getAll()
            const starshipsCalculated = starships?.map((starship) => {
                return {
                    ...starship,
                    stopsNeeded: calculateStopsNeeded(starship, Number(mglt))
                }
            })
            setstarshipsCalculated(starshipsCalculated)
            setTimeout(() => {
                document.querySelector("#results")?.scrollIntoView()
                setloading(false)
            }, 500)
        }catch(e){
            setloading(false)
            seterror(e.message)
        }
    }

    return (
        <>
            <FlexContainer
                id={"main"}
                justify={FlexAlignments.SPACE_EVENLY}
                align={FlexAlignments.CENTER}
                direction={FlexDirections.COLUMN}
                height={"100vh"}
            >
                <FlexContainer
                    justify={FlexAlignments.CENTER}
                    align={FlexAlignments.CENTER}
                    direction={FlexDirections.COLUMN}
                >
                    <h4>
                        Write down bellow a value in MGLT (Mega lights)
                    </h4>
                    <InputText
                        value={mglt}
                        onInputTextChange={handleMGLTInputChange}
                        error={error}
                    />
                    <Button
                        onClick={handleCalculateButton}
                    >
                        calculate
                    </Button>
                    <Loader
                        loading={loading}
                    />
                </FlexContainer>
                <FlexContainer>
                    <span>2021 - igor guimarães - background credits: <a target="_blank" rel="noreferrer" href='https://br.freepik.com/vetores/fundo'>Fundo vetor criado por tartila - br.freepik.com</a></span>
                </FlexContainer>
            </FlexContainer>
            {
            starshipsCalculated.length > 0 &&
                <div
                    id="results"
                >
                    <TextWithBackground>
                        - starships results -
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
                                        <br/>
                                        <span><b>MGLT per hour:</b> {starship.MGLT}</span>
                                        {starship.consumables !== "unknown" && <span>The ship should last <b>{starship.consumables}</b> without having to resupply</span>}
                                        <span>{starship.stopsNeeded
                                            ? <><b>Stops needed to complete de journey:</b> {starship.stopsNeeded}</>
                                            : 'There is not enough information to calculate the number of stops needed'
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
