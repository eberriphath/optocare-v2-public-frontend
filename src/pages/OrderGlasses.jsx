import { useState } from "react";
import api from "../api/api";

function OrderGlasses() {
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    date_of_birth: "",
    right_sph: "",
    right_cyl: "",
    right_axis: "",
    right_add: "",
    right_pd: "",
    left_sph: "",
    left_cyl: "",
    left_axis: "",
    left_add: "",
    left_pd: "",
    frame_make: "",
    frame_model: "",
    frame_size: "",
    tint_color: "",
    lens_type: "",
    coating: "",
    base_curve: "",
    remarks: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setSuccess(null);
    setLoading(true);

    try {
      const response = await api.post("/orders/public", {
        full_name: formData.full_name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim() || null,
        date_of_birth: formData.date_of_birth || null,

        prescription: {
          right_sph: formData.right_sph || null,
          right_cyl: formData.right_cyl || null,
          right_axis: formData.right_axis || null,
          right_add: formData.right_add || null,
          right_pd: formData.right_pd || null,

          left_sph: formData.left_sph || null,
          left_cyl: formData.left_cyl || null,
          left_axis: formData.left_axis || null,
          left_add: formData.left_add || null,
          left_pd: formData.left_pd || null,
        },

        frame_make: formData.frame_make || null,
        frame_model: formData.frame_model || null,
        frame_size: formData.frame_size || null,
        tint_color: formData.tint_color || null,

        lens_type: formData.lens_type || null,
        coating: formData.coating || null,
        base_curve: formData.base_curve || null,

        remarks: formData.remarks.trim() || null,
      });

      setSuccess(response.data.order);
    } catch (error) {
      console.error("Failed to submit glasses order:", error);

      setError(
        error.response?.data?.message ||
        error.response?.data?.error ||
        "We couldn't submit your order request. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <main className="min-h-[70vh] bg-[#f8f9fb] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-2xl justify-center">
          <div className="w-full rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Order submitted
            </p>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#172033] sm:text-4xl">
              We have received your request.
            </h1>

            <p className="mx-auto mt-5 max-w-lg leading-7 text-slate-500">
              Our optical team will review your request and get in touch with
              you using the contact details you provided.
            </p>

            <div className="mt-8 rounded-2xl bg-[#f3f5f7] px-6 py-5">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                Your order number
              </p>

              <p className="mt-2 text-2xl font-semibold tracking-wide text-[#172033]">
                {success.order_number}
              </p>
            </div>

            <p className="mt-5 text-sm text-slate-400">
              Status:{" "}
              <span className="font-medium text-slate-600">
                {success.status}
              </span>
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f9fb] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            Get your glasses
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#172033] sm:text-5xl">
            Tell us what you need.
          </h1>

          <p className="mt-5 leading-7 text-slate-500">
            Submit your details, prescription and preferred frame and lens
            specifications. Our team will review your request and connect you
            with the appropriate optical partner.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mt-8 rounded-2xl border border-red-100 bg-red-50 px-5 py-4 text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-10 space-y-8">

          {/* Customer information */}
          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Step 1
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-[#172033]">
                Your details
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                We need these details so our team can identify your request
                and contact you.
              </p>
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">

              <div className="sm:col-span-2">
                <label
                  htmlFor="full_name"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Full name *
                </label>

                <input
                  id="full_name"
                  name="full_name"
                  type="text"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#172033] focus:ring-2 focus:ring-slate-100"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Phone number *
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                  placeholder="e.g. 0712345678"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#172033] focus:ring-2 focus:ring-slate-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#172033] focus:ring-2 focus:ring-slate-100"
                />
              </div>

              <div>
                <label
                  htmlFor="date_of_birth"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Date of birth
                </label>

                <input
                  id="date_of_birth"
                  name="date_of_birth"
                  type="date"
                  value={formData.date_of_birth}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#172033] focus:ring-2 focus:ring-slate-100"
                />
              </div>

            </div>
          </section>


        {/* Prescription */}
<section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
  <div>
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
      Step 2
    </p>

    <h2 className="mt-2 text-2xl font-semibold text-[#172033]">
      Your prescription
    </h2>

    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
      Enter the values from your latest prescription. If you don't have a
      prescription, you can leave these fields blank and our team can help
      you with the next step.
    </p>
  </div>

  <div className="mt-8 grid gap-6 lg:grid-cols-2">

    {/* Right eye */}
    <div className="rounded-2xl bg-[#f8f9fb] p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            OD
          </p>

          <h3 className="mt-1 text-lg font-semibold text-[#172033]">
            Right eye
          </h3>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4">

        <div>
          <label
            htmlFor="right_sph"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            SPH
          </label>

          <input
            id="right_sph"
            name="right_sph"
            type="text"
            value={formData.right_sph}
            onChange={handleChange}
            placeholder="e.g. -1.25"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#172033] focus:ring-2 focus:ring-slate-100"
          />
        </div>

        <div>
          <label
            htmlFor="right_cyl"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            CYL
          </label>

          <input
            id="right_cyl"
            name="right_cyl"
            type="text"
            value={formData.right_cyl}
            onChange={handleChange}
            placeholder="e.g. -0.75"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#172033] focus:ring-2 focus:ring-slate-100"
          />
        </div>

        <div>
          <label
            htmlFor="right_axis"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            AXIS
          </label>

          <input
            id="right_axis"
            name="right_axis"
            type="text"
            value={formData.right_axis}
            onChange={handleChange}
            placeholder="e.g. 90"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#172033] focus:ring-2 focus:ring-slate-100"
          />
        </div>

        <div>
          <label
            htmlFor="right_add"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            ADD
          </label>

          <input
            id="right_add"
            name="right_add"
            type="text"
            value={formData.right_add}
            onChange={handleChange}
            placeholder="e.g. +2.00"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#172033] focus:ring-2 focus:ring-slate-100"
          />
        </div>

        <div className="col-span-2">
          <label
            htmlFor="right_pd"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            PD
          </label>

          <input
            id="right_pd"
            name="right_pd"
            type="text"
            value={formData.right_pd}
            onChange={handleChange}
            placeholder="e.g. 31.5"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#172033] focus:ring-2 focus:ring-slate-100"
          />
        </div>

      </div>
    </div>

    {/* Left eye */}
    <div className="rounded-2xl bg-[#f8f9fb] p-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
          OS
        </p>

        <h3 className="mt-1 text-lg font-semibold text-[#172033]">
          Left eye
        </h3>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4">

        <div>
          <label
            htmlFor="left_sph"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            SPH
          </label>

          <input
            id="left_sph"
            name="left_sph"
            type="text"
            value={formData.left_sph}
            onChange={handleChange}
            placeholder="e.g. -1.25"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#172033] focus:ring-2 focus:ring-slate-100"
          />
        </div>

        <div>
          <label
            htmlFor="left_cyl"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            CYL
          </label>

          <input
            id="left_cyl"
            name="left_cyl"
            type="text"
            value={formData.left_cyl}
            onChange={handleChange}
            placeholder="e.g. -0.75"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#172033] focus:ring-2 focus:ring-slate-100"
          />
        </div>

        <div>
          <label
            htmlFor="left_axis"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            AXIS
          </label>

          <input
            id="left_axis"
            name="left_axis"
            type="text"
            value={formData.left_axis}
            onChange={handleChange}
            placeholder="e.g. 90"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#172033] focus:ring-2 focus:ring-slate-100"
          />
        </div>

        <div>
          <label
            htmlFor="left_add"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            ADD
          </label>

          <input
            id="left_add"
            name="left_add"
            type="text"
            value={formData.left_add}
            onChange={handleChange}
            placeholder="e.g. +2.00"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#172033] focus:ring-2 focus:ring-slate-100"
          />
        </div>

        <div className="col-span-2">
          <label
            htmlFor="left_pd"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            PD
          </label>

          <input
            id="left_pd"
            name="left_pd"
            type="text"
            value={formData.left_pd}
            onChange={handleChange}
            placeholder="e.g. 31.5"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#172033] focus:ring-2 focus:ring-slate-100"
          />
        </div>

      </div>
    </div>

  </div>

  <div className="mt-6 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-500">
    <span className="font-medium text-slate-700">Don't have your prescription?</span>{" "}
    That's okay. Leave these fields blank and tell us in the remarks section
    what kind of assistance you need.
  </div>
</section>


{/* Frame & lens preferences */}
<section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
  <div>
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
      Step 3
    </p>

    <h2 className="mt-2 text-2xl font-semibold text-[#172033]">
      Frame & lens preferences
    </h2>

    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
      Tell us what you're looking for. If you're unsure about any of these
      options, leave them blank and our optical team can help you choose.
    </p>
  </div>

  <div className="mt-8 space-y-8">

    {/* Frame */}
    <div>
      <div className="mb-5">
        <h3 className="text-lg font-semibold text-[#172033]">
          Frame
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          If you already know the frame you want, provide its details here.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">

        <div>
          <label
            htmlFor="frame_make"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Frame make
          </label>

          <input
            id="frame_make"
            name="frame_make"
            type="text"
            value={formData.frame_make}
            onChange={handleChange}
            placeholder="e.g. Ray-Ban"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#172033] focus:ring-2 focus:ring-slate-100"
          />
        </div>

        <div>
          <label
            htmlFor="frame_model"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Frame model
          </label>

          <input
            id="frame_model"
            name="frame_model"
            type="text"
            value={formData.frame_model}
            onChange={handleChange}
            placeholder="e.g. RX5228"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#172033] focus:ring-2 focus:ring-slate-100"
          />
        </div>

        <div>
          <label
            htmlFor="frame_size"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Frame size
          </label>

          <input
            id="frame_size"
            name="frame_size"
            type="text"
            value={formData.frame_size}
            onChange={handleChange}
            placeholder="e.g. Medium / 52-18-140"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#172033] focus:ring-2 focus:ring-slate-100"
          />
        </div>

        <div>
          <label
            htmlFor="tint_color"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Tint / colour
          </label>

          <input
            id="tint_color"
            name="tint_color"
            type="text"
            value={formData.tint_color}
            onChange={handleChange}
            placeholder="e.g. Clear / Grey / Brown"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#172033] focus:ring-2 focus:ring-slate-100"
          />
        </div>

      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-slate-200" />

    {/* Lenses */}
    <div>
      <div className="mb-5">
        <h3 className="text-lg font-semibold text-[#172033]">
          Lenses
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Tell us about your preferred lens type and treatments.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">

        <div>
          <label
            htmlFor="lens_type"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Lens type
          </label>

          <select
            id="lens_type"
            name="lens_type"
            value={formData.lens_type}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#172033] focus:ring-2 focus:ring-slate-100"
          >
            <option value="">Select lens type</option>
            <option value="Single Vision">Single Vision</option>
            <option value="Bifocal">Bifocal</option>
            <option value="Progressive">Progressive</option>
            <option value="Reading">Reading</option>
            <option value="Computer">Computer</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="coating"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Coating
          </label>

          <select
            id="coating"
            name="coating"
            value={formData.coating}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#172033] focus:ring-2 focus:ring-slate-100"
          >
            <option value="">Select coating</option>
            <option value="Anti-Reflective">
              Anti-Reflective
            </option>
            <option value="Blue Light Filter">
              Blue Light Filter
            </option>
            <option value="Scratch Resistant">
              Scratch Resistant
            </option>
            <option value="UV Protection">
              UV Protection
            </option>
            <option value="Photochromic">
              Photochromic
            </option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="base_curve"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Base curve
          </label>

          <input
            id="base_curve"
            name="base_curve"
            type="text"
            value={formData.base_curve}
            onChange={handleChange}
            placeholder="e.g. 8.4"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#172033] focus:ring-2 focus:ring-slate-100"
          />
        </div>

      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-slate-200" />

    {/* Remarks */}
    <div>
      <label
        htmlFor="remarks"
        className="mb-2 block text-sm font-medium text-slate-700"
      >
        Additional notes
      </label>

      <textarea
        id="remarks"
        name="remarks"
        value={formData.remarks}
        onChange={handleChange}
        rows={5}
        placeholder="Tell us anything else we should know about your glasses request..."
        className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#172033] focus:ring-2 focus:ring-slate-100"
      />

      <p className="mt-2 text-xs text-slate-400">
        For example: preferred style, intended use, existing frame,
        prescription assistance, or anything else you'd like our team to know.
      </p>
    </div>

  </div>
</section>

{/* Review & submit */}
<section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
  <div>
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
      Final step
    </p>

    <h2 className="mt-2 text-2xl font-semibold text-[#172033]">
      Review your request
    </h2>

    <p className="mt-2 text-sm leading-6 text-slate-500">
      Please make sure your contact details are correct before submitting.
      Our team will review the request and contact you if anything needs
      clarification.
    </p>
  </div>

  <div className="mt-7 grid gap-4 sm:grid-cols-2">

    {/* Contact summary */}
    <div className="rounded-2xl bg-[#f8f9fb] p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
        Contact
      </p>

      <div className="mt-4 space-y-2 text-sm">
        <p className="text-[#172033]">
          <span className="font-medium">Name:</span>{" "}
          {formData.full_name || "Not provided"}
        </p>

        <p className="text-[#172033]">
          <span className="font-medium">Phone:</span>{" "}
          {formData.phone || "Not provided"}
        </p>

        <p className="break-all text-[#172033]">
          <span className="font-medium">Email:</span>{" "}
          {formData.email || "Not provided"}
        </p>
      </div>
    </div>

    {/* Prescription summary */}
    <div className="rounded-2xl bg-[#f8f9fb] p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
        Prescription
      </p>

      <div className="mt-4 space-y-2 text-sm">
        <p className="text-[#172033]">
          <span className="font-medium">Right eye:</span>{" "}
          {formData.right_sph || "—"} / {formData.right_cyl || "—"} /{" "}
          {formData.right_axis || "—"}
        </p>

        <p className="text-[#172033]">
          <span className="font-medium">Left eye:</span>{" "}
          {formData.left_sph || "—"} / {formData.left_cyl || "—"} /{" "}
          {formData.left_axis || "—"}
        </p>

        <p className="text-slate-500">
          ADD / PD values will be sent with your order where provided.
        </p>
      </div>
    </div>

    {/* Frame summary */}
    <div className="rounded-2xl bg-[#f8f9fb] p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
        Frame
      </p>

      <div className="mt-4 space-y-2 text-sm text-[#172033]">
        <p>
          <span className="font-medium">Make:</span>{" "}
          {formData.frame_make || "Not specified"}
        </p>

        <p>
          <span className="font-medium">Model:</span>{" "}
          {formData.frame_model || "Not specified"}
        </p>

        <p>
          <span className="font-medium">Size:</span>{" "}
          {formData.frame_size || "Not specified"}
        </p>
      </div>
    </div>

    {/* Lens summary */}
    <div className="rounded-2xl bg-[#f8f9fb] p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
        Lenses
      </p>

      <div className="mt-4 space-y-2 text-sm text-[#172033]">
        <p>
          <span className="font-medium">Type:</span>{" "}
          {formData.lens_type || "Not specified"}
        </p>

        <p>
          <span className="font-medium">Coating:</span>{" "}
          {formData.coating || "Not specified"}
        </p>

        <p>
          <span className="font-medium">Base curve:</span>{" "}
          {formData.base_curve || "Not specified"}
        </p>
      </div>
    </div>

  </div>

  <div className="mt-7 flex flex-col gap-5 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">

    <p className="max-w-xl text-xs leading-5 text-slate-400">
      By submitting this request, you agree to our{" "}
      <a
        href="/terms"
        className="font-medium text-slate-600 underline underline-offset-2 hover:text-[#172033]"
      >
        Terms
      </a>{" "}
      and{" "}
      <a
        href="/privacy"
        className="font-medium text-slate-600 underline underline-offset-2 hover:text-[#172033]"
      >
        Privacy Policy
      </a>
      .
    </p>

    <button
      type="submit"
      disabled={loading}
      className="w-full rounded-full bg-[#172033] px-8 py-3.5 text-sm font-medium text-white transition hover:bg-[#283650] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
    >
      {loading ? "Submitting..." : "Submit Order Request"}
    </button>

  </div>
</section>

        </form>
      </div>
    </main>
  );
}

export default OrderGlasses;