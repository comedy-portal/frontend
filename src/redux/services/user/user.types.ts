export type ChangeUserNameInputs = {
    username: string
}

export type ChangeUserNameInputsResponse = {
    status: 'OK' | 'USERNAME_ALREADY_EXISTS_ERROR'
}

export type ChangeUserEmailInputs = {
    newEmail: string
}

export type ChangeUserEmailResponse = {
    status: 'OK' | 'EMAIL_ALREADY_VERIFIED_ERROR' | 'EMAIL_ALREADY_EXISTS_ERROR'
}
