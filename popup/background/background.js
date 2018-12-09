function colorUpdate(updateInfo) {
    const size = 32;
    if (updateInfo.theme.colors) {
        const colors = updateInfo.theme.colors;
        const color = (colors.icons == null) ? colors.toolbar_text : colors.icons;
        icon = browser.runtime.getURL("src/icons/icon.svg");
        fetch(icon)
            .then(resp => resp.text())
            .then((svg) => {
                svg = svg.replace(/#b5d1ea/g, color);
                const svgdataurl = "data:image/svg+xml;base64," + btoa(svg);
                const canvas = document.createElement("canvas");
                canvas.width = size;
                canvas.height = size;
                const img = new Image(size, size);
                img.onload = function () {
                    const ctx = canvas.getContext("2d");
                    ctx.drawImage(img, 0, 0);
                    const imageData = ctx.getImageData(0, 0, size, size);
                    const data = { imageData: {} };
                    data.imageData[size] = imageData
                    browser.browserAction.setIcon(data);
                }
                img.src = svgdataurl;
            }
        )
    }
    else {
        browser.browserAction.setIcon({ imageData: null });
    }
}

browser.theme.onUpdated.addListener(colorUpdate);

browser.theme.getCurrent().then((themeInfo) => {
    colorUpdate({ theme: themeInfo, windowId: null });
});