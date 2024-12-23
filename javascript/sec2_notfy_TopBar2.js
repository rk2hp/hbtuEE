let currentIndex = 0;
    const containerNames = ["Container 1", "Container 2", "Container 3"];
    const wrapper = document.getElementById("contentWrapper");
    const nameBox = document.getElementById("containerName");

    const updateSlide = () => {
        wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        nameBox.textContent = containerNames[currentIndex];
    };

    document.getElementById("leftBtn").onclick = () => {
        if (currentIndex > 0) {
            currentIndex--; // Only decrease if not on the first container
            updateSlide();
        }
    };

    document.getElementById("rightBtn").onclick = () => {
        if (currentIndex < containerNames.length - 1) {
            currentIndex++; // Only increase if not on the last container
            updateSlide();
        }
    };

    updateSlide(); // Initialize the slide state