import StyleRangeControl from "./StyleRangeControl";
import StyleColorControl from "./StyleColorControl";
import StyleBoxControl from "./StyleBoxControl";
import BackgroundType from "./BackgroundType";
import BorderStyle from "./BorderStyle";

export default function NormalStyle() {
    return (
        <>
            <BackgroundType />
            <BorderStyle />
            <StyleRangeControl
                label="Border Width"
                attributeKey="borderWidth"
                min={0}
                max={2}
                step={0.5}
            />

            <StyleColorControl
                label="Border Color"
                attributeKey="borderColor"
            />
            <StyleBoxControl
                label="Border Radius"
                attributeKey="borderRadius"
            />

            <StyleRangeControl
                label="Padding"
                attributeKey="padding"
                min={0}
                max={48}
                step={12}
            />
            <StyleBoxControl
                label="Margin"
                attributeKey="margin"
            />
        </>
    );
}
