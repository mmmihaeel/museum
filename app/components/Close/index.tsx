import Link from 'next/link';

type props = {
    className: string
};

const Close: React.FC<props> = ({className}) => {
    return (
        <div className={className}>
            <Link href={'/'}>
                <svg width="55" height="53" viewBox="0 0 55 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.01367 3L52.0003 49.9866" stroke="#FBF3E5" stroke-width="6" stroke-linecap="round"/>
                    <path d="M3 49.9866L49.9866 3.00003" stroke="#FBF3E5" stroke-width="6" stroke-linecap="round"/>
                </svg>
            </Link>
        </div>
    );
};

export default Close;