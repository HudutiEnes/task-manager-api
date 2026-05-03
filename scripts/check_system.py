#!/usr/bin/env python3
import requests
import json
import sys

try:
    with open("../config.json", "r") as f:
        config = json.load(f)

    url = f"http://localhost:{config['port']}/api/v1/tasks"

    print(f"Checking API health at: {url}...")
    response = requests.get(url, timeout=5)

    if response.status_code == 200:
        print("SUCCESS: API is reachable and healthy.")
    else:
        print(f"WARNING: API returned status code {response.status_code}")
except FileNotFoundError:
    print("CRITICAL: config.json not found.")
except requests.exceptions.ConnectionError:
    print("CRITICAL: Could not connect to server. Is Node.js running?")
except Exception as e:
    print(f"ANOMALY: An unexpected error occurred: {e}")
finally:
    print("--- System Check Finished ---")
