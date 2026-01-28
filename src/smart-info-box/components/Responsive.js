import DesktopIcon from "../assets/styleLayoutIcon/DesktopIcon";
import TabIcon from "../assets/styleLayoutIcon/TabIcon";
import MobileIcon from "../assets/styleLayoutIcon/MobileIcon";

const Responsive = ({ deviceType, setDevice }) => {
    return (
        <div className="responsive-switcher-wrapper">
            <div className="responsive-switcher">
                {deviceType === "Desktop" && <DesktopIcon />}
                {deviceType === "Tablet" && <TabIcon />}
                {deviceType === "Mobile" && <MobileIcon />}
            </div>

            <div className="responsive-switcher__more">
                <button
                    role="button"
                    className={`device-btn ${deviceType === "Desktop" ? "is-active" : ""}`}
                    onClick={() => setDevice("Desktop")}
                >
                    <DesktopIcon />
                </button>

                <button
                    role="button"
                    className={`device-btn ${deviceType === "Tablet" ? "is-active" : ""}`}
                    onClick={() => setDevice("Tablet")}
                >
                    <TabIcon />
                </button>

                <button
                    role="button"
                    className={`device-btn ${deviceType === "Mobile" ? "is-active" : ""}`}
                    onClick={() => setDevice("Mobile")}
                >
                    <MobileIcon />
                </button>
            </div>
        </div>
    );
};

export default Responsive;
