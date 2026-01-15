import StyleRangeControl from "./StyleRangeControl";
import StyleColorControl from "./StyleColorControl";
import StyleBoxControl from "./StyleBoxControl";
import BackgroundStyle from "./BackgroundStyle";
import BorderStyle from "./BorderStyle";
import CustomBoxControls from "./CustomBoxControls";
import BoxShadow from "./BoxShadow";

export default function NormalStyle() {
    return (
        <>
            <BackgroundStyle />
            <BorderStyle />
            <BoxShadow label="Box Shadow" />
            <CustomBoxControls
                label="Padding"
                attributeKey="padding"
                min={0}
                max={200} />
            <br />
            <CustomBoxControls
                label="Margin"
                attributeKey="margin"
                min={0}
                max={200} />
            {/* <StyleRangeControl/> */}
            {/* <StyleBoxControl/> */}
        </>
    );
}
