function hideToolbar(val = "100px") {
  const toolbar = document.getElementById('toolbar')
  const allChildren = document.querySelectorAll("#toolbar *");
  if (toolbar.style.width == "0px" || toolbar.style.width == 0)
  {
    toolbar.style.width = val;
    for(child of allChildren)
      child.style.display = "block"
  }
  else{
    toolbar.style.width = 0;
    for(child of allChildren)
      if(!child.attributes.class.nodeValue.includes("hide"))
        child.style.display = "none"
  }
}

function hideTopbar(val = "75px") {
  const topbar = document.getElementById('topbar')
  topbar.style.height = (topbar.style.height == "0px" || topbar.style.height == 0)? val:0
}