import os
import json

games_folder = os.path.join(os.path.dirname(__file__), "games")

base_url = "https://raw.githubusercontent.com/Instel12/Gameroom-04-Backend/refs/heads/beta/games/"

game_files = sorted(os.listdir(games_folder))

data = {
    "Loader": {
        "preview": "url",
        "fullscreen": "url"
    },
    "Games": {}
}

for idx, file_name in enumerate(game_files, start=1):
    data["Games"][str(idx)] = base_url + file_name

output_file = os.path.join(os.path.dirname(__file__), "manifest.json")
with open(output_file, "w") as f:
    json.dump(data, f, indent=4)

print(f"Generated {output_file} with {len(game_files)} games.")
