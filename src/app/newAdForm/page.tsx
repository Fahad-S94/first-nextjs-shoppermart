'use client';

import Uploader from '@/components/Uploader';
import {
  faImage,
  faLocationCrosshairs,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      <form onSubmit={submitForm} className="max-w-xl mx-auto flex gap-12">
        <div className="grow pt-8">
          <div className="bg-gray-200 p-4 rounded">
            <h2 className="text-center text-gray-500 font-bold uppercase text-xs">
              Picture of Product
            </h2>
            <div className="flex flex-col">
              <FontAwesomeIcon
                icon={faImage}
                className="h-24 text-gray-300 mb-2 mt-2"
              />
              <Uploader onSuccess="" />
              <button className="border-blue-400 text-blue-600 px-4 py-2 rounded mt-1 inline-flex gap-1 items-center justify-center">
                <FontAwesomeIcon icon={faPlus} />
                Add Photo
              </button>
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="" className="">
              Location
            </label>
            <button className="flex items-center gap-1 py-1 justify-center border w-full border-gray-500 text-gray-600 rounded">
              <FontAwesomeIcon icon={faLocationCrosshairs} />
              <span>Share Location</span>
            </button>
            <div className="bg-gray-100 p-4 min-h-12 rounded text-gray-400 text-center mt-2">
              Google Map
            </div>
          </div>
        </div>
        <div className="grow pt-3">
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
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 text-white px-6 py-2 rounded mt-1"
          >
            {isLoading ? 'Loading...' : 'Publish'}
          </button>
        </div>
      </form>
    </div>
  );
}
