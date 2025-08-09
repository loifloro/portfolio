"use client";

import {
    addToast,
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from "@heroui/react";
import { archiveBlog, deleteBlog, unarchiveBlog } from "utils/actions/blog";
import {
    Eye,
    EyeSlash,
    PencilSimple,
    TrashSimple,
} from "@phosphor-icons/react";
import Link from "next/link";
import React, { useState } from "react";

type ActionMenuProps = {
    editUrl: string;
    onDelete: () => Promise<{
        success: boolean;
        message: string;
    }>;
    onArchive: () => Promise<{
        success: boolean;
        message: string;
    }>;
    onUnarchive: () => Promise<{
        success: boolean;
        message: string;
    }>;
    isArchived: boolean;
};

function ActionMenu({
    onArchive,
    onUnarchive,
    onDelete,
    editUrl,
    isArchived,
}: ActionMenuProps) {
    const [_isArchived, setIsArchived] = useState(isArchived);
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    const handleArchive = async () => {
        const { success, message } = await onArchive();

        if (success) {
            addToast({
                title: "Successfully archived",
                description: message,
                color: "success",
            });

            setIsArchived(true);

            return;
        }

        addToast({
            title: "Error occurred",
            description: message,
            color: "danger",
        });
    };

    const handleUnarchive = async () => {
        const { success, message } = await onUnarchive();

        if (success) {
            addToast({
                title: "Successfully unarchive",
                description: message,
                color: "success",
            });

            setIsArchived(false);

            return;
        }

        addToast({
            title: "Error occurred",
            description: message,
            color: "danger",
        });
    };

    const handleDelete = async () => {
        const { success, message } = await onDelete();

        addToast({
            title: success ? "Successfully deleted" : "Error occurred",
            description: message,
            color: success ? "success" : "danger",
        });

        onClose();
    };

    return (
        <>
            <div className="flex gap-2 items-center px-8">
                <Link
                    href={editUrl}
                    title="Edit"
                    className="rounded-md p-2 duration-300 ease-in hover:bg-slate-100"
                >
                    <PencilSimple size={22} />
                </Link>
                {_isArchived ? (
                    <button
                        title="Unarchive"
                        className="rounded-md p-2 duration-300 ease-in hover:bg-slate-100"
                        onClick={handleUnarchive}
                    >
                        <EyeSlash size={22} />
                    </button>
                ) : (
                    <button
                        title="Archive"
                        className="rounded-md p-2 duration-300 ease-in hover:bg-slate-100"
                        onClick={handleArchive}
                    >
                        <Eye size={22} />
                    </button>
                )}
                <button
                    title="Delete"
                    className="rounded-md p-2 duration-300 ease-in text-red-900 hover:bg-red-700 hover:text-white"
                    onClick={onOpen}
                >
                    <TrashSimple size={22} />
                </button>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} radius="sm">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 px-4">
                                Delete this item?
                            </ModalHeader>
                            <ModalBody className="px-4 py-6">
                                <p>
                                    Are you sure you want to delete this item?
                                </p>
                            </ModalBody>
                            <ModalFooter className="px-4">
                                <Button variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button
                                    color="danger"
                                    radius="sm"
                                    onPress={handleDelete}
                                >
                                    Delete
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export function BlogActionMenu({
    id,
    isArchived,
}: {
    id: number;
    isArchived: boolean;
}) {
    return (
        <ActionMenu
            editUrl={`/protected/blogs/${id}`}
            isArchived={isArchived}
            onDelete={() => deleteBlog(id)}
            onArchive={() => archiveBlog(id)}
            onUnarchive={() => unarchiveBlog(id)}
        />
    );
}
