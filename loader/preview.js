    async function loadContent() {
      try {
        const response = await fetch('https://raw.githubusercontent.com/Instel12/Gameroom-04-Backend/refs/heads/main/Escape%20Road');
        const text = await response.text();
        document.open();
        document.write(text);
        document.close();
      } catch (error) {
        alert('Failed to load content! Please report this error. (.gg/ztKTrYvSbb)');
      }
    }