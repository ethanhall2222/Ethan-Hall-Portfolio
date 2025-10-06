"use client";

import { useState, useTransition } from "react";
import { z } from "zod";
import { Button } from "./button";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Add a valid email."),
  message: z.string().min(12, "Tell me a bit more so I can help."),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [values, setValues] = useState<FormValues>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isPending, startTransition] = useTransition();

  const handleChange = (field: keyof FormValues) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");

    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormValues, string>> = {};
      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof FormValues;
        fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    startTransition(async () => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(parsed.data),
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        setValues({ name: "", email: "", message: "" });
        setStatus("success");
      } catch (error) {
        console.error(error);
        setStatus("error");
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-slate-200 bg-[var(--card)] p-6 shadow-sm"
      noValidate
    >
      <div>
        <label className="text-sm font-semibold text-ink" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange("name")}
          autoComplete="name"
          required
          className={cn(
            "mt-2 block w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-ink shadow-sm transition focus:border-[var(--accent)] focus:outline-none focus:ring-4 focus:ring-[var(--ring)]",
            errors.name && "border-red-400 focus:ring-red-200",
          )}
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
      </div>
      <div>
        <label className="text-sm font-semibold text-ink" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange("email")}
          autoComplete="email"
          required
          className={cn(
            "mt-2 block w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-ink shadow-sm transition focus:border-[var(--accent)] focus:outline-none focus:ring-4 focus:ring-[var(--ring)]",
            errors.email && "border-red-400 focus:ring-red-200",
          )}
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>
      <div>
        <label className="text-sm font-semibold text-ink" htmlFor="message">
          How can I help?
        </label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange("message")}
          rows={5}
          required
          className={cn(
            "mt-2 block w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-ink shadow-sm transition focus:border-[var(--accent)] focus:outline-none focus:ring-4 focus:ring-[var(--ring)]",
            errors.message && "border-red-400 focus:ring-red-200",
          )}
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          type="submit"
          variant="primary"
          aria-label="Send message to Ethan"
          disabled={isPending}
        >
          {isPending ? "Sending…" : "Send message"}
        </Button>
        {status === "success" && (
          <p className="text-sm font-medium text-emerald-600" role="status">
            Thanks! I’ll reply within a day.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm font-medium text-red-500" role="status">
            Something went wrong. Please try again shortly.
          </p>
        )}
      </div>
    </form>
  );
}
