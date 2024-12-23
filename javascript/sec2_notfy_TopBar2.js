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
            currentIndex--; 
            updateSlide();
        }
    };

    document.getElementById("rightBtn").onclick = () => {
        if (currentIndex < containerNames.length - 1) {
            currentIndex++; 
            updateSlide();
        }
    };

    updateSlide(); 