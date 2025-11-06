import { MdHome } from 'react-icons/md';

export default function Navigation() {
    // Sidebar navigation links (icons only)

// Social links (bottom of sidebar)
const socialLinks = [
    { href: 'https://instagram.com', icon: '/icons/instagram.svg', label: 'Instagram' },
    { href: 'https://facebook.com', icon: '/icons/facebook.svg', label: 'Facebook' },
    { href: 'https://twitter.com', icon: '/icons/twitter.svg', label: 'Twitter' },
];

return (
    <aside className="fixed left-0 top-0 h-full w-20 bg-black border-r border-gray-900 flex flex-col justify-between items-center py-8 z-50">
        <div className="flex flex-col gap-8 items-center">
            {/* Main nav icons */}
            <li
                className="group flex flex-col items-center justify-center w-12 h-12 rounded-lg hover:bg-gray-900 transition-colors"
            >
                <MdHome />
            </li>
            <li
                className="group flex flex-col items-center justify-center w-12 h-12 rounded-lg hover:bg-gray-900 transition-colors"
            >
                <MdHome />
            </li>
            <li
                className="group flex flex-col items-center justify-center w-12 h-12 rounded-lg hover:bg-gray-900 transition-colors"
            >
                <MdHome />
            </li>
            <li
                className="group flex flex-col items-center justify-center w-12 h-12 rounded-lg hover:bg-gray-900 transition-colors"
            >
                <MdHome />
            </li>
            <li
                className="group flex flex-col items-center justify-center w-12 h-12 rounded-lg hover:bg-gray-900 transition-colors"
            >
                <MdHome />
            </li>
        </div>
        <div className="flex flex-col gap-4 items-center mb-2">
            {/* Social icons */}
            {socialLinks.map((link) => (
                <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-8 h-8 rounded-full bg-transparent hover:bg-gray-900 transition-colors"
                    title={link.label}
                >
                    <img src={link.icon} alt={link.label} className="w-5 h-5" />
                </a>
            ))}
        </div>
    </aside>
);
}