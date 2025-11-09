import { MdHome } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { PiChefHatBold } from "react-icons/pi";
import { SiMinutemailer } from "react-icons/si";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Navigation() {
    return (
        <aside className="fixed max-lg:hidden left-0 top-0 h-full w-20 bg-(--nav-background) border-r border-orange-400 flex flex-col justify-between items-center py-10 z-50 shadow-[4px_0_25px_rgba(0,0,0,0.6)]">

            {/* Main Navigation Icons */}
            <nav>
                <ul className="flex flex-col items-center gap-6">

                    <li>
                        <button
                            aria-label="Home"
                            className="nav-icon"
                        >
                            <MdHome size={20} />
                        </button>
                    </li>

                    <li>
                        <button aria-label="About" className="nav-icon">
                            <IoPeople size={20} />
                        </button>
                    </li>

                    <li>
                        <button aria-label="Chefs" className="nav-icon">
                            <PiChefHatBold size={22} />
                        </button>
                    </li>

                    <li>
                        <button aria-label="Contact" className="nav-icon">
                            <SiMinutemailer size={20} />
                        </button>
                    </li>

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
