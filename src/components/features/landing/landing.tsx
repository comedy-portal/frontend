import { LandingComedian } from './landing-comedian'
import { LandingHero } from './landing-hero'
import { LandingNew } from './landing-new'
import { LandingRecommended } from './landing-recommended'

export const Landing = () => {
    return (
        <div className="flex flex-col gap-y-12">
            <LandingHero />
            <LandingNew />
            <LandingRecommended />
            <LandingComedian />
        </div>
    )
}
