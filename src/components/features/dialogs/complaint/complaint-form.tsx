'use client'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Button } from '@/components/ui/forms/button'
import { Input } from '@/components/ui/forms/input'
import { Radio } from '@/components/ui/forms/radio'
import { complaintReasons } from '@/messages'
import { ReviewComplaintInputs } from '@/redux/services/reviews/reviews.types'
import { ComplaintReasons } from '@/utils/enums/common'
import { useDialog } from '@/utils/providers/dialog-provider'

type ComplaintFormProps = {
    initialValues: ReviewComplaintInputs
    isLoading: boolean
    onSubmit: (inputs: ReviewComplaintInputs) => Promise<void>
}

export const ComplaintForm = ({ initialValues, isLoading, onSubmit }: ComplaintFormProps) => {
    const dialog = useDialog()

    const reasons = Object.values(ComplaintReasons)

    const validationSchema = Yup.object().shape({
        text: Yup.string()
            .trim()
            .min(20, `Минимальная длина текста жалобы 20 символов`)
            .max(500, `Максимальная длина текста жалобы 500 символов`),
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
                <div className="flex flex-col gap-y-2">
                    {reasons.map(reason => (
                        <Radio
                            key={reason}
                            id={reason}
                            name="reason"
                            value={reason}
                            checked={formik.values.reason === reason}
                            onChange={formik.handleChange}
                        >
                            {complaintReasons[reason]}
                        </Radio>
                    ))}
                </div>

                <Input
                    type="text"
                    name="text"
                    value={formik.values.text}
                    placeholder="Введите текст жалобы..."
                    error={formik.errors.text}
                    onChange={formik.handleChange}
                />
            </div>
            <div className="flex gap-x-2">
                <Button type="submit" disabled={isLoading}>
                    Отправить жалобу
                </Button>
                <Button variant="outline" disabled={isLoading} onClick={() => dialog.close()}>
                    Отменить
                </Button>
            </div>
        </form>
    )
}
