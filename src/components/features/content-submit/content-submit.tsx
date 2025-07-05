'use client'

import { useState } from 'react'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Button } from '@/components/ui/forms/button'
import { Input } from '@/components/ui/forms/input'
import { Textarea } from '@/components/ui/forms/textarea'
import { messages } from '@/messages'
import { ContentProposalsAPI } from '@/redux/services/content-proposals/content-proposals.api'
import { CreateProposalsInputs } from '@/redux/services/content-proposals/content-proposals.types'

export const ContentSubmit = () => {
    const [status, setStatus] = useState<string | null>(null)
    const [createProposal, { isLoading }] = ContentProposalsAPI.useCreateProposalMutation()

    const validationSchema = Yup.object().shape({
        url: Yup.string().trim().url('Введите корректный URL').required('Ссылка на видео обязательна'),
        text: Yup.string()
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
            console.error(messages.COMMON_ERROR)
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
                <label className="text-sm font-semibold text-gray-700">Ссылка на видео</label>
                <Input
                    name="url"
                    value={formik.values.url}
                    error={formik.errors.url}
                    disabled={isLoading}
                    onChange={formik.handleChange}
                />
            </div>

            <div className="flex flex-col gap-y-2">
                <label className="text-sm font-semibold text-gray-700">Описание видео</label>
                <Textarea
                    name="text"
                    autoFocus
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
