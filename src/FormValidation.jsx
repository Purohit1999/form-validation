import { useState } from "react";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    reqfield: "",
    email: "",
    password: "",
    confirmpass: "",
    url: "",
    digits: "",
    number: "",
    alphanum: "",
    textarea: ""
  });

  const { reqfield, email, password, confirmpass, url, digits, number, alphanum, textarea } = formData;

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    // Required field validation
    if (reqfield === "") {
      validationErrors.reqfield = "* This field is mandatory";
    }

    // Email validation
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      validationErrors.email = "This field is mandatory";
    } else if (!regexEmail.test(email)) {
      validationErrors.email = "This should be a valid email";
    }

    // Password validation
    if (password === "") {
      validationErrors.password = "This field is mandatory";
    }

    // Confirm password validation
    if (confirmpass === "") {
      validationErrors.confirmpass = "This field is mandatory";
    } else if (password !== confirmpass) {
      validationErrors.confirmpass = "Password does not match";
    }

    // URL validation
    const regexUrl = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-]*)*\/?$/;
    if (url === "") {
      validationErrors.url = "This field is mandatory";
    } else if (!regexUrl.test(url)) {
      validationErrors.url = "This is not a valid URL";
    }

    // Digits validation
    const regexDigits = /^\d+$/;
    if (digits === "") {
      validationErrors.digits = "This field is mandatory";
    } else if (!regexDigits.test(digits)) {
      validationErrors.digits = "It should be a valid digit";
    }

    // Number validation (supports decimal and negative)
    const regexNumber = /^-?\d+(\.\d+)?$/;
    if (number === "") {
      validationErrors.number = "This field is mandatory";
    } else if (!regexNumber.test(number)) {
      validationErrors.number = "It should be a valid number";
    }

    // Alphanumeric validation
    const regexAlphanum = /^[a-zA-Z0-9]+$/;
    if (alphanum === "") {
      validationErrors.alphanum = "This field is mandatory";
    } else if (!regexAlphanum.test(alphanum)) {
      validationErrors.alphanum = "It should be alphanumeric";
    }

    setErrors(validationErrors);
  };

  return (
    <form className="w-1/3 ml-2" onSubmit={handleSubmit}>
      <legend className="text-2xl font-bold text-red-800 border-b-[3.5px]">Form Validation</legend>

      {/* REQUIRED FIELD */}
      <section className="form-group p-[1.5px] my-3">
        <label>Required Field</label>
        <div className="inp mt-2">
          <input
            type="text"
            placeholder="required field"
            className="border bg-slate-100 p-2 w-full"
            name="reqfield"
            value={reqfield}
            onChange={handleChange}
          />
          <div className="form-error ring-offset-amber-950 text-sm">
            {errors.reqfield && <span>{errors.reqfield}</span>}
          </div>
        </div>
      </section>

      {/* EMAIL */}
      <section className="form-group p-[1.5px] my-3">
        <label>Email</label>
        <div className="inp mt-2">
          <input
            type="text"
            placeholder="Enter email"
            className="border bg-slate-100 p-2 w-full"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <div className="form-error ring-offset-amber-950 text-sm">
            {errors.email && <span>{errors.email}</span>}
          </div>
        </div>
      </section>

      {/* PASSWORD */}
      <section className="form-group p-[1.5px] my-3">
        <label>Password</label>
        <div className="inp">
          <input
            type="password"
            placeholder="Enter password"
            className="border bg-slate-100 p-2 w-full"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <div className="form-error ring-offset-amber-950 text-sm">
            {errors.password && <span>{errors.password}</span>}
          </div>
        </div>

        <div className="inp mt-2">
          <input
            type="password"
            placeholder="Confirm password"
            className="border bg-slate-100 p-2 w-full"
            name="confirmpass"
            value={confirmpass}
            onChange={handleChange}
          />
          <div className="form-error ring-offset-amber-950 text-sm">
            {errors.confirmpass && <span>{errors.confirmpass}</span>}
          </div>
        </div>
      </section>

      {/* URL */}
      <section className="form-group p-[1.5px] my-3">
        <label>URL</label>
        <div className="inp mt-2">
          <input
            type="text"
            placeholder="Enter URL"
            className="border bg-slate-100 p-2 w-full"
            name="url"
            value={url}
            onChange={handleChange}
          />
          <div className="form-error ring-offset-amber-950 text-sm">
            {errors.url && <span>{errors.url}</span>}
          </div>
        </div>
      </section>

      {/* DIGITS */}
      <section className="form-group p-[1.5px] my-3">
        <label>Digits</label>
        <div className="inp mt-2">
          <input
            type="text"
            placeholder="Enter digits"
            className="border bg-slate-100 p-2 w-full"
            name="digits"
            value={digits}
            onChange={handleChange}
          />
          <div className="form-error ring-offset-amber-950 text-sm">
            {errors.digits && <span>{errors.digits}</span>}
          </div>
        </div>
      </section>

      {/* NUMBER */}
      <section className="form-group p-[1.5px] my-3">
        <label>Number</label>
        <div className="inp mt-2">
          <input
            type="text"
            placeholder="Enter number"
            className="border bg-slate-100 p-2 w-full"
            name="number"
            value={number}
            onChange={handleChange}
          />
          <div className="form-error ring-offset-amber-950 text-sm">
            {errors.number && <span>{errors.number}</span>}
          </div>
        </div>
      </section>

      {/* ALPHANUMERIC */}
      <section className="form-group p-[1.5px] my-3">
        <label>Alphanumeric</label>
        <div className="inp mt-2">
          <input
            type="text"
            placeholder="Enter Alphanumeric"
            className="border bg-slate-100 p-2 w-full"
            name="alphanum"
            value={alphanum}
            onChange={handleChange}
          />
          <div className="form-error ring-offset-amber-950 text-sm">
            {errors.alphanum && <span>{errors.alphanum}</span>}
          </div>
        </div>
      </section>

      {/* TEXTAREA */}
      <section className="form-group p-[1.5px] my-3">
        <label>Textarea</label>
        <div className="inp mt-2">
          <textarea
            rows={6}
            cols={30}
            className="border bg-slate-100 p-2 w-full"
            name="textarea"
            value={textarea}
            onChange={handleChange}
          ></textarea>
        </div>
      </section>

      {/* BUTTONS */}
      <section className="form-group p-[1.5px] my-3">
        <div className="flex gap-3">
          <button type="submit" className="bg-red-800 rounded-md px-4 py-1 text-white">Submit</button>
          <button type="reset" className="bg-red-800 rounded-md px-4 py-1 text-white">Reset</button>
        </div>
      </section>
    </form>
  );
};

export default FormValidation;
