import {
    useQuery,
    useMutation,
    queryClient
} from '@tanstack/react-query'

import { getComments } from '../api/getComments'
import QUERY_KEYS from './queryKey'
import getEvents from '../api/apiEvents'


export const useGetComments = (eventId) => useQuery({
    queryKey: [QUERY_KEYS.GET_EVENT_COMMENTS, eventId],
    queryFn:() => getComments(eventId),
    enabled: !!eventId
})

export const useGetEvents = () => {
    // queryKey: [QUERY_KEYS.GET_ALL_TIMELINE_EVENTS_DATA],
    // queryFn: () => getEvents(),

    return useQuery({
        queryKey: [QUERY_KEYS.GET_ALL_TIMELINE_EVENTS_DATA],
        queryFn: getEvents,
    })
}

