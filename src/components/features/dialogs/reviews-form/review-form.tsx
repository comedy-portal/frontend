'use client'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { useOverlay } from '@/components/providers/overlay-provider'
import { ExternalLink } from '@/components/ui/external-link'
import { Button } from '@/components/ui/forms/button'
import { Textarea } from '@/components/ui/forms/textarea'
import { RatingBar } from '@/components/ui/rating-bar/rating-bar'
import { CreateReviewInputs, UpdateReviewInputs } from '@/utils/redux/services/reviews/reviews.types'

type ReviewFormProps = {
    initialValues: CreateReviewInputs | UpdateReviewInputs
    isLoading: boolean
    onSubmit: (data: CreateReviewInputs | UpdateReviewInputs) => void
}

export const ReviewForm = ({ initialValues, isLoading, onSubmit }: ReviewFormProps) => {
    const overlay = useOverlay()

    const validationSchema = Yup.object().shape({
        mark: Yup.number().min(1, 'Рейтинг обязателен').required('Рейтинг обязателен'),
        text: Yup.string()
            .trim()
            .min(20, `Минимальная длина текста отзыва 20 символов`)
            .max(2000, `Максимальная длина текста отзыва 2000 символов`),
    })

    const formik = useFormik({
        initialValues,
        validateOnBlur: false,
        validateOnChange: false,
        validationSchema,
        onSubmit,
    })

    return (
        <form className="flex flex-col gap-y-6" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-y-4">
                <RatingBar
                    value={formik.values.mark || 0}
                    caption="Рейтинг"
                    editable
                    error={formik.errors.mark}
                    onChange={newValue => formik.setFieldValue('mark', newValue)}
                />

                <div className="flex flex-col gap-y-2">
                    <label className="font-bold">Отзыв</label>
                    <Textarea
                        name="text"
                        autoFocus
                        placeholder="Введите текст ..."
                        rows={6}
                        maxLength={2000}
                        value={formik.values.text || ''}
                        error={formik.errors.text}
                        disabled={isLoading}
                        onChange={formik.handleChange}
                    />
                </div>

                <p className="text-sm text-gray-500">
                    Рецензия должна соответствовать{' '}
                    <ExternalLink href="/legal/terms-of-use" className="link">
                        правилам
                    </ExternalLink>
                    .
                </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
                <Button type="submit" className="w-full sm:w-auto" disabled={isLoading}>
                    Сохранить
                </Button>
                <Button variant="outline" className="w-full sm:w-auto" disabled={isLoading} onClick={() => overlay.close()}>
                    Отменить
                </Button>
            </div>
        </form>
    )
}
