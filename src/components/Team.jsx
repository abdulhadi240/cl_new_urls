import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Team = ({image , name , designation , number ,email}) => {
  return (
    <div className="team-container">
      {/* Single Flip Card */}
      <div className="flip-card">
        <div className="flip-card-inner">
          {/* Front Side */}
          <div className="flip-card-front">
            <Image
              src={image}
              alt="Profile Image"
              layout="fill"
              className="object-cover image-style"
            />
          </div>

          {/* Back Side */}
          <div className="flex flex-col gap-10 flip-card-back">
            <div>
            <h2 className="text-lg font-semibold ">{name}</h2>
            <p className="text-xs text-gray-500 ">{designation}</p>
            </div>
            <div className="social-icons">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <FaInstagram />
            </div>
            <div>
            <p className="text-sm text-gray-600">{number}</p>
            <p className="text-sm text-gray-600">{email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
