import {
    useQuery,
    useMutation,
    queryClient
} from '@tanstack/react-query'

import { getComments } from '../api/getComments'
import QUERY_KEYS from './queryKey'


export const useGetComments = (eventId) => useQuery({
    queryKey: [QUERY_KEYS.GET_EVENT_COMMENTS, eventId],
    queryFn:() => getComments(eventId),
    enabled: !!eventId
})

