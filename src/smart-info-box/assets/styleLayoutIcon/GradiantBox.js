export default function GradiantBox() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="gradientBox" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#808080" />
                    <stop offset="100%" stopColor="#cccccc" />
                </linearGradient>
            </defs>

            <rect
                width="16"
                height="16"
                rx="2"
                fill="url(#gradientBox)"
            />
        </svg>
    )
}
