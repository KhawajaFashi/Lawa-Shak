import { MdHome } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { PiChefHatBold } from "react-icons/pi";
import { SiMinutemailer } from "react-icons/si";
import { FaFacebook, FaInstagram, FaQuestion, FaTiktok } from "react-icons/fa";
import Link from "next/link";

export default function Navigation() {
    return (
        <aside className="fixed max-lg:hidden left-0 top-0 h-full w-20 bg-(--nav-background) border-r border-orange-400 flex flex-col justify-between items-center py-10 z-50 shadow-[4px_0_25px_rgba(0,0,0,0.6)] overflow-hidden">

            {/* Main Navigation Icons */}
            <nav>
                <ul className="flex flex-col items-center gap-6">

                    <Link href="/#home">
                        <button
                            aria-label="Home"
                            className="nav-icon"
                        >
                            <MdHome size={20} />
                        </button>
                    </Link>

                    <Link href="/#about">
                        <button aria-label="About" className="nav-icon">
                            <IoPeople size={20} />
                        </button>
                    </Link>

                    <Link href="/#ingredients">
                        <button aria-label="Chefs" className="nav-icon">
                            <PiChefHatBold size={22} />
                        </button>
                    </Link>

                    <Link href="/#contact">
                        <button aria-label="Contact" className="nav-icon">
                            <SiMinutemailer size={20} />
                        </button>
                    </Link>
                    <Link href="/#faq">
                        <button aria-label="Contact" className="nav-icon">
                            <FaQuestion size={20} />
                        </button>
                    </Link>

                </ul>
            </nav>

            {/* Social Media Icons */}
            <div className="flex flex-col items-center gap-6 pb-2">
                <button aria-label="Instagram" className="nav-icon">
                    <FaInstagram size={20} />
                </button>

                <button aria-label="Facebook" className="nav-icon">
                    <FaFacebook size={20} />
                </button>

                <button aria-label="Tiktok" className="nav-icon">
                    <FaTiktok size={20} />
                </button>
            </div>
        </aside>
    );
}
