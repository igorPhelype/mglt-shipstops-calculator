import { Starships } from ".";
import API from "../api";
import { StartshipsGetParams, IStarshipServiceResponse, IStarship } from "../types/startshipsService";

export const get = async (params: StartshipsGetParams = {
    page: 1,
}): Promise<IStarshipServiceResponse> => {
    try{
        const urlParams = new URLSearchParams()
        params?.page && urlParams.append("page", params.page?.toString())
        params?.search && urlParams.append("search", params.search || "")
        return await API.get('starships', {
            params: urlParams
        }).then((response) => {
            return {
                success: true,
                data: response.data,
            }
        })
    }catch(e){
        return {
            success: false,
            errorMessage: e.message,
        }
    }
}
export const getAll = async (params: StartshipsGetParams = {
    page: 1,
}): Promise<IStarship[]> => {
    const starships: IStarship[] = []
    try{
        let page = 1
        let response: IStarshipServiceResponse = await get({ page })
        while(response.data?.next !== null){
            response.data?.results && starships.push(...response.data.results)
            page++
            response = await get({ page })
        }
        return starships
    }catch(e){
        return starships
    }
}
