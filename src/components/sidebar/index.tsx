import './style.css'

interface SidebarProps {
    isOpen: boolean
    toggle: any
}

const Sidebar = ({ isOpen, toggle }: SidebarProps) => {
    return (
        <>
            <button className="toggle-button" onClick={toggle}>
                ☰
            </button>
            <div className={isOpen ? 'sidebar open' : 'sidebar'}>
                <ul className="sidebar-menu">
                    <li>
                        <a href="/">Página Inicial</a>
                    </li>
                    <li>
                        <a href="/lvl150">Level 0-150</a>
                    </li>
                    <li>
                        <a href="/lvl200">Level 150-200</a>
                    </li>
                    <li>
                        <a href="/lvl300">Level 200-300</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar
