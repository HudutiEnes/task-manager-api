#!/usr/bin/env python3
import json

settings = {"port": 3000, "log_file": "logs/access.log", "environment": "development"}

with open("../config.json", "w") as f:
    json.dump(settings, f, indent=4)

with open("../config.json", "r") as f:
    cfg = json.load(f)
    print(f"The current log file is located at: {cfg['log_file']}")

with open("../config.json", "r") as f:
    data = json.load(f)

    data["environment"] = "production"

with open("../config.json", "w") as f:
    json.dump(data, f, indent=4)
    print("Environment updated to production sccessfully.")
