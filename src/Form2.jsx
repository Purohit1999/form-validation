
import React, { useState } from "react";

const Form2 = () => {
  const [formData, setFormData] = useState({
    minLength: "",
    maxLength: "",
    rangeLength: "",
    minValue: "",
    maxValue: "",
    rangeValue: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    // Min Length validation
    if (formData.minLength === "" || formData.minLength.length < 7) {
      validationErrors.minLength = "Min length must be at least 7 characters";
    }

    // Max Length validation
    if (formData.maxLength === "" || formData.maxLength.length > 7) {
      validationErrors.maxLength = "Max length must be no more than 7 characters";
    }

    // Range Length validation
    if (formData.rangeLength === "" || formData.rangeLength.length < 7 || formData.rangeLength.length > 15) {
      validationErrors.rangeLength = "Range length must be between 7 and 15 characters";
    }

    // Min Value validation
    if (formData.minValue === "" || Number(formData.minValue) < 7) {
      validationErrors.minValue = "Min value must be at least 7";
    }

    // Max Value validation
    if (formData.maxValue === "" || Number(formData.maxValue) > 7) {
      validationErrors.maxValue = "Max value must be no more than 7";
    }

    // Range Value validation
    if (formData.rangeValue === "" || !(Number(formData.rangeValue) >= 7 && Number(formData.rangeValue) <= 15)) {
      validationErrors.rangeValue = "Range value must be between 7 and 15";
    }

    setErrors(validationErrors);
  };

  const handleReset = () => {
    setFormData({
      minLength: "",
      maxLength: "",
      rangeLength: "",
      minValue: "",
      maxValue: "",
      rangeValue: ""
    });
    setErrors({});
  };

  return (
    <form className="w-1/3 ml-2" onSubmit={handleSubmit}>
      <legend className="text-2xl font-bold text-red-800 border-b-[3.5px]">
        Form Validation
      </legend>

      {/* Min Length */}
      <section className="form-group p-[1.5px] my-3">
        <label>Min Length</label>
        <div className="inp mt-2">
          <input
            type="text"
            placeholder="Min 7 characters"
            className="border bg-slate-50 p-2 w-full"
            name="minLength"
            value={formData.minLength}
            onChange={handleChange}
          />
          <div className="form-error text-sm">
            {errors.minLength && <span>{errors.minLength}</span>}
          </div>
        </div>
      </section>

      {/* Max Length */}
      <section className="form-group p-[1.5px] my-3">
        <label>Max Length</label>
        <div className="inp mt-2">
          <input
            type="text"
            placeholder="Max 7 characters"
            className="border bg-slate-50 p-2 w-full"
            name="maxLength"
            value={formData.maxLength}
            onChange={handleChange}
          />
          <div className="form-error text-sm">
            {errors.maxLength && <span>{errors.maxLength}</span>}
          </div>
        </div>
      </section>

      {/* Range Length */}
      <section className="form-group p-[1.5px] my-3">
        <label>Range Length</label>
        <div className="inp mt-2">
          <input
            type="text"
            placeholder="7-15 characters"
            className="border bg-slate-50 p-2 w-full"
            name="rangeLength"
            value={formData.rangeLength}
            onChange={handleChange}
          />
          <div className="form-error text-sm">
            {errors.rangeLength && <span>{errors.rangeLength}</span>}
          </div>
        </div>
      </section>

      {/* Min Value */}
      <section className="form-group p-[1.5px] my-3">
        <label>Min Value</label>
        <div className="inp mt-2">
          <input
            type="number"
            placeholder="Min value 7"
            className="border bg-slate-50 p-2 w-full"
            name="minValue"
            value={formData.minValue}
            onChange={handleChange}
          />
          <div className="form-error text-sm">
            {errors.minValue && <span>{errors.minValue}</span>}
          </div>
        </div>
      </section>

      {/* Max Value */}
      <section className="form-group p-[1.5px] my-3">
        <label>Max Value</label>
        <div className="inp mt-2">
          <input
            type="number"
            placeholder="Max value 7"
            className="border bg-slate-50 p-2 w-full"
            name="maxValue"
            value={formData.maxValue}
            onChange={handleChange}
          />
          <div className="form-error text-sm">
            {errors.maxValue && <span>{errors.maxValue}</span>}
          </div>
        </div>
      </section>

      {/* Range Value */}
      <section className="form-group p-[1.5px] my-3">
        <label>Range Value</label>
        <div className="inp mt-2">
          <input
            type="number"
            placeholder="Value between 7-15"
            className="border bg-slate-50 p-2 w-full"
            name="rangeValue"
            value={formData.rangeValue}
            onChange={handleChange}
          />
          <div className="form-error text-sm">
            {errors.rangeValue && <span>{errors.rangeValue}</span>}
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="form-group p-[1.5px] my-3">
        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-red-800 rounded-md px-4 py-1 text-white"
          >
            Submit
          </button>
          <button
            type="button"
            className="bg-red-800 rounded-md px-4 py-1 text-white"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </section>
    </form>
  );
};

export default Form2;
