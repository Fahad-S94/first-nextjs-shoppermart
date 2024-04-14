'use client';

import React, { useState, FormEvent } from 'react';

export default function NewAdPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null); // Clear previous errors when a new request starts

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit the data. Please try again.');
      }

      // Handle response if necessary
      const data = await response.json();
      // ...
    } catch (error) {
      // Capture the error message to display to the user
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={submitForm} className="max-w-sm mx-auto">
        <div>product photo</div>
        <div>
          <label htmlFor="titleIn">Title</label>
          <input id="titleIn" type="text" placeholder="Title" />

          <label htmlFor="priceIn">Price</label>
          <input id="priceIn" type="number" placeholder="Price" />

          <label htmlFor="categoryIn">Category</label>
          <select name="" id="categoryIn">
            <option selected disabled value="">
              Select Category
            </option>
            <option value="">Cars</option>
            <option value="">Electronic</option>
            <option value="">Properties</option>
          </select>

          <label htmlFor="descriptionIn">Description</label>
          <textarea
            name=""
            id="descriptionIn"
            placeholder="description"
          ></textarea>

          <label htmlFor="contactIn">Contact Info</label>
          <textarea
            name=""
            id="contactIn"
            placeholder="phone #:438 979 9666"
          ></textarea>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}
