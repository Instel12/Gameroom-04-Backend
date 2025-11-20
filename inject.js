const manifest = "https://raw.githubusercontent.com/Instel12/Gameroom-04-Backend/refs/heads/beta/manifest.json";
let ghrawurl = "";
(async () => {
    try {
        const response = await fetch(manifest);
        const data = await response.json();

        ghrawurl = data["games"][gameid];
        document.open();
        document.write(data["Loader"]["preview"]);
    } catch (err) {
        console.error("Failed to fetch JSON:", err);
    }
})();
