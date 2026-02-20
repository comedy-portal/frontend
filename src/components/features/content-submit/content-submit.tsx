'use client'

import { useState } from 'react'

import { useFormik } from 'formik'
import * as yup from 'yup'

import Link from 'next/link'

import { useToast } from '@/components/providers/toast-provider'
import { Button } from '@/components/ui/forms/button'
import { Input } from '@/components/ui/forms/input'
import { Textarea } from '@/components/ui/forms/textarea'
import { messages } from '@/messages'
import { ContentProposalsAPI } from '@/utils/redux/services/content-proposals/content-proposals.api'
import { CreateProposalsInputs } from '@/utils/redux/services/content-proposals/content-proposals.types'

export const ContentSubmit = () => {
    const toast = useToast()
    const [status, setStatus] = useState<string | null>(null)
    const [createProposal, { isLoading }] = ContentProposalsAPI.useCreateProposalMutation()

    const validationSchema = yup.object().shape({
        url: yup.string().trim().url('Введите корректный URL').required('Ссылка на видео обязательна'),
        text: yup
            .string()
            .trim()
            .min(20, `Минимальная длина текста отзыва 20 символов`)
            .max(500, `Максимальная длина текста отзыва 500 символов`),
    })

    const initialValues: CreateProposalsInputs = {
        url: '',
        text: '',
    }

    const handleSubmit = async (inputs: CreateProposalsInputs) => {
        try {
            const trimmedInputs = {
                url: inputs.url.trim(),
                ...(inputs.text?.trim().length ? { text: inputs.text.trim() } : {}),
            }
            createProposal(trimmedInputs)
            setStatus('CONTENT_PROPOSAL_CREATED')
        } catch {
            toast.error(messages.COMMON_ERROR, messages.COMMON_ERROR_MESSAGE)
        }
    }

    const formik = useFormik({
        initialValues,
        validateOnBlur: false,
        validateOnChange: false,
        validationSchema,
        onSubmit: handleSubmit,
    })

    const handleSendAgainButtonClick = () => {
        setStatus(null)
        formik.resetForm()
    }

    if (status === 'CONTENT_PROPOSAL_CREATED') {
        return (
            <div className="flex w-full flex-col gap-y-4 sm:w-104">
                <h1 className="text-lg font-semibold">Спасибо за предложение!</h1>
                <p className="text-gray-600">Ваше предложение было успешно отправлено на рассмотрение.</p>
                <div className="mt-4">
                    <Button size="sm" onClick={handleSendAgainButtonClick}>
                        Отправить еще одно предложение
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <form className="flex flex-col gap-y-8" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-y-2">
                <label className="text-sm font-semibold text-gray-700">Ссылка на видео/комика/площадку</label>
                <Input
                    name="url"
                    autoFocus
                    value={formik.values.url}
                    error={formik.errors.url}
                    disabled={isLoading}
                    onChange={formik.handleChange}
                />
            </div>

            <div className="flex flex-col gap-y-2">
                <label className="text-sm font-semibold text-gray-700">Описание</label>
                <Textarea
                    name="text"
                    rows={12}
                    value={formik.values.text}
                    error={formik.errors.text}
                    disabled={isLoading}
                    onChange={formik.handleChange}
                />
            </div>

            <div className="flex gap-x-2">
                <Button type="submit" disabled={isLoading || !formik.dirty}>
                    Отправить предложение
                </Button>
            </div>
        </form>
    )
}
