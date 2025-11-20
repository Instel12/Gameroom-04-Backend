    async function loadContent() {
      try {
        const response = await fetch(ghrawurl);
        const text = await response.text();
        document.open();
        document.write(text);
        document.close();
      } catch (error) {
        alert('Failed to load content! Please report this error. (.gg/ztKTrYvSbb)');
      }
    }