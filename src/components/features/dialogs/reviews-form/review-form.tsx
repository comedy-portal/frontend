'use client'

import { Button, Form } from 'react-bootstrap'

import { ReviewFormRating } from './components/review-form-rating'

export const ReviewForm = () => {
    return (
        <Form noValidate className="flex flex-col gap-y-6 sm:w-104">
            <div>
                <h4 className="mb-4!">Моя рецензия</h4>
                <hr className="m-0!" />
            </div>

            <ReviewFormRating />

            <Form.Group controlId="signUpEmail">
                <Form.Label className="">Напишите свой отзыв</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={6}
                    type="text"
                    name="review"
                    value=""
                    disabled={false}
                    className="resize-none!"
                    // isInvalid={!!errors.email}
                    // onChange={e => setEmail(e.target.value)}
                />
                {/* <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback> */}
            </Form.Group>

            <div className="flex gap-x-2">
                <Button variant="primary" type="submit" disabled={false}>
                    Сохранить
                </Button>
                <Button variant="outline-secondary" disabled={false}>
                    Отменить
                </Button>
            </div>
        </Form>
    )
}
