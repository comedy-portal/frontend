'use client'

import { Button, Form } from 'react-bootstrap'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { CreateReviewInputs, UpdateReviewInputs } from '@/redux/services/reviews/reviews.types'
import { useDialog } from '@/utils/providers/dialog-provider'

import { ReviewFormRating } from './components/review-form-rating'

type ReviewFormProps = {
    initialValues: CreateReviewInputs | UpdateReviewInputs
    isLoading: boolean
    onSubmit: (data: CreateReviewInputs | UpdateReviewInputs) => void
}

export const ReviewForm = ({ initialValues, isLoading, onSubmit }: ReviewFormProps) => {
    const dialog = useDialog()

    const validationSchema = Yup.object().shape({
        // mark: Yup.number().min(1, t('validation.required')),
        // text: Yup.string()
        //     .trim()
        //     .required(t('validation.required'))
        //     .min(reviewTextMinLength, t('validation.text.minLength', { minLength: reviewTextMinLength }))
        //     .max(reviewTextMaxLength, t('validation.text.maxLength', { maxLength: reviewTextMaxLength })),
    })

    const formik = useFormik({
        initialValues,
        validateOnBlur: false,
        validateOnChange: false,
        validationSchema,
        onSubmit,
    })

    return (
        <Form noValidate className="flex flex-col gap-y-6 sm:w-104" onSubmit={formik.handleSubmit}>
            <div>
                <h2>Моя рецензия</h2>
                <hr />
            </div>

            <ReviewFormRating value={formik.values.mark} onChange={value => formik.setFieldValue('mark', value)} />

            <Form.Group controlId="reviewText">
                <Form.Label>Напишите свой отзыв</Form.Label>
                <Form.Control
                    as="textarea"
                    type="text"
                    rows={6}
                    value={formik.values.text}
                    disabled={isLoading}
                    isInvalid={!!formik.errors.text}
                    className="resize-none"
                    onChange={formik.handleChange}
                />
                <Form.Control.Feedback type="invalid">{formik.errors.text}</Form.Control.Feedback>
            </Form.Group>

            <div className="flex gap-x-2">
                <Button variant="primary" type="submit" disabled={isLoading}>
                    Сохранить
                </Button>
                <Button variant="outline-secondary" disabled={isLoading} onClick={() => dialog.close()}>
                    Отменить
                </Button>
            </div>
        </Form>
    )
}
