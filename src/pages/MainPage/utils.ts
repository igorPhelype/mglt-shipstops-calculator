import { Duration } from "luxon";

import { IStarship } from "../../types/startshipsService";

export const calculateStopsNeeded = (starship: IStarship, distanceToTravel: number): string | boolean => {
    const [value, unit] = starship.consumables.split(" ") // value é o valor - unit é unidade de medida (days, months, weeks)
    if(starship.consumables === "unknown" || starship.MGLT === "unknown"){
        return false
    }
    const consumableInHours = Number(
        Duration
            .fromObject({
                [unit]: value
            })
            .toFormat("hh")
    )
    const stopsNeeded = Math.floor(
        (distanceToTravel / Number(starship.MGLT)) / consumableInHours
    ).toString()
    return stopsNeeded
}
