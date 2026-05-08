#!/usr/bin/env bash
# DevOps Project Firewall setup

# Creating the zone
sudo firewall-cmd --permanent --new-zone=devops-projects 2>/dev/null

# Adding nginx/api ports
sudo firewall-cmd --permanent --zone=devops-projects --add-port=8080/tcp
sude firewall-cmd --permanent --zone=devops-projects --add-service=https

# Reload firewall so it applies the change
sudo firewall-cmd --reload

sudo firewall-cmd --permanent --zone=devops-projects --change-interface=wlp0s20f3
sudo firewall-cmd --reload

echo "Network security applied to devops-projects zone."
