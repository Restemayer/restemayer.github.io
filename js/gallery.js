function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo img");
  let currentClass = "current";
  let galleryInfo = document.querySelector("#gallery-info");
  let title = galleryInfo.querySelector(".title");
  let description = galleryInfo.querySelector(".description");

  thumbnails.forEach(function(thumbnail) {
    largeVersion = new Image();
    largeVersion.src = thumbnail.dataset.largeVersion;    

    thumbnail.addEventListener("click", function () {
      let newImageSrc = thumbnail.dataset.largeVersion;
      mainImage.setAttribute("src", newImageSrc);

      document.querySelector(".current").classList.remove(currentClass);

      thumbnail.parentNode.classList.add(currentClass);
      title.innerHTML = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
}
