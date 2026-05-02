#!/usr/bin/env python3
import json
import os

initial_tasks = [
    {"id": 1, "title": "Setup Nginx", "status": "pending"},
    {"id": 2, "title": "Configure Firewall", "status": "pending"},
]

if os.path.exists("../tasks.json"):
    print("Database already exists. Skipping seeding.")
else:
    with open("../tasks.json", "w") as f:
        json.dump(initial_tasks, f, indent=4)
        print("Database seeded successfully!")
