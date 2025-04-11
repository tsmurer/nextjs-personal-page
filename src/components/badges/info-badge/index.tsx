import { ReactNode } from 'react'
import './styles.scss'

type InfoBadgeProps = {
    children: ReactNode
    className: string,
    type: 'draft' | 'published'
}

export default function InfoBadge({ children, className, type }: InfoBadgeProps) {
    return (
        <div className={`info-badge ${className} info-badge--${type}`}>
            {children}
        </div>
    );
}