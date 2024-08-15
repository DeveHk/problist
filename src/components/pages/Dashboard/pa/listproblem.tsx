"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import remarkGfm from "remark-gfm";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Markdown from "react-markdown";
import { formSchema } from "@/components/pages/Dashboard/pa/CreateProblem";
import { cn } from "@/lib/utils";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { DeleteIcon, PlusIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Problemform() {
    const router = useRouter();
    const [editorState, setEditorState] = useState(
        `
##### Note: (if any)
## Description
[Write Description here]
## Observation
- [Observation 1]
- [Observation 2]

## Issues I had

- [Issue 1]
  `
    )

    const { toast } = useToast();
    const [valid, setValid] = useState(false);
    const defaultval = {
        title: "NA/",
        link: "",
        hints: [{ value: "" }],
        topics: [{ value: "" }],
        description: editorState,
        addedDate: new Date(),
    };
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultval,
    });
    const { control } = form;
    const hints = useFieldArray({
        control,
        name: "hints", //
    });
    const topics = useFieldArray({
        control,
        name: "topics",
    });
    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        setValid(true);
        try {
            console.log(values)
            const res = await axios.post("/api/problem/create", values, { withCredentials: true });
            console.log(res)
            form.reset();
            toast({
                title: `Problem Created Successfully`,
                description: "You can view it on problems page",
            });
            setValid(false);
        } catch (err) {
            console.log(err)
            if (axios.isAxiosError(err)) {
                if (err.response && err.response.status == 400) {
                    if (err.response.data.on == "title") {
                        form.setError("title", {
                            type: "manual",
                            message: "Problem with this title exists",
                        });
                    }
                } else if (err.response && err.response.status == 403) {
                    //console.log("[LOGIN REDIRECT]");
                    return router.push("/login");
                }
                setValid(false);
            } else {
                console.error("Unexpected error:", err);
            }
            //console.log("Unexpected error:", err);
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem className="space-y-2">
                                <Label className="text-sm font-medium" htmlFor="title">
                                    Title
                                </Label>
                                <FormControl>
                                    <Input
                                        className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:focus:border-gray-50 dark:focus:ring-gray-50"
                                        id="title"
                                        placeholder="Title"
                                        required
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="link"
                        render={({ field }) => (
                            <FormItem className="space-y-2">
                                <Label className="text-sm font-medium" htmlFor="difficulty">
                                    Problem Link
                                </Label>
                                <Input
                                    className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:focus:border-gray-50 dark:focus:ring-gray-50"
                                    id="link"
                                    placeholder="Link"
                                    required
                                    {...field}
                                />
                                <FormDescription>Enter problem Link here</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
                    <div className="">
                        <Label className="text-sm font-medium ">Hints</Label>
                        <div className="flex gap-4 flex-row mt-2  flex-wrap">
                            {hints.fields.map((field, index) => (
                                <div
                                    className="flex items-center justify-center gap-1 "
                                    id={field.id}
                                    key={index}
                                >
                                    <FormField
                                        control={form.control}
                                        name={`hints.${index}.value`}
                                        render={({ field }) => (
                                            <FormItem className="">
                                                <FormControl>
                                                    <Input
                                                        className="resize-none rounded-md border border-gray-300 w-96 px-3 h-10  py-2 overflow-auto text-sm shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:focus:border-gray-50 dark:focus:ring-gray-50"
                                                        id={`test-input-${index}`}
                                                        placeholder={
                                                            //index == 0 ? "Select Difficulty" :
                                                            "Enter Hints"
                                                        }
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormDescription></FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div
                                        onClick={() => {
                                            hints.remove(index);
                                        }}
                                        className={cn(
                                            "cursor-pointer items-center mb-2 flex"
                                        )}
                                    >
                                        <div className="justify-self-start  mr-1">
                                            <DeleteIcon className="h-5 w-5 text-red-600" />
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="mb-2 flex items-center">
                                <Button
                                    type="button"
                                    variant={"outline"}
                                    onClick={() => hints.append({ value: "" })}
                                    className="p-2 h-4 w-4 rounded"
                                >
                                    <div className="justify-self-start  mr-1">
                                        <PlusIcon className="h-5 w-5 text-red-600" />
                                    </div>
                                </Button>
                            </div>
                        </div>
                        <FormDescription>
                            Please provide more hints
                        </FormDescription>
                    </div>
                    <div className="">
                        <Label className="text-sm font-medium ">Topics</Label>
                        <div className="flex gap-4 flex-row mt-2  flex-wrap">
                            {topics.fields.map((field, index) => (
                                <div
                                    className="flex items-center justify-center gap-1 "
                                    id={field.id}
                                    key={index}
                                >
                                    <FormField
                                        control={form.control}
                                        name={`topics.${index}.value`}
                                        render={({ field }) => (
                                            <FormItem className="">
                                                <FormControl>
                                                    <Input
                                                        className="resize-none rounded-md border border-gray-300 w-96 px-3 h-10  py-2 overflow-auto text-sm shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:focus:border-gray-50 dark:focus:ring-gray-50"
                                                        id={`test-input-${index}`}
                                                        placeholder={
                                                            //index == 0 ? "Select Difficulty" :
                                                            "Enter topics"
                                                        }
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormDescription></FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div
                                        onClick={() => {
                                            topics.remove(index);
                                        }}
                                        className={cn(
                                            "cursor-pointer items-center mb-2 flex"
                                        )}
                                    >
                                        <div className="justify-self-start  mr-1">
                                            <DeleteIcon className="h-5 w-5 text-red-600" />
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="mb-2 flex items-center">
                                <Button
                                    type="button"
                                    variant={"outline"}
                                    onClick={() => topics.append({ value: "" })}
                                    className="p-2 h-4 w-4 rounded"
                                >
                                    <div className="justify-self-start  mr-1">
                                        <PlusIcon className="h-5 w-5 text-red-600" />
                                    </div>
                                </Button>
                            </div>
                        </div>
                        <FormDescription>
                            Please provide more Topics
                        </FormDescription>
                    </div>
                </div>
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem className="space-y-2">
                            <Label className="text-sm font-medium" htmlFor="statement">
                                Problem Description
                            </Label>
                            <div className="grid md:grid-cols-2  grid-rows-2 md:grid-rows-1  gap-4">
                                <FormControl>
                                    <Textarea
                                        className="resize-none rounded-md border border-gray-300 px-3 h-64 md:h-[500px] py-2 overflow-auto text-sm shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:focus:border-gray-50 dark:focus:ring-gray-50"
                                        id="statement"
                                        placeholder=""
                                        onChangeCapture={(e) =>
                                            setEditorState(e.currentTarget.value)
                                        }
                                        required
                                        {...field}
                                    />
                                </FormControl>
                                <div className="h-64 overflow-auto rounded-md border border-gray-300 px-3 py-2 md:h-[500px]  text-sm shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:focus:border-gray-50 dark:focus:ring-gray-50">
                                    <Markdown className={"markdown"} remarkPlugins={[remarkGfm]}>
                                        {editorState}
                                    </Markdown>
                                </div>
                            </div>
                            <FormDescription></FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="w-full flex-col items-center flex justify-center">
                    <Button type="submit" disabled={valid} className="w-full">
                        Submit
                    </Button>
                </div>
            </form >
        </Form >
    );
}
