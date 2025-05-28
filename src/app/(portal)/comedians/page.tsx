import { Comedians } from '@/components/features/comedians/comedians'

export default function ComediansPage() {
    return (
        <div className="flex flex-col gap-y-12">
            <div>
                <div className="flex items-end justify-between">
                    <h1 className="mb-0 text-2xl font-bold">Комики</h1>
                </div>
                <hr />
            </div>

            <Comedians />
        </div>
    )
}
