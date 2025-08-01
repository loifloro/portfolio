"use client";

import { Alert, Button, Input } from "@heroui/react";
import { Controller, useForm } from "react-hook-form";
import { createClient } from "utils/supabase/client";
import { isNil, isUndefined } from "lodash";
import { loginSchema } from "utils/schema/auth";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";

type FormInputs = {
    email: string;
    password: string;
};

export default function Page() {
    const router = useRouter();
    const {
        handleSubmit,
        control,
        setError,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: FormInputs) => {
        try {
            const supabase = createClient();
            const { error } = await supabase.auth.signInWithPassword(data);

            if (!isNil(error)) {
                setError("root", { message: error.message });

                return;
            }

            router.push("/protected");
        } catch (err: unknown) {
            console.log(err);
        }
    };

    return (
        <main className="min-h-svh grid place-content-center">
            <section aria-label="login" className="w-full md:w-sm">
                <div className="flex flex-col mb-20 items-center">
                    <h1 className="uppercase text-center mt-10 text-heading-2 font-semibold tracking-heading-1 ml-[var(--spacing-heading-1)]">
                        Login
                    </h1>
                    <p className="text-battleship-gray font-light max-w-screen-md mx-auto text-pretty">
                        Lorem ipsum dolor sit amet consectetur. Vitae fringilla
                    </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col items-center gap-6">
                        <Controller
                            control={control}
                            name="email"
                            render={({
                                field,
                                fieldState: { invalid, error },
                            }) => (
                                <Input
                                    isRequired
                                    label="Email"
                                    size="sm"
                                    variant="flat"
                                    placeholder="Enter your email"
                                    type="email"
                                    errorMessage={error?.message}
                                    validationBehavior="aria"
                                    isInvalid={invalid}
                                    {...field}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="password"
                            render={({
                                field,
                                fieldState: { invalid, error },
                            }) => (
                                <Input
                                    isRequired
                                    label="Password"
                                    size="sm"
                                    variant="flat"
                                    placeholder="Enter your password"
                                    type="password"
                                    description={
                                        <Link href="" className="text-right">
                                            Forgot password?
                                        </Link>
                                    }
                                    errorMessage={error?.message}
                                    validationBehavior="aria"
                                    isInvalid={invalid}
                                    {...field}
                                />
                            )}
                        />
                        {!isUndefined(errors.root) && (
                            <Alert color="danger" title={errors.root.message} />
                        )}
                        <Button
                            color="primary"
                            radius="sm"
                            variant="solid"
                            type="submit"
                            fullWidth
                        >
                            Login
                        </Button>
                        <span className="text-battleship-gray">or</span>
                        <Button
                            color="primary"
                            radius="sm"
                            variant="solid"
                            type="submit"
                            fullWidth
                            startContent={
                                <Image
                                    src="/svg/google.svg"
                                    height={20}
                                    width={20}
                                    alt="Google"
                                />
                            }
                        >
                            Login with Google
                        </Button>
                    </div>
                </form>
            </section>
        </main>
    );
}
