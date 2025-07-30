export type ChangeUserNameInputs = {
    username: string
}

export type RequestUserEmailChangeInputs = {
    newEmail: string
}

export type RequestUserEmailChangeResponse = {
    status: 'OK' | 'EMAIL_ALREADY_EXISTS_ERROR'
}

export type ChangeUserEmailInputs = {
    token: string
}

export type ChangeUserEmailResponse = {
    status: 'OK' | 'INVALID_TOKEN_ERROR'
}
