import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py-16 text-white">
            <div className="container mx-auto flex items-center justify-between">
                {/* logo */}
                <Link href={'/'}>
                    <h1 className="text-4xl font-semibold">Aravind<span className="text-accent">.</span></h1>
                </Link>


                {/* desktop nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href={'/contact'}>
                        <Button>Hire me</Button>
                    </Link>
                </div>

                {/* mobile nav */}
                <div className="flex xl:hidden">
                    <MobileNav />
                </div>

            </div>
        </header>
    )
}
export default Header
