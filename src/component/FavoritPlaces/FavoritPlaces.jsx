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
import { useTranslation } from "react-i18next";

const FavoritePlaces = ({
  items,
  activeId,
  onPlaceClicked,
  openModal,
  isPlacesLoading,
  onUpdated,
}) => {
  const [idOfDeletedItem, setIdOfDeletedItem] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const { t } = useTranslation();

  const {
    isOpen: isConfirmationModalOpen,
    openModal: openConfirmationModal,
    closeModal: closeConfirmationModal,
  } = useModal();

  const { mutation: updatePlace, isLoading: isUpdating } = useMutation({
    mutationFn: (formData) => updateFavoritePlace(formData),
    onSuccess: () => {
      closeEditModal();
      onUpdated();
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
      onUpdated();
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
      <div className="text-gray mb-4">{t("added markers")}</div>

      {items?.length === 0 && !isPlacesLoading && <div>{t("empty list")}</div>}
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
        title={t('confirm mess')}
      />

      <IButton className="w-full mt-10" variant="gradient" onClick={openModal}>
        {t('add marker')}
      </IButton>
    </div>
  );
};

export default FavoritePlaces;
