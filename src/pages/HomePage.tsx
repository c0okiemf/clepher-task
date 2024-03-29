import { navigation } from '../navigation'
import { PageWrapper } from '../components/PageWrapper'

export const HomePage = () => {
    return (
        <PageWrapper>
            <div className="mx-auto max-w-2xl py-32 sm:py-48">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Data to enrich your online business
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        By harnessing the right data, businesses can uncover hidden opportunities, personalize customer experiences, and make informed decisions that propel them ahead of the competition. It’s about turning raw data into actionable strategies that not only optimize operations but also create a more engaging and responsive online presence.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href={navigation.forex.href}
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get started
                        </a>
                        <a href="https://en.wikipedia.org/wiki/Foreign_exchange_market" className="text-sm font-semibold leading-6 text-gray-900" target="__blank" rel="noopener noreferrer">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}
