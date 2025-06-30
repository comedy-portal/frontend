import { LandingNew } from './landing-new'
import { LandingRecommended } from './landing-recommended'

export const Landing = () => {
    return (
        <div className="wrapper-lg py-8 sm:py-16">
            <div className="flex flex-col gap-y-4 sm:gap-y-8">
                <LandingNew />
                <LandingRecommended />
            </div>
        </div>
    )
}
