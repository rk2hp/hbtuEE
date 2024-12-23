// <!-- ////////////// top bar 1 script ////////////////// -->

    function showNewContainer(index) {
        const wrapper = document.getElementById('contentWrapper');
        wrapper.style.transform = `translateX(-${index * 100}%)`;
    }

