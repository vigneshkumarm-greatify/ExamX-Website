"use client";

import { useState, useEffect, type FormEvent } from "react";

interface InquiryFormProps {
  buttonLabel: string;
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  institution: string;
  role: string;
  phone: string;
  city: string;
  message: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  institution?: string;
  phone?: string;
  city?: string;
}

interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

type Status = "idle" | "submitting" | "success" | "error";

const initialFormData: FormData = {
  name: "",
  email: "",
  institution: "",
  role: "",
  phone: "",
  city: "",
  message: "",
};

const inputClassName =
  "rounded-lg border border-[#d4d4d8] p-3 text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#52525b] placeholder:opacity-50 focus:border-green-500 focus:outline-none";

const errorInputClassName =
  "rounded-lg border border-red-500 p-3 text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#52525b] placeholder:opacity-50 focus:border-red-500 focus:outline-none";

function validate(data: FormData): FieldErrors {
  const errors: FieldErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Enter a valid email address";
  }

  if (!data.institution.trim()) {
    errors.institution = "Institution name is required";
  }

  const digits = data.phone.replace(/\D/g, "");
  if (!data.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (digits.length < 10) {
    errors.phone = "Phone number must be at least 10 digits";
  }

  if (!data.city.trim()) {
    errors.city = "City is required";
  }

  return errors;
}

export default function InquiryForm({
  buttonLabel,
  className = "",
}: InquiryFormProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [utmParams, setUtmParams] = useState<UtmParams>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utm: UtmParams = {};
    const source = params.get("utm_source");
    const medium = params.get("utm_medium");
    const campaign = params.get("utm_campaign");
    if (source) utm.utm_source = source;
    if (medium) utm.utm_medium = medium;
    if (campaign) utm.utm_campaign = campaign;
    if (Object.keys(utm).length > 0) setUtmParams(utm);
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error on edit
    if (fieldErrors[name as keyof FieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const errors = validate(formData);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact_person: formData.name.trim(),
          email: formData.email.trim(),
          organization_name: formData.institution.trim(),
          designation: formData.role.trim(),
          phone: formData.phone.trim(),
          city: formData.city.trim(),
          message: formData.message.trim(),
          ...utmParams,
        }),
      });

      if (res.status === 201) {
        setStatus("success");
        setFormData(initialFormData);
        return;
      }

      if (res.status === 400) {
        const body = await res.json();
        if (body.errors) {
          // Map API field errors back to our field names
          const apiFieldMap: Record<string, keyof FieldErrors> = {
            contact_person: "name",
            email: "email",
            organization_name: "institution",
            phone: "phone",
            city: "city",
          };
          const mapped: FieldErrors = {};
          for (const [apiField, messages] of Object.entries(body.errors)) {
            const localField = apiFieldMap[apiField];
            if (localField && Array.isArray(messages)) {
              mapped[localField] = (messages as string[])[0];
            }
          }
          if (Object.keys(mapped).length > 0) {
            setFieldErrors(mapped);
          }
          setErrorMessage(body.message || "Please fix the errors and try again.");
        } else {
          setErrorMessage(body.message || "Validation error. Please check your inputs.");
        }
        setStatus("error");
        return;
      }

      setErrorMessage("Something went wrong. Please try again later.");
      setStatus("error");
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={className}>
        <div className="flex flex-col items-center gap-4 py-12 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00dc46"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold tracking-[-0.4px] text-chalk-green-500">
            Thank you!
          </h3>
          <p className="max-w-[320px] text-sm font-medium leading-[1.5] text-[#71717a]">
            We&apos;ve received your inquiry and will get back to you shortly.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-2 text-sm font-semibold text-green-500 underline underline-offset-2 hover:text-green-600"
          >
            Submit another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3  ">
    
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full ${fieldErrors.name ? errorInputClassName : inputClassName}`}
          />
          {fieldErrors.name && (
            <p className="mt-1 text-xs font-medium text-red-500">{fieldErrors.name}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className={`w-full ${fieldErrors.email ? errorInputClassName : inputClassName}`}
          />
          {fieldErrors.email && (
            <p className="mt-1 text-xs font-medium text-red-500">{fieldErrors.email}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="institution"
            placeholder="Institution name"
            value={formData.institution}
            onChange={handleChange}
            className={`w-full ${fieldErrors.institution ? errorInputClassName : inputClassName}`}
          />
          {fieldErrors.institution && (
            <p className="mt-1 text-xs font-medium text-red-500">{fieldErrors.institution}</p>
          )}
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone no."
            value={formData.phone}
            onChange={handleChange}
            className={`w-full ${fieldErrors.phone ? errorInputClassName : inputClassName}`}
          />
          {fieldErrors.phone && (
            <p className="mt-1 text-xs font-medium text-red-500">{fieldErrors.phone}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            name="role"
            placeholder="Your role"
            value={formData.role}
            onChange={handleChange}
            className={`w-full ${inputClassName}`}
          />
          <div>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className={`w-full ${fieldErrors.city ? errorInputClassName : inputClassName}`}
            />
            {fieldErrors.city && (
              <p className="mt-1 text-xs font-medium text-red-500">{fieldErrors.city}</p>
            )}
          </div>
        </div>

        <textarea
          name="message"
          placeholder="How we can help you?"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className={`w-full resize-none ${inputClassName}`}
        />

        {status === "error" && errorMessage && (
          <p className="text-sm font-medium text-red-500">{errorMessage}</p>
        )}

<div className="w-[100%] bg-gray-200 mt-3 h-[1px] mx-auto"></div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-3 w-full cursor-pointer rounded-lg px-4 py-3 text-base font-semibold leading-[1.2] tracking-[-0.32px] text-white shadow-[0px_4px_15px_0px_rgba(0,0,0,0.15)] disabled:opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(137.09deg, #00dc46 1.33%, #008f2e 98.18%)",
          }}
        >
          {status === "submitting" ? "Submitting..." : buttonLabel}
        </button>
      </form>
    </div>
  );
}
