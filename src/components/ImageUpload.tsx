import ImageUploading, { ImageListType } from "react-images-uploading";
import Button from "./ui/Button";

interface IProps {
  onChange: (imageList: ImageListType) => void;
  images: ImageListType;
  multiple: boolean;
}

const ImageUpload = ({ onChange, images, multiple }: IProps) => {
  return (
    <div className="App">
      <ImageUploading multiple={multiple} value={images} onChange={onChange}>
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="w-full max-w-4xl">
            <div className="flex flex-col lg:flex-row gap-x-6 gap-y-4 my-4 ">
              <Button
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
                className="w-full lg:max-w-sm bg-blue text-white font-medium py-4 px-4 rounded flex items-center justify-center gap-4"
              >
                <img
                  src="/file-upload.svg"
                  alt="upload images"
                  className="w-16 h-16"
                />
                اضغط هنا لاضافة صورة او اسحب وافلت الصور هنا
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <div className="w-full h-64 border-2 border-dashed rounded-lg flex items-center border-blue-500 bg-blue-50 justify-center text-center cursor-pointer">
                    <img
                      src={image.dataURL}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="image-item__btn-wrapper flex justify-center gap-4 my-2">
                    <Button
                      onClick={() => onImageUpdate(index)}
                      className="w-full max-w-sm bg-blue text-white font-medium py-2 px-4 rounded"
                    >
                      تعديل
                    </Button>
                    <Button
                      onClick={() => onImageRemove(index)}
                      className="w-full max-w-sm bg-danger text-white font-medium py-2 px-4 rounded"
                    >
                      حذف
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default ImageUpload;
