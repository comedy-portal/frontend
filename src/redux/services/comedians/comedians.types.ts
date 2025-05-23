import { IComedian } from '@/utils/types/comedians'
import { PaginatedResponse } from '@/utils/types/common'

export type GetComediansParams = {
    cursor?: number
}

export type GetComediansResponse = PaginatedResponse<IComedian>
