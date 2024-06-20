import './style.css'

interface ContentProps {
    title: string
    value?: string
    children?: any
}

export const Content = ({ title, value, children }: ContentProps) => {
    if (value || children)
        return (
            <div className="contentContainer">
                <div className="titleContainer">{title ? `${title}:` : ''}</div>
                <div className="valueContainer">{value}</div>
                {children}
            </div>
        )

    return <div></div>
}
