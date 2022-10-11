import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl:"https://shazam-core.p.rapidapi.com/v1",
        prepareHeaders: (headers)=>{
            headers.set('X-RapidAPI-Key','eea2323f1amshd73156367368367p1a2e17jsn4ff6e884e13f');
            return headers
        }
    }),
    endpoints: (builder)=>({
        getTopCharts: builder.query({query: ()=>'/charts/world'}),
        getSongDetails:builder.query({query: (songid)=>`/tracks/details?track_id=${songid}`})
    })
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
} = shazamCoreApi;