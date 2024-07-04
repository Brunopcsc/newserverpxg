import './style.css'

interface ContentProps {
    title: string
    value?: string
    icon?: JSX.Element
    children?: any
}

export const Content = ({ title, value, children, icon }: ContentProps) => {
    if (value || children)
        return (
            <div className="contentContainer">
                {icon}
                <div className="titleContainer">{title ? `${title}:` : ''}</div>
                <div className="valueContainer">{value}</div>
                {children}
            </div>
        )

    return <div></div>
}
