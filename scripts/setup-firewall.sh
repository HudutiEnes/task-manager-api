#!/usr/bin/env bash
# DevOps Project Firewall setup

# Creating the zone
firewall-cmd --permanent --new-zone=devops-projects

# Adding nginx/api ports
firewall-cmd --permanent --zone=devops-projects --add-port=8080/tcp
firewall-cmd --permanent --zone=devops-projects --add-port=3000/tcp

# Reload firewall so it applies the change
firewall-cmd --reload

echo "Network security applied to devops-projects zone."
