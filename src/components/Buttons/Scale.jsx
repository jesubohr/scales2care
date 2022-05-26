import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Store } from "../../utils/localStorage";
import Icon from "../Icon";

export default function ScaleButton({ id, name, className = "" }) {
  const navigate = useNavigate();
  return (
    <div
      className={
        "flex items-center gap-5 " +
        "px-8 " +
        "w-80 h-40 " +
        "text-base sm:text-2xl md:text-2xl " +
        "text-gray-50 dark:text-gray-900 font-medium " +
        `${className}`
      }
    >
      <button
        title={`Ir a escala: ${name}`}
        className="h-full grow text-left"
        onClick={() => {
          navigate(`/app/scales/${id + 1}`);
        }}
      >
        {name}
      </button>
      <FavoriteButton id={id} />
    </div>
  );
}

function FavoriteButton({ id = 0 }) {
  const [isActive, setIsActive] = useState(() => {
    const oldScales = Store.get("user-favorite-scales") || [];
    return oldScales.includes(id);
  });

  function toggleFavoriteScale(index) {
    let newScales = Store.get("user-favorite-scales");
    if (isActive) newScales = newScales.filter((scale) => scale !== index);
    else newScales.push(index);

    Store.set("user-favorite-scales", newScales);
    setIsActive(!isActive);
  }

  useEffect(() => {
    if (Store.get("user-favorite-scales") === null) {
      Store.set("user-favorite-scales", []);
    }
  });

  return (
    <button onClick={() => toggleFavoriteScale(id)}>
      <Icon
        icon="star"
        viewBox="24"
        size="40"
        fill={isActive ? "#ffc100" : "none"}
        stroke={isActive ? "#ffc100" : "currentColor"}
      />
    </button>
  );
}
