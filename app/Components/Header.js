"use client";
import Image from "next/image";
import "./Header.css";
import { CiHeart, CiSearch } from "react-icons/ci";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoIosNotifications, IoIosSettings } from "react-icons/io";

export default function Header() {
  const [search, setSearch] = useState("");
  const [heart, setHeart] = useState(false);

  const heartHandler = () => setHeart((pre) => !pre);
  return (
    <div className="nav">
      <div className="rightNav">
        <div className="logo">MORENT</div>
        <div className="searchBar">
          <div className="searchIcon">
            <CiSearch />
          </div>
          <input
            type="text"
            placeholder="Search something here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input"
          />

          <Image
            src="/icons/filter.png"
            alt="filter"
            width={24}
            height={24}
            className="filterIcon"
          />
        </div>
      </div>
      <div className="leftNav">
        {heart ? (
          <FaHeart className="heartFilled" onClick={heartHandler} />
        ) : (
          <CiHeart className="heartOutlined" onClick={heartHandler} />
        )}
        <div className="notify">
          <div className="notifyIcon">
            <IoIosNotifications />
          </div>
          <div className="notifyDot"></div>
        </div>
        <div className="settings">
          <IoIosSettings />
        </div>
        <Image
          src="/images/7c6c5d88e94501a481b5f732536c2851.png"
          alt="profile"
          width={44}
          height={44}
          className="profileImage"
        />
      </div>
    </div>
  );
}
