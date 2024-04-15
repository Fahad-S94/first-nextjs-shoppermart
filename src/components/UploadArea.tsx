import { faImage, faL, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UploadResponse } from 'imagekit/dist/libs/interfaces';
import { Dispatch, SetStateAction, useState } from 'react';
import Uploader from './Uploader';

type Props = {
  files: UploadResponse[];
  setFiles: Dispatch<SetStateAction<UploadResponse[]>>;
};

export default function UploadArea({ files, setFiles }: Props) {
  const [isUploading, setIsUploading] = useState(false);

  return (
    <div className="bg-gray-200 p-4 rounded">
      <h2 className="text-center text-gray-500 font-bold uppercase text-xs">
        Picture of Product
      </h2>
      <div className="flex flex-col">
        <FontAwesomeIcon
          icon={faImage}
          className="h-24 text-gray-300 mb-2 mt-2"
        />

        <label
          onClick={() => console.log}
          className={
            'upload-btn px-4 py-2 rounded mt-1 inline-flex gap-1 items-center justify-center border' +
            (isUploading
              ? 'text-gray-400 cursor-not-allowed'
              : 'cursor-pointer border-blue-400 text-blue-600')
          }
        >
          <Uploader
            onUploadStart={() => setIsUploading(true)}
            onSuccess={(file) => {
              setFiles((prev) => [...prev, file]);
              setIsUploading(false)
            }}
          />
          {isUploading ? (
            <span>Uploading</span>
          ) : (
            <>
              <FontAwesomeIcon icon={faPlus} />
              <span>Add photos</span>
            </>
          )}
        </label>
        {files.map((file) => (
          <div className="text-xs">{file.url}</div>
        ))}
      </div>
    </div>
  );
}
