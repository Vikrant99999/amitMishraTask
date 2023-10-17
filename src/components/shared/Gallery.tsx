import React, { useState, useEffect, useCallback } from "react";
import { TextField} from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import axios from "axios";
import styles from "../styles/galley.module.css";

const GalleryComponent: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [viewerIsOpen, setViewerIsOpen] = useState<boolean>(false);
  const [images, setImages] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filter, setFilter] = useState<string>("Random");
  const [visibleImages, setVisibleImages] = useState<number>(30);

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = response.data.slice(0, visibleImages);
      const updatedData = data.map((item: { url: string }) => {
        return { ...item, src: item.url, height: 900, width: 900 };
      });
      setImages(updatedData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [visibleImages]);

  const openLightbox = useCallback((_event: any, { index }: any) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const handleLoadMore = () => {
    setVisibleImages((prev) => prev + 10); // Increase the number of visible images
  };

  const handleSearch = () => {
    const filteredImages = images.filter((image) =>
      image.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setImages(filteredImages);
  };

  const handleFilterChange = (selectedFilter: string) => {
    // Implement filter logic here based on the selected filter
    // For example, you can set a filter state and fetch images accordingly
    setFilter(selectedFilter);

    // Replace the following logic with your actual filter logic
    if (selectedFilter === "Random") {
      // Fetch random images
    } else if (selectedFilter === "My Images") {
      // Fetch user-specific images
    }
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.filterAndSeacrhWrapper}>
        {/* <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className={styles.searchButton} onClick={handleSearch}>
          Search
        </button> */}
        <TextField.Root className={styles.searchBox}>
          <TextField.Input  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search by title" />
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" onClick={handleSearch} />
          </TextField.Slot>
        </TextField.Root>
        <div className={styles.filterButtons}>
          <span
            className={`${styles.filterButton} ${
              filter === "Random" ? styles.active : ""
            }`}
            onClick={() => handleFilterChange("Random")}
          >
            RANDOM
          </span>
          <span className={styles.seperator}> | </span>
          <span
            className={`${styles.filterButton} ${
              filter === "My Images" ? styles.active : ""
            }`}
            onClick={() => handleFilterChange("My Images")}
          >
            MY GENS
          </span>
        </div>
      </div>
      <div>
        <Gallery photos={images} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={images.map((x) => ({
                  ...x,
                  srcset: x.src,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
        <button className={styles.loadMoreButton} onClick={handleLoadMore}>
        Load More
      </button>
      </div>
    </div>
  );
};

export default GalleryComponent;
