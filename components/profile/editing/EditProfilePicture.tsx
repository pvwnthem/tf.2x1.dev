import { images } from '@constants/images';
import React, { useState } from 'react';
import Draggable from 'react-draggable';
import ProfilePicture from '../ProfilePicture';

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
      <div className="w-full">
        <div onClick={togglePopup} className='w-full flex items-center cursor-pointer justify-center'>
            <ProfilePicture src={selectedImage} />
        </div>
       
        <Draggable>
            <div className='cursor-move'>
            {showPopup && (
                <div className="absolute top-0 right-0 bg-background border  rounded p-2 mt-2">
                    <select
                        value={selectedImage}
                        onChange={handleChange}
                        className="border  rounded px-3 py-1 mb-2"
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
                                        image === selectedImage ? 'border' : ''
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
