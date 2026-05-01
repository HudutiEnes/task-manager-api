#!/usr/bin/env python3
import subprocess

# Checking if project has all necessary tools to work

tools = ["docker", "git", "node", "npm"]


print("--- ENVIRONMENT SANITY CHECK ---")

# Checking every tool one by one with loop

for tool in tools:

    # Storing the integer result
    result = subprocess.run(["which", tool], capture_output=True)

    # Checking if tool is installed
    if result.returncode == 0:
        print(f"{tool.upper()}: Installed.")
    else:
        print(f"{tool.upper()}: Not installed. Please install {tool.upper()}")

print("--------------------------------")
