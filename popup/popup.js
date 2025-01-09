document.getElementById("toggle").addEventListener("click", () => {
    chrome.storage.local.get(["corsEnabled"], (result) => {
        const newState = !result.corsEnabled;
        chrome.storage.local.set({ corsEnabled: newState }, () => {
            alert(`CORS is now ${newState ? "enbaled" : "disabled"}`);
        });
    });
});