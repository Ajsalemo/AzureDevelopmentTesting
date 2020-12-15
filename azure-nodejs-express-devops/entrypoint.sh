#!/bin/sh
set -e

echo "Starting SSH.."
/usr/sbin/sshd
node /app/app.js