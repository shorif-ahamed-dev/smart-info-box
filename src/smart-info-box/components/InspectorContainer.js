import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";
import { PanelBody, TabPanel } from "@wordpress/components";
import SettingsIcon from "../assets/SettingsIcon";
import StyleSettings from "./StyleSettings";
import StyleRangeControl from "./StyleRangeControl";
import AppearenceIcon from "../assets/AppearenceIcon";
import LayoutSettings from "./LayoutSettings";

export default function InspectorContainer({ attributes, setAttributes }) {
    const [openPanel, setOpenPanel] = useState("info");
    const onSelect = (value) => { };
    return (
        <InspectorControls>
            <PanelBody
                title="Info Box"
                opened={openPanel === "info"}
                onToggle={() =>
                    setOpenPanel(openPanel === "info" ? null : "info")
                }
            >
                <TabPanel
                    className="my-tab-panel"
                    activeClass="active-tab"
                    onSelect={onSelect}
                    tabs={[
                        {
                            name: "style",
                            title: (
                                <span>
                                    <AppearenceIcon />
                                    Style
                                </span>
                            ),
                            className: "tab-two",
                        },
                        {
                            name: "layout",
                            title: (
                                <span>
                                    <SettingsIcon />
                                    Layout
                                </span>
                            ),
                            className: "tab-one",
                        },
                    ]}
                >
                    {(tab) => {
                        if (tab.name === "layout") {
                            return (
                                <LayoutSettings
                                    attributes={attributes}
                                    setAttributes={setAttributes}
                                />
                            );
                        }
                        if (tab.name === "style") {
                            return (
                                <StyleSettings
                                    attributes={attributes}
                                    setAttributes={setAttributes}
                                />
                            );
                        }
                    }}
                </TabPanel>
            </PanelBody>
            <PanelBody
                title="Icon/Image"
                opened={openPanel === "icon"}
                onToggle={() =>
                    setOpenPanel(openPanel === "icon" ? null : "icon")
                }

            >
                <div className="inspector-section">
                    <StyleRangeControl
                        label="Icon Size"
                        attributeKey="iconSize"
                        marks={false}
                        min={25}
                        max={100}
                        step={1}
                    />
                </div>

            </PanelBody>
            <PanelBody
                title="Title"
                opened={openPanel === "title"}
                onToggle={() =>
                    setOpenPanel(openPanel === "title" ? null : "title")
                }
            >
                <div className="inspector-section">
                    <StyleRangeControl
                        label="Title"
                        attributeKey="titleFontSize"
                        marks={false}
                        min={10}
                        max={100}
                        step={1}
                    />
                </div>
            </PanelBody>
            {/* <PanelBody
                title="Description"
                opened={openPanel === "description"}
                onToggle={() =>
                    setOpenPanel(openPanel === "description" ? null : "description")
                }
            >
                <div className="inspector-section">
                    <StyleRangeControl
                        label="Description"
                        attributeKey="description"
                        marks={false}
                        min={10}
                        max={100}
                        step={1}
                    />
                </div>

            </PanelBody> */}
        </InspectorControls>
    )
}
