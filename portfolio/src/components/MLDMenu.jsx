import { useState } from "react";
import clsx from "clsx";

import { FolderIcon, MDFileIcon, MailIcon, PhoneIcon } from "./icons.jsx";

const data = [
  {
    title: "personal-info",
    folderType: "default",
    defaultOpen: true,
    isSection: true,
    items: [
      { 
        title: "bio", 
        folderType: "rose",
        items: [
          { title: "personal", icon: "markdown" },
          { title: "work", icon: "markdown" },
        ],
      },
      { 
        title: "interests",
        folderType: "teal",
        items: [
          { title: "sports", icon: "markdown" },
          { title: "music", icon: "markdown" },
          { title: "programming", icon: "markdown" },
        ] 
      },
      {
        title: "education",
        folderType: "indigo",
        items: [
          { title: "high-school", icon: "markdown" },
          { title: "university", icon: "markdown" },
        ],
      },
    ],
  },
  {
    title: "contacts",
    folderType: "default",
    defaultOpen: true,
    isSection: true,
    items: [
      { title: "user@gmail.com", icon: "mail" },
      { title: "+3598246359", icon: "phone" },
    ],
  },
];

const getIcon = (item) => {
  if (item.folderType) {
    switch (item.folderType) {
      case "rose": return <FolderIcon className="w-4 h-4 ml-3" fill="oklch(71.2% 0.194 13.428)" />
      case "teal": return <FolderIcon className="w-4 h-4 ml-3" fill="oklch(77.7% 0.152 181.912)" />
      case "indigo": return <FolderIcon className="w-4 h-4 ml-3" fill="oklch(58.5% 0.233 277.117)" />
    }
  }

  if (item.icon) {
    switch (item.icon) {
      case "markdown": return <MDFileIcon className="w-4 h-4" />;
      case "mail": return <MailIcon className="w-4 h-4" />;
      case "phone": return <PhoneIcon className="w-4 h-4" />;
    }
  }

  return <FolderIcon className="w-4 h-4 ml-3" />;
}

const MenuItem = ({ item, depth = 0, onSelectFile }) => {
  const [isOpen, setIsOpen] = useState(item.defaultOpen || false);

  const handleClick = () => {
    if (item.icon === "markdown") {
      onSelectFile(item.title);
    } else if (item.items) {
      setIsOpen(!isOpen);
    }
  }

  return (
    <li
      className="mb-1.5"
      style={{ marginLeft: `${depth + 20 - (depth * 2)}px` }}
    >
      <div 
        className={clsx(
          "flex items-center cursor-pointer hover:text-teal-50 transition-colors duration-150",
          item.isSection && "py-3"
        )}
        onClick={handleClick}>
        {item.items && (
          <span
            className={`transition-transform duration-200 inline-block`}
            style={{
              transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
            }}
          >
            {">"}
          </span>
        )}
        {!item.isSection && getIcon(item)}
        <span className="ml-2">{item.title}</span>
      </div>
      {isOpen && item.items && (
        <ul className="list-none border-l border-stroke ml-1">
          {item.items.map((subItem, index) => (
            <MenuItem 
              key={index} 
              item={subItem} 
              depth={depth + 1} 
              onSelectFile={onSelectFile}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

const MLDMenu = ({ onSelectFile }) => {
  return (
    <ul className="list-none w-73 h-full border-r border-stroke">
      {data.map((item, index) => (
        <MenuItem key={index} item={item} onSelectFile={onSelectFile}/>
      ))}
    </ul>
  );
};

export default MLDMenu;