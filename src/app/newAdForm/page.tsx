'use client';

import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { UploadResponse } from 'imagekit/dist/libs/interfaces';
import UploadArea from '@/components/UploadArea';
import FormInputs from '@/components/FormInputs';
import LocationPicker, { Location } from '@/components/LocationPicker';

const locationDefault = {
  lat: 45.514752,
  lng: -73.6886784,
};

export default function NewAdPage() {
  const [files, setFiles] = useState<UploadResponse[]>([]);

  const [location, setLocation] = useState<Location>(locationDefault);
  const [gpsCoords, setGpsCoords] = useState<Location | null>(null);

  function handleFindMyPositionClick() {
    navigator.geolocation.getCurrentPosition((ev) => {
      const location = { lat: ev.coords.latitude, lng: ev.coords.longitude };
      setLocation(location);
      setGpsCoords(location);
    }, console.error);
  }

  function handleSubmit(formData: FormData) {
    formData.set('location', JSON.toString(location))
    formData.set('files', JSON.stringify(files))
    console.log(Object.fromEntries(formData))
  }

  return (
    <form action={handleSubmit} className="max-w-xl mx-auto flex gap-12">
      <div className="grow pt-8">
        <UploadArea files={files} setFiles={setFiles} />

        <div className="mt-5">
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="" className="mt-0 mb-0">
              Location
            </label>
            <div>
              <button
                type="button"
                onClick={handleFindMyPositionClick}
                className="flex items-center p-1 justify-center text-gray-600 rounded"
              >
                <FontAwesomeIcon icon={faLocationCrosshairs} />
              </button>
            </div>
          </div>
          <div className="bg-gray-100 overflow-hidden min-h-12 rounded text-gray-400 text-center mt-2">
            {/* <span className="text-xs">{JSON.stringify(location)}</span> */}
            <LocationPicker
              defaultLocation={locationDefault}
              gpsCoords={gpsCoords}
              onChange={(location) => setLocation(location)}
            />
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
  );
}
