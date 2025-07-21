"use client";

import { addToast, Button, Input, Textarea } from "@heroui/react";
import { Controller, useForm } from "react-hook-form";
import { createBlog } from "utils/actions/blog";
import { createBlogSchema } from "utils/schema/blog";
import { isNil } from "lodash";
import { EDITOR_INITIAL_VALUE, MARKS, PLUGINS, TOOLS } from "utils/yoopta";
import { useMemo } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import YooptaEditor, { createYooptaEditor } from "@yoopta/editor";
import z from "zod";

export default function Page() {
    const editor = useMemo(() => createYooptaEditor(), []);

    const {
        handleSubmit,
        control,
        formState: { isDirty, isLoading },
    } = useForm({
        defaultValues: {
            title: "",
            description: "",
            headerImg: undefined,
            content: EDITOR_INITIAL_VALUE,
        },
        resolver: zodResolver(createBlogSchema),
    });

    const onSubmit = async (formData: z.infer<typeof createBlogSchema>) => {
        const { success } = await createBlog(formData);

        if (success) {
            addToast({
                title: "Toast title",
                description: "Toast displayed successfully",
                color: "success",
            });
        }
    };

    return (
        <main className="mb-20">
            <form onSubmit={handleSubmit(onSubmit)}>
                <section
                    aria-label="blog-description"
                    className="md:w-8/12 mx-auto mt-56 flex flex-col gap-4"
                >
                    <Controller
                        control={control}
                        name="title"
                        render={({ field, fieldState: { invalid, error } }) => (
                            <Textarea
                                variant="underlined"
                                placeholder="Blog Title"
                                classNames={{
                                    input: "uppercase overflow-auto !text-heading-3 leading-heading-2 font-semibold tracking-[.25em] text-rich-black",
                                }}
                                errorMessage={error?.message}
                                validationBehavior="aria"
                                isInvalid={invalid}
                                isDisabled={isLoading}
                                minRows={1}
                                {...field}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="description"
                        render={({ field, fieldState: { invalid, error } }) => (
                            <Textarea
                                placeholder="Describe the blog"
                                variant="underlined"
                                size="lg"
                                minRows={2}
                                isDisabled={isLoading}
                                errorMessage={error?.message}
                                validationBehavior="aria"
                                isInvalid={invalid}
                                {...field}
                            />
                        )}
                    />
                </section>
                <Controller
                    control={control}
                    name="headerImg"
                    render={({
                        field: { onChange, ref, value },
                        fieldState: { invalid, error },
                    }) => (
                        <div className="relative my-20 flex justify-end items-end bg-gradient-centered p-10 aspect-[21/9]">
                            {!isNil(value) && (
                                <Image
                                    fill
                                    src={URL.createObjectURL(value)}
                                    alt="Preview"
                                    className="object-cover saturate-50 hover:saturate-100 transition-all duration-300 ease-in-out"
                                />
                            )}
                            <Input
                                type="file"
                                accept="image/png, image/jpg, image/jpeg"
                                max={1}
                                size="sm"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];

                                    if (file) {
                                        onChange(file);
                                    }
                                }}
                                ref={ref}
                                errorMessage={error?.message}
                                validationBehavior="aria"
                                className="max-w-xs cursor-pointer"
                                isInvalid={invalid}
                                isDisabled={isLoading}
                                isClearable
                            />
                        </div>
                    )}
                />
                <section
                    aria-label="blog-content"
                    className="md:w-8/12 mx-auto"
                >
                    <Controller
                        control={control}
                        name="content"
                        render={({ field: { onChange, value } }) => (
                            <YooptaEditor
                                editor={editor}
                                plugins={PLUGINS}
                                tools={TOOLS}
                                marks={MARKS}
                                onChange={(newValue) => onChange(newValue)}
                                value={value}
                                style={{ width: "100%" }}
                                readOnly={isLoading}
                            />
                        )}
                    />
                    <div className="flex justify-end mt-20">
                        <Button
                            color="primary"
                            radius="sm"
                            variant="solid"
                            type="submit"
                            isLoading={isLoading}
                            isDisabled={!isDirty}
                        >
                            Create Blog
                        </Button>
                    </div>
                </section>
            </form>
        </main>
    );
}
