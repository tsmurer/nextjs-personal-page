import './styles.scss'


type ChunkyButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
    className?: string; // for passing extra styles
    type?: 'button' | 'submit' | 'reset';
  };

export const ChunkyButton = ({ 
    onClick,
    children,
    className = '',
    type = 'button'
}: ChunkyButtonProps) => {

    return <button onClick={onClick} className={`chunky-button ${className}`}>
        {children}
    </button>
}