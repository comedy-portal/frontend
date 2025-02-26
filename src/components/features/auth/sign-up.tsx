'use client'

import { useState } from 'react'

import { createCode } from 'supertokens-web-js/recipe/passwordless'

import { SignUpForm } from './sign-up-form'
import { Verify } from './verify'

export const SignUp = () => {
    const [email, setEmail] = useState<string>('')
    const [status, setStatus] = useState<string>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleSignUp = async (formData: FormData) => {
        setIsLoading(true)
        try {
            const email = formData.get('email') as string
            const response = await createCode({ email })
            setEmail(email)
            setStatus(response.status)
        } catch {
            setStatus('GENERAL_ERROR')
        } finally {
            setIsLoading(false)
        }
    }

    const handleBack = () => {
        setStatus(undefined)
    }

    if (status === 'OK') {
        return <Verify email={email} onBack={handleBack} />
    }

    return <SignUpForm status={status} isLoading={isLoading} onSignUp={handleSignUp} />
}
