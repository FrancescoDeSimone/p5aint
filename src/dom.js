p5.disableFriendlyErrors = true;

function hideToolbar(val = "100px") {
    const toolbar = document.getElementById("toolbar");
    toolbar.disabled = true
    const allChildren = document.querySelectorAll("#toolbar *");
    if (toolbar.style.width == "0px" || toolbar.style.width == 0) {
        toolbar.style.animationName = "openToolBar";
        toolbar.style.animationPlayState = "running";
        toolbar.style.width = val;
        for (let child of allChildren) child.style.display = "block";
    } else {
        toolbar.style.width = 0;
        toolbar.style.animationName = "closeToolBar";
        toolbar.style.animationPlayState = "running";
        for (let child of allChildren)
            if (!child.attributes.class.nodeValue.includes("hide"))
                child.style.display = "none";
    }
}

function hideTopbar(val = "75px") {
    const toolbar = document.getElementById("topbar");
    const allChildren = document.querySelectorAll("#topbar *");
    if (toolbar.style.height == "0px" || toolbar.style.height == 0) {
        toolbar.style.animationName = "openTopBar";
        toolbar.style.animationPlayState = "running";
        toolbar.style.height = val;
        for (let child of allChildren) child.style.display = "block";
    } else {
        toolbar.style.height = 0;
        toolbar.style.animationName = "closeTopBar";
        toolbar.style.animationPlayState = "running";
        for (let child of allChildren)
            if (!child.attributes.class.nodeValue.includes("hide"))
                child.style.display = "none";
    }
}