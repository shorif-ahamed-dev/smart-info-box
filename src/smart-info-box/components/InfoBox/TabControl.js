export default function TabControl({
    label,
    onChange,
    value,
    options
}) {
    return (
        <div className="inspector-section">
            {label && <p>{label}</p>}
            <div
                style={{ color: 'red' }}
                className="alignment-buttons">
                {options.map((option) => (
                    <button
                        key={option.value}
                        type="button"
                        className={value === option.value ? "is-active" : ""}
                        aria-pressed={value === option.value}
                        aria-label={option.label}
                        onClick={() => onChange(option.value)}
                    >
                        {option.icon ? <span className={`dashicons ${option.icon}`} /> : option.label}
                    </button>
                ))}
            </div>
        </div>
    )
}