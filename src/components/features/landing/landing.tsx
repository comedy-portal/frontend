import { LandingHero } from './landing-hero'
import { LandingNew } from './landing-new'
import { LandingRecommended } from './landing-recommended'

export const Landing = () => {
    return (
        <div>
            <LandingHero />
            <div className="wrapper-lg py-8 sm:py-16">
                <div className="flex flex-col gap-y-6 sm:gap-y-12">
                    <LandingNew />
                    <LandingRecommended />
                </div>
            </div>
        </div>
    )
}
