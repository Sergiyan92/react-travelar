import { useMemo, useState } from "react";
import { useModal } from "../../custom-hook/useModal";
import EditPlaceModal from "../EditPlaceModal/EditPlaceModal";
import FavoritePlace from "../FavoritPlace/FavoritPlace";
import IButton from "../IButton/IButton";
import { useMutation } from "../../custom-hook/useMutation";
import {
  deleteFavoritePlace,
  updateFavoritePlace,
} from "../../api/favorit-place";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

const FavoritePlaces = ({
  items,
  activeId,
  onPlaceClicked,
  openModal,
  isPlacesLoading,
  onUpdated, // новий пропс для оновлення списку
}) => {
  const [idOfDeletedItem, setIdOfDeletedItem] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const {
    isOpen: isConfirmationModalOpen,
    openModal: openConfirmationModal,
    closeModal: closeConfirmationModal,
  } = useModal();

  const { mutation: updatePlace, isLoading: isUpdating } = useMutation({
    mutationFn: (formData) => updateFavoritePlace(formData),
    onSuccess: () => {
      closeEditModal();
      onUpdated(); // Оновити список після редагування
    },
  });

  const {
    mutation: deletePlace,
    isLoading: isDeleting,
    error: deleteError,
  } = useMutation({
    mutationFn: (id) => deleteFavoritePlace(id),
    onSuccess: () => {
      closeConfirmationModal();
      setIdOfDeletedItem(null);
      onUpdated(); // Оновити список після видалення
    },
  });

  const {
    isOpen: isEditOpen,
    openModal: openEditModal,
    closeModal: closeEditModal,
  } = useModal();

  const selectedItem = useMemo(() => {
    return items.find((place) => place.id === selectedId);
  }, [items, selectedId]);

  const handleEditPlace = (id) => {
    setSelectedId(id);
    openEditModal();
  };

  const handleSubmit = (formData) => {
    updatePlace(formData);
  };

  const handleOpenConfirmationModal = (id) => {
    setIdOfDeletedItem(id);
    openConfirmationModal();
  };

  const handleDeletePlace = () => {
    deletePlace(idOfDeletedItem);
  };

  return (
    <div className="px-6 text-black">
      <div className="text-gray mb-4">Додані маркери</div>

      {items?.length === 0 && !isPlacesLoading && <div>Список порожній</div>}
      <ul>
        {items?.map((item) => (
          <li key={item.id}>
            <FavoritePlace
              title={item.title}
              description={item.description}
              img={item.img}
              isActive={item.id === activeId}
              onClick={() => onPlaceClicked(item.id)}
              edit={() => handleEditPlace(item.id)}
              delet={() => handleOpenConfirmationModal(item.id)}
            />
          </li>
        ))}
      </ul>

      <EditPlaceModal
        isOpen={isEditOpen}
        closeEditModal={closeEditModal}
        place={selectedItem}
        isLoading={isUpdating}
        onClose={closeEditModal}
        onSubmit={handleSubmit}
      />

      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        isLoading={isDeleting}
        hasError={deleteError}
        cancel={closeConfirmationModal}
        confirm={handleDeletePlace}
        title="Ви дійсно хочете видалити улюблене місце?"
      />

      <IButton className="w-full mt-10" variant="gradient" onClick={openModal}>
        Додати маркер
      </IButton>
    </div>
  );
};

export default FavoritePlaces;
