'use client';

import Uploader from '@/components/Uploader';
import {
  faImage,
  faLocationCrosshairs,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, FormEvent } from 'react';
import { UploadResponse } from 'imagekit/dist/libs/interfaces';
import UploadArea from '@/components/UploadArea';

export default function NewAdPage() {
  const [files, setFiles] = useState<UploadResponse[]>([]);

  return (
    <div>
      <form className="max-w-xl mx-auto flex gap-12">
        <div className="grow pt-8">
          <UploadArea files={files} setFiles={setFiles} />

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
            className="bg-blue-600 text-white px-6 py-2 rounded mt-1"
          ></button>
        </div>
      </form>
    </div>
  );
}
