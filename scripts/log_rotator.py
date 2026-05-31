#!/usr/bin/env python3
import os
import time

# Define path to logs folder
logs_dir = "../logs/"

# Define max age of 7 days before deleting log file
max_age = 604800

current_time = int(time.time())

for log in os.listdir(logs_dir):

    # Creating full path
    full_path = os.path.join(logs_dir, log)

    # Checking if it is .log and if it is file
    if log.endswith(".log") and os.path.isfile(full_path):

        # Getting when the file was modified or mtime
        file_time = int(os.path.getmtime(full_path))
        # Calculating current age of file
        age_in_seconds = current_time - file_time

        # Verifying if .log file is not older then allowed
        if age_in_seconds > max_age:
            # If older remove it
            os.remove(full_path)
            print(f"Cleaned up: {log}")
        else:
            # If not old enough keep it
            print(f"Keeping: {log} (still fresh)")
    # If it's not valid print error
    else:
        print(f"ERROR: {log} is either not .log or not file")
