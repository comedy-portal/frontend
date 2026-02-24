import { VenuesControls } from './components/venues-controls/venues-controls'
import { VenuesFeed } from './components/venues-feed'

export const Venues = () => {
    return (
        <div>
            <div className="bg-gray-950 text-white">
                <div className="wrapper relative h-130">
                    <div className="absolute inset-0 bg-[url('/images/venues/hero.jpg')] bg-cover bg-center bg-no-repeat mask-contain mask-no-repeat sm:mask-[linear-gradient(to_right,transparent_0%,black_30%,black_70%,transparent_100%)]"></div>
                    <section className="absolute inset-0 m-auto flex flex-col items-center justify-center space-y-8 px-4 text-center md:w-2/3">
                        <h1 className="text-4xl font-bold md:text-5xl">Площадки</h1>
                        <p className="text-lg">
                            На этой странице собраны стендап клубы, бары и концертные площадки, где регулярно проходят
                            выступления русскоязычных комиков. Здесь Вы найдёте информацию о стендап клубах в разных
                            странах, узнаете, где проходят концерты, открытые микрофоны и туры популярных артистов.
                        </p>
                    </section>
                </div>
            </div>
            <div className="wrapper space-y-6 pt-6 pb-24">
                <VenuesControls />
                <VenuesFeed />
            </div>
        </div>
    )
}
