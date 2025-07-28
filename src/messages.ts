import { ComplaintReasons } from './utils/enums/common'

export const messages = {
    COMMON_ERROR: 'Ошибка',
    COMMON_ERROR_MESSAGE: 'Что-то пошло не так. Попробуйте позже.',
}

export const complaintReasons = {
    [ComplaintReasons.ABUSE]: 'Оскорбление',
    [ComplaintReasons.BIASED]: 'Предвзятость',
    [ComplaintReasons.FRAUD]: 'Мошенничество',
    [ComplaintReasons.OFF_TOPIC]: 'Не по теме',
    [ComplaintReasons.OTHER]: 'Другое',
    [ComplaintReasons.SPAM]: 'Спам',
    [ComplaintReasons.SPOILERS]: 'Спойлеры',
}
