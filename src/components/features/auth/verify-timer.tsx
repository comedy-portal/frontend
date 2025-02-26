import { useEffect, useState } from 'react'

type VerifyTimerProps = {
    onResendOtp: () => void
}

const INTERVAL = 60

export const VerifyTimer = ({ onResendOtp }: VerifyTimerProps) => {
    const [timeLeft, setTimeLeft] = useState<number>(INTERVAL)

    useEffect(() => {
        if (timeLeft === 0) {
            return
        }

        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1)
        }, 1000)

        return () => clearInterval(intervalId)
    }, [timeLeft])

    const handleResendOtp = () => {
        setTimeLeft(INTERVAL)
        onResendOtp()
    }

    return (
        <div className="text-sm text-gray-500">
            {timeLeft === 0 ? (
                <div className="cursor-pointer hover:text-gray-600" onClick={handleResendOtp}>
                    Отправить код повторно
                </div>
            ) : (
                <span>Новый код через {timeLeft}</span>
            )}
        </div>
    )
}
