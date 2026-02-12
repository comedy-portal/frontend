export type GetUserDataResponse = {
    id: number
    username: string
    metaInfo: {}
    createdAt: Date
    lastEventId: number | null
}

export type ChangeUserNameInputs = {
    username: string
}

export type ChangeUserNameInputsResponse = {
    status: 'OK' | 'USERNAME_ALREADY_EXISTS_ERROR'
}

export type ChangeUserEmailInputs = {
    newEmail: string
}

export type ConfirmUserDeletionInputs = {
    token: string
}

export type RestoreUserInputs = {
    token: string
}

export type ChangeUserEmailResponse = {
    status: 'OK' | 'EMAIL_ALREADY_VERIFIED_ERROR' | 'EMAIL_ALREADY_EXISTS_ERROR'
}

export type ConfirmUserDeletionResponse = {
    status: 'OK' | 'INVALID_TOKEN_ERROR'
}

export type RestoreUserResponse = {
    status: 'OK' | 'INVALID_TOKEN_ERROR'
}
