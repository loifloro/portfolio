import {
    Bold,
    Italic,
    CodeMark,
    Underline,
    Strike,
    Highlight,
} from "@yoopta/marks";
import { HeadingOne, HeadingTwo, HeadingThree } from "@yoopta/headings";
import { NumberedList, BulletedList, TodoList } from "@yoopta/lists";
import ActionMenuList, {
    DefaultActionMenuRender,
} from "@yoopta/action-menu-list";
import { createClient } from "./supabase/client";
import { Elements } from "@yoopta/editor";
import { kebabCase, uniqueId } from "lodash";
import Blockquote from "@yoopta/blockquote";
import Callout from "@yoopta/callout";
import Code from "@yoopta/code";
import Divider from "@yoopta/divider";
import Embed from "@yoopta/embed";
import Image from "@yoopta/image";
import Link from "@yoopta/link";
import LinkTool, { DefaultLinkToolRender } from "@yoopta/link-tool";
import Paragraph from "@yoopta/paragraph";
import Toolbar, { DefaultToolbarRender } from "@yoopta/toolbar";

export const EDITOR_INITIAL_VALUE = {
    "9d98408d-b990-4ffc-a1d7-387084291b00": {
        id: "9d98408d-b990-4ffc-a1d7-387084291b00",
        value: [
            {
                id: "0508777e-52a4-4168-87a0-bc7661e57aab",
                type: "heading-three",
                children: [
                    {
                        text: "",
                    },
                ],
                props: {
                    nodeType: "block",
                },
            },
        ],
        type: "HeadingThree",
        meta: {
            order: 0,
            depth: 0,
        },
    },
};

export const PLUGINS = [
    Paragraph,
    Divider.extend({
        elementProps: {
            divider: (props) => ({
                ...props,
                color: "#92949e",
            }),
        },
    }),
    HeadingOne,
    HeadingTwo,
    HeadingThree,
    Blockquote,
    Callout,
    NumberedList,
    BulletedList,
    TodoList,
    Code,
    Link,
    Embed,
    Image.extend({
        elementProps: {
            image: (props) => ({
                ...props,
                sizes: { width: "100%", height: "auto" },
            }),
        },
        options: {
            maxSizes: {
                maxWidth: "100%",
                maxHeight: "max-content",
            },
            onUpload: async (file) => {
                const supabase = createClient();

                const { data } = await supabase.storage
                    .from(process.env.BLOG_ASSETS_STORAGE!)
                    .upload(
                        `${kebabCase(`${file.name}-${uniqueId()}`).toUpperCase()}`,
                        file
                    );

                return {
                    src: `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE}/${data?.fullPath}`,
                    alt: `${data?.path}`,
                };
            },
        },
        events: {
            onDestroy: async (editor, blockId) => {
                try {
                    const supabase = createClient();

                    const imageElement = Elements.getElement(editor, blockId);

                    await supabase.storage
                        .from(process.env.BLOG_ASSETS_STORAGE!)
                        .remove([`${imageElement?.props.alt}`]);
                } catch (e) {
                    console.error(e);
                }
            },
        },
    }),

    // Video.extend({
    //     options: {
    //         onUpload: async (file) => {
    //             const data = await uploadToCloudinary(file, "video");
    //             return {
    //                 src: data.secure_url,
    //                 alt: "cloudinary",
    //                 sizes: {
    //                     width: data.width,
    //                     height: data.height,
    //                 },
    //             };
    //         },
    //         onUploadPoster: async (file) => {
    //             const image = await uploadToCloudinary(file, "image");
    //             return image.secure_url;
    //         },
    //     },
    // }),
    // File.extend({
    //     options: {
    //         onUpload: async (file) => {
    //             const response = await uploadToCloudinary(file, "auto");
    //             return {
    //                 src: response.secure_url,
    //                 format: response.format,
    //                 name: response.name,
    //                 size: response.bytes,
    //             };
    //         },
    //     },
    // }),
];

export const TOOLS = {
    ActionMenu: {
        render: DefaultActionMenuRender,
        tool: ActionMenuList,
    },
    Toolbar: {
        render: DefaultToolbarRender,
        tool: Toolbar,
    },
    LinkTool: {
        render: DefaultLinkToolRender,
        tool: LinkTool,
    },
};

export const MARKS = [Bold, Italic, CodeMark, Underline, Strike, Highlight];
