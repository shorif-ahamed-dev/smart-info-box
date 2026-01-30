import Box1 from "../../assets/Box1";
import Box2 from "../../assets/Box2";
import Box3 from "../../assets/Box3";
import Box4 from "../../assets/Box4";
import Box5 from "../../assets/Box5";
export default function Layouts({ layout, onChange }) {

    const layouts = [
        { id: "layout-one", label: "Icon Top", icon: Box1 },
        { id: "layout-two", label: "Icon Left", icon: Box2 },
        { id: "layout-three", label: "Icon Solo", icon: Box3 },
        { id: "layout-four", label: "Icon Link", icon: Box4 },
        { id: "layout-five", label: "Icon Top", icon: Box5 },
    ];
    return (
        <div className="inspector-section">
            <p>Info Box Layout</p>
            <div className="layout-grid">
                {layouts.map((item) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={item.id}
                            role="button"
                            className={`layout-card ${layout === item.id ? "is-active" : ""
                                }`}
                            onClick={() =>
                                onChange(item.id)
                            }
                            aria-pressed={layout === item.id}
                        >
                            <Icon active={layout === item.id} />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
