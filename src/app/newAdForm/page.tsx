'use client';

import {
  faImage,
  faLocationCrosshairs,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, FormEvent, useEffect } from 'react';
import { UploadResponse } from 'imagekit/dist/libs/interfaces';
import UploadArea from '@/components/UploadArea';
import FormInputs from '@/components/FormInputs';

import MapPicker from 'react-google-map-picker';

export default function NewAdPage() {
  const [files, setFiles] = useState<UploadResponse[]>([]);
  const [showMap, setShowMap] = useState(false);
  useEffect(() => {
    setShowMap(true);
  }, []);

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
              {showMap && (
                <MapPicker
                  apiKey={'AIzaSyAcSFw1FFDxlIbuF4ogdx9M6ZScbiIHGXs'}
                  defaultLocation={{ lat: 10, lng: 106 }}
                />
              )}
            </div>
          </div>
        </div>
        <div className="grow pt-3">
          <FormInputs />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded mt-1"
          ></button>
        </div>
      </form>
    </div>
  );
}
