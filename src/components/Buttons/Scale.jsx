import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Store } from "../../utils/localStorage";
import Icon from "../Icon";
import { useModal } from "react-context-modals";
import ScaleDescriptionModal from "../Modals/ScaleDescriptionModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

export default function ScaleButton({
  id,
  name,
  className = "",
  description,
  alternateColor,
}) {
  const { showModal, hideModal } = useModal();
  const showBasicModal = () =>
    showModal(ScaleDescriptionModal, {
      title: name,
      description,
      hideModal,
      alternateColor,
    });

  const navigate = useNavigate();
  return (
    <div
      className={
        "flex items-center justify-between gap-4" +
        " px-5 " +
        "max-w-xs sm:max-w-md md:max-w-none w-full md:w-fit rounded " +
        "text-base sm:text-2xl md:text-2xl " +
        "text-gray-900 dark:text-gray-50 font-medium " +
        "backdrop-blur-sm backdrop-brightness-50 backdrop-opacity-10 dark:backdrop-brightness-200 dark:backdrop-opacity-60 " +
        `border-4 ${className}`
      }
    >
      <div className="my-2 flex gap-1">
        <InfoCircleButton onClick={showBasicModal} />
        <button
          title={`Ir a escala: ${name}`}
          className="grow md:grow-0 w-max h-full text-left font-light"
          onClick={() => {
            navigate(`/app/scales/${id + 1}`);
          }}
        >
          {name}
        </button>
      </div>
      <FavoriteButton id={id} />
    </div>
  );
}

function InfoCircleButton({ onClick }) {
  return (
    <button onClick={onClick}>
      <FontAwesomeIcon
        icon={faCircleQuestion}
        size="xs"
        mask="fa-regular fa-circle"
      />
    </button>
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
        size="30"
        fill={isActive ? "#ffc100" : "none"}
        stroke={isActive ? "#ffc100" : "currentColor"}
      />
    </button>
  );
}
