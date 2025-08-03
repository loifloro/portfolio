"use client";

import { PLUGINS, TOOLS, MARKS } from "utils/yoopta";
import YooptaEditor, {
    createYooptaEditor,
    YooptaContentValue,
} from "@yoopta/editor";
import React, { useMemo } from "react";
import { JsonValue } from "@prisma/client/runtime/library";

type BlogContentProps = {
    value: JsonValue;
};

export default function BlogContent({ value }: BlogContentProps) {
    const editor = useMemo(() => createYooptaEditor(), []);

    return (
        <YooptaEditor
            editor={editor}
            plugins={PLUGINS}
            tools={TOOLS}
            marks={MARKS}
            value={value as YooptaContentValue}
            style={{ width: "100%" }}
            readOnly
        />
    );
}
