export interface StartshipsGetParams {
    page?: number;
    search?: string;
}

export interface IStarship {
    name: string;
    model: string;
    MGLT: string;
    consumables: string; 
    stopsNeeded?: string | boolean;
}

export interface IStarshipServiceResponse {
    data?: {
        count: number;
        next: string | null;
        previous: string | null;
        results: IStarship[];
    };
    errorMessage?: string;
    success: boolean;
}
