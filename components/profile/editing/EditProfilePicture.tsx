import { images } from '@constants/images';
import React, { useState } from 'react';
import Draggable from 'react-draggable';

const EditProfilePicture = ({ src, handleProfilePictureChange }: { src: string, handleProfilePictureChange: any }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(src);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newImage = event.target.value;
    handleProfilePictureChange(newImage)
    setSelectedImage(newImage);
  };

  return (
      <div className="rounded-full w-1/4 flex items-center justify-center p-2">
        <div onClick={togglePopup} >
          <img alt="Profile Picture" src={selectedImage} className="w-full cursor-pointer" />
        </div>
        <Draggable>
            <div className='cursor-move'>
            {showPopup && (
                <div className="absolute top-0 right-0 bg-white border border-gray-300 rounded p-2 mt-2">
                    <select
                        value={selectedImage}
                        onChange={handleChange}
                        className="border border-gray-300 rounded px-3 py-1 mb-2"
                    >
                        {images.map((image, index) => (
                            <option key={index} value={image}>
                                {image}
                            </option>
                        ))}
                    </select>
                    <div className="flex flex-wrap">
                        {images.map((image, index) => (
                            <div key={index} className="p-1">
                                <img
                                    alt="Image Preview"
                                    src={image}
                                    className={`w-12 h-12 cursor-pointer ${
                                        image === selectedImage ? 'border-2 border-blue-500' : ''
                                    }`}
                                    onClick={() => {setSelectedImage(image); handleProfilePictureChange({ target: { value: image }})}}
                                />
                            </div>
                        ))}
                    </div>
                </div>
      )}
      </div>
        </Draggable>
      
    </div>
  );
};

export default EditProfilePicture;