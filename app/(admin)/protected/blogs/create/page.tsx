"use client";

import {
    addToast,
    Button,
    Checkbox,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Textarea,
    useDisclosure,
} from "@heroui/react";
import { Controller, useForm } from "react-hook-form";
import { createBlog } from "utils/actions/blog";
import { createBlogSchema } from "utils/schema/blog";
import { EDITOR_INITIAL_VALUE, MARKS, PLUGINS, TOOLS } from "utils/yoopta";
import { isNil } from "lodash";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import YooptaEditor, { createYooptaEditor } from "@yoopta/editor";
import z from "zod";

export default function Page() {
    const editor = useMemo(() => createYooptaEditor(), []);
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const {
        handleSubmit,
        control,
        formState: { isDirty, isLoading },
    } = useForm({
        defaultValues: {
            title: "",
            description: "",
            headerImg: undefined,
            thumbnailImg: undefined,
            isPublished: false,
            content: EDITOR_INITIAL_VALUE,
        },
        resolver: zodResolver(createBlogSchema),
    });

    const onSubmit = async (formData: z.infer<typeof createBlogSchema>) => {
        const { success, message } = await createBlog(formData);

        if (success) {
            addToast({
                title: "Blog Created",
                description: message,
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
        <main className="mb-20">
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
                            isDisabled={!isDirty}
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
                                                    field: {
                                                        onChange,
                                                        ref,
                                                        value,
                                                    },
                                                    fieldState: {
                                                        invalid,
                                                        error,
                                                    },
                                                }) => (
                                                    <div className="relative flex mx-auto justify-end items-end bg-gradient-centered p-10 h-[320px] md:h-[340px] w-[300px] md:w-[360px]">
                                                        {!isNil(value) && (
                                                            <Image
                                                                fill
                                                                src={URL.createObjectURL(
                                                                    value
                                                                )}
                                                                alt="Preview"
                                                                className="object-cover"
                                                            />
                                                        )}
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
                                                                    onChange(
                                                                        file
                                                                    );
                                                                }
                                                            }}
                                                            ref={ref}
                                                            errorMessage={
                                                                error?.message
                                                            }
                                                            validationBehavior="aria"
                                                            className="max-w-xs cursor-pointer"
                                                            isInvalid={invalid}
                                                            isDisabled={
                                                                isLoading
                                                            }
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
                                                    errorMessage={
                                                        error?.message
                                                    }
                                                    validationBehavior="aria"
                                                    isInvalid={invalid}
                                                    isDisabled={isLoading}
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
                                                    errorMessage={
                                                        error?.message
                                                    }
                                                    validationBehavior="aria"
                                                    isInvalid={invalid}
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
                                                    onValueChange={
                                                        field.onChange
                                                    }
                                                    isDisabled={isLoading}
                                                    validationBehavior="aria"
                                                    isInvalid={invalid}
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
        </main>
    );
}
