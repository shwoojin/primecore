"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  inquiryTypes: string[];
};

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm({ inquiryTypes }: ContactFormProps) {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");

    const formData = new FormData(event.currentTarget);
    const payload = {
      inquiryType: String(formData.get("inquiryType") || ""),
      company: String(formData.get("company") || ""),
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { success?: boolean };

      if (!response.ok || !result.success) {
        setSubmitState("error");
        return;
      }

      event.currentTarget.reset();
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>문의 유형</legend>
        <select className="inquiry-select" name="inquiryType" defaultValue="" required>
          <option value="" disabled>
            선택하기
          </option>
          {inquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </fieldset>
      <div className="form-grid">
        <label>
          회사명
          <input name="company" type="text" required />
        </label>
        <label>
          담당자명
          <input name="name" type="text" required />
        </label>
        <label>
          연락처
          <input name="phone" type="tel" required />
        </label>
        <label>
          이메일
          <input name="email" type="email" required />
        </label>
      </div>
      <label>
        문의내용
        <textarea name="message" rows={8} required />
      </label>
      <button className="button button--primary" type="submit" disabled={submitState === "submitting"}>
        {submitState === "submitting" ? "전송 중" : "문의 보내기"}
      </button>
      {submitState === "success" && (
        <p className="form-message form-message--success">문의가 접수되었습니다.</p>
      )}
      {submitState === "error" && (
        <p className="form-message form-message--error">문의 접수에 실패했습니다. 잠시 후 다시 시도해주세요.</p>
      )}
    </form>
  );
}
