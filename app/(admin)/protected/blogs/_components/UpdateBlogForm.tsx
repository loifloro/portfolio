"use client";

import Image from "next/image";
import React, { useMemo } from "react";
import YooptaEditor, { createYooptaEditor } from "@yoopta/editor";
import z from "zod";
import { isNil } from "lodash";
import { PLUGINS, TOOLS, MARKS } from "utils/yoopta";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next-nprogress-bar";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    useDisclosure,
    addToast,
    Textarea,
    Button,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Checkbox,
    ModalFooter,
    Input,
} from "@heroui/react";
import { updateBlog } from "utils/actions/blog";
import { updateBlogSchema } from "utils/schema/blog";
import type { JsonObject, JsonValue } from "@prisma/client/runtime/library";

type BlogFormProps = {
    id: number;
    title: string;
    description: string;
    isPublished: boolean;
    headerImgUrl: string;
    thumbnailImgUrl: string;
    content: JsonValue;
};

export default function UpdateBlogForm({
    id,
    title,
    description,
    isPublished,
    content,
    headerImgUrl,
    thumbnailImgUrl,
}: BlogFormProps) {
    const editor = useMemo(() => createYooptaEditor(), []);
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const {
        handleSubmit,
        control,
        formState: { isLoading },
    } = useForm({
        defaultValues: {
            id,
            title,
            description,
            headerImg: undefined,
            thumbnailImg: undefined,
            headerImgUrl,
            thumbnailImgUrl,
            isPublished,
            content: content as JsonObject,
        },
        resolver: zodResolver(updateBlogSchema),
    });

    const onSubmit = async (formData: z.infer<typeof updateBlogSchema>) => {
        const { success, message } = await updateBlog(formData);

        if (success) {
            addToast({
                title: "Blog Updated",
                description: "Blog is now updated",
                color: "success",
            });

            onClose();

            router.push("/protected");

            return;
        }

        addToast({
            title: "Error occured",
            description: message,
            color: "danger",
        });

        onClose();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} id="create-blog-form">
            <section
                aria-label="blog-description"
                className="px-4 md:px-8 md:w-8/12 mx-auto mt-56 flex flex-col gap-4"
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
                            enterKeyHint="next"
                            autoComplete="title"
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
                            enterKeyHint="next"
                            autoComplete="description"
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
                        {
                            <Image
                                fill
                                src={
                                    isNil(value)
                                        ? `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE}/${headerImgUrl}`
                                        : URL.createObjectURL(value)
                                }
                                alt="Preview"
                                className="object-cover saturate-50 hover:saturate-100 transition-all duration-300 ease-in-out"
                            />
                        }
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
                className="px-4 md:px-8 md:w-8/12 mx-auto"
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
                        isLoading={isLoading}
                        onPress={onOpen}
                    >
                        Publish Blog
                    </Button>
                </div>
            </section>
            <Modal isOpen={isOpen} onClose={onClose} radius="sm">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Blog Preview
                            </ModalHeader>
                            <ModalBody>
                                <div className="flex flex-col gap-4">
                                    <div className="relative h-[320px] md:h-[340px] my-5">
                                        <Controller
                                            control={control}
                                            name="thumbnailImg"
                                            render={({
                                                field: { onChange, ref, value },
                                                fieldState: { invalid, error },
                                            }) => (
                                                <div className="relative flex mx-auto justify-end items-end bg-gradient-centered p-10 h-[320px] md:h-[340px] w-[300px] md:w-[360px]">
                                                    <Image
                                                        fill
                                                        src={
                                                            isNil(value)
                                                                ? `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE}/${thumbnailImgUrl}`
                                                                : URL.createObjectURL(
                                                                      value
                                                                  )
                                                        }
                                                        alt="Preview"
                                                        className="object-cover"
                                                    />
                                                    <Input
                                                        type="file"
                                                        accept="image/png, image/jpg, image/jpeg"
                                                        max={1}
                                                        size="sm"
                                                        onChange={(e) => {
                                                            const file =
                                                                e.target
                                                                    .files?.[0];

                                                            if (file) {
                                                                onChange(file);
                                                            }
                                                        }}
                                                        ref={ref}
                                                        errorMessage={
                                                            error?.message
                                                        }
                                                        validationBehavior="aria"
                                                        className="max-w-xs cursor-pointer"
                                                        isInvalid={invalid}
                                                        isDisabled={isLoading}
                                                        enterKeyHint="next"
                                                        isClearable
                                                    />
                                                </div>
                                            )}
                                        />
                                    </div>
                                    <Controller
                                        control={control}
                                        name="title"
                                        render={({
                                            field,
                                            fieldState: { invalid, error },
                                        }) => (
                                            <Input
                                                size="lg"
                                                variant="underlined"
                                                placeholder="Blog Title"
                                                errorMessage={error?.message}
                                                validationBehavior="aria"
                                                isInvalid={invalid}
                                                isDisabled={isLoading}
                                                enterKeyHint="next"
                                                {...field}
                                            />
                                        )}
                                    />
                                    <Controller
                                        control={control}
                                        name="description"
                                        render={({
                                            field,
                                            fieldState: { invalid, error },
                                        }) => (
                                            <Input
                                                placeholder="Describe the blog"
                                                variant="underlined"
                                                size="sm"
                                                isDisabled={isLoading}
                                                errorMessage={error?.message}
                                                validationBehavior="aria"
                                                isInvalid={invalid}
                                                enterKeyHint="next"
                                                {...field}
                                            />
                                        )}
                                    />
                                    <Controller
                                        control={control}
                                        name="isPublished"
                                        render={({
                                            field,
                                            fieldState: { invalid },
                                        }) => (
                                            <Checkbox
                                                size="sm"
                                                className="mt-4"
                                                isSelected={
                                                    field.value ?? false
                                                }
                                                onValueChange={field.onChange}
                                                isDisabled={isLoading}
                                                validationBehavior="aria"
                                                isInvalid={invalid}
                                                enterKeyHint="done"
                                            >
                                                Show this blog to portfolio?
                                            </Checkbox>
                                        )}
                                    />
                                </div>
                            </ModalBody>
                            <ModalFooter className="mt-4">
                                <Button
                                    color="danger"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                                <Button
                                    color="primary"
                                    radius="sm"
                                    type="submit"
                                    form="create-blog-form"
                                >
                                    Publish
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </form>
    );
}
