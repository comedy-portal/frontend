'use client'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Button } from '@/components/ui/forms/button'
import { Textarea } from '@/components/ui/forms/textarea'
import { RatingBar } from '@/components/ui/rating-bar/rating-bar'
import { CreateReviewInputs, UpdateReviewInputs } from '@/redux/services/reviews/reviews.types'
import { useDialog } from '@/utils/providers/dialog-provider'

type ReviewFormProps = {
    initialValues: CreateReviewInputs | UpdateReviewInputs
    isLoading: boolean
    onSubmit: (data: CreateReviewInputs | UpdateReviewInputs) => void
}

export const ReviewForm = ({ initialValues, isLoading, onSubmit }: ReviewFormProps) => {
    const dialog = useDialog()

    const validationSchema = Yup.object().shape({
        mark: Yup.number().min(1, 'Рейтинг обязателен').required('Рейтинг обязателен'),
        text: Yup.string()
            .trim()
            .min(20, `Минимальная длина текста отзыва 20 символов`)
            .max(500, `Максимальная длина текста отзыва 500 символов`),
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
                        value={formik.values.text || ''}
                        error={formik.errors.text}
                        disabled={isLoading}
                        onChange={formik.handleChange}
                    />
                </div>
            </div>

            <div className="flex gap-x-2">
                <Button type="submit" disabled={isLoading || !formik.dirty}>
                    Сохранить
                </Button>
                <Button variant="outline" disabled={isLoading} onClick={() => dialog.close()}>
                    Отменить
                </Button>
            </div>
        </form>
    )
}
