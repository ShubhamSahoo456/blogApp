import React, { useState } from "react";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";

const Status = ({ home, userProfile, fetchUserPosts }) => {
  const [imageFile, setimagefile] = useState({});
  const { userInfo } = useSelector((state) => state.userLogin);
  const id = useParams().id;

  const uploadPost = (files) => {
    setimagefile(files);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("upload", imageFile);
      formData.append("fileName", imageFile.name);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
          userid: userInfo._id,
        },
      };

      const { data } = await axios.post(
        "http://localhost:8000/api/v1/createPost",
        formData,
        config
      );
      if (data) {
        alert("post has been uploaded");
        fetchUserPosts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="status_bar">
        <div className="status_wrapper">
          <div className="status_top">
            {/* <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              className="status_img"
            /> */}
            <textarea
              rows={10}
              cols={10}
              placeholder={
                !userProfile
                  ? `What's on your mind ${userInfo?.fullName} ?`
                  : `Tell Something about ${userProfile.fullName}...`
              }
              name="blog"
              className="status_input"
            />
          </div>
          <hr className="hr_line" />
          <div className="status_bottom">
            <button className="share_btn" onClick={handleSubmit}>
              Share
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Status;
