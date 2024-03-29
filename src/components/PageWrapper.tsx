import { NavBar } from "./NavBar"

interface Props {
    children: React.ReactNode;
}

export const PageWrapper = ({ children }: Props) => {
    return (
        <div className="bg-white">
            <NavBar />
            <div className="relative isolate px-6 pt-14 lg:px-8">
                {children}
            </div>
        </div>
    )
}