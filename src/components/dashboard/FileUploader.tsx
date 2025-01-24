import { useState } from "react";
import { useDropzone, FileRejection } from "react-dropzone";
import { UseFormRegisterReturn } from "react-hook-form";
import imgUpload from "../../assets/file-upload.svg";

interface IProps {
  onFileUpload: (file: File) => void;
  initialImage?: string;
  maxSize?: number;
  name?: string;
  register?: UseFormRegisterReturn;
}

const ImageUpload = ({
  onFileUpload,
  initialImage,
  maxSize = 5 * 1024 * 1024, // Default to 5MB
  name,
  register,
}: IProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");

  const onDrop = (acceptedFiles: File[], fileRejections: FileRejection[]) => {
    if (fileRejections.length > 0) {
      // Handle file rejection errors
      const rejection = fileRejections[0];
      if (rejection.errors[0].code === "file-too-large") {
        setError(`حجم الملف يجب أن يكون أقل من ${maxSize / 1024 / 1024}MB.`);
      } else if (rejection.errors[0].code === "file-invalid-type") {
        setError("الملف يجب أن يكون (JPEG, PNG, JPG, WEBP).");
      }
      return;
    }

    const file = acceptedFiles[0];
    setSelectedFile(file);
    setError("");
    onFileUpload(file); // Call the callback with the uploaded file
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
    maxSize,
    multiple: false,
  });

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div
        {...getRootProps()}
        {...(register && { ...register })}
        className={`w-full h-64 max-w-sm border-2 border-dashed rounded-lg flex items-center border-blue-500 bg-blue-50 justify-center text-center cursor-pointer ${
          isDragActive && "border-blue-500 bg-blue-50"
        }`}
      >
        <input {...getInputProps()} name={name} className="hidden" />
        {selectedFile || initialImage ? (
          <div className="w-full h-full flex flex-col items-center">
            <img
              src={
                selectedFile ? URL.createObjectURL(selectedFile) : initialImage
              }
              alt="Preview"
              className="max-w-full w-full h-full rounded-lg object-contain"
            />
          </div>
        ) : (
          <div className="h-full w-full flex flex-col items-center justify-center py-6 px-4 gap-y-4">
            <img src={imgUpload} alt="file-upload" />
            <p className="text-gray-600">
              {isDragActive
                ? "اسقط الصورة هنا"
                : "اسحب واسقط الصورة هنا أو اضغط لاختيار ملف"}
            </p>
          </div>
        )}
      </div>
      {error && <p className="mt-2 text-sm text-danger">{error}</p>}
    </div>
  );
};

export default ImageUpload;
