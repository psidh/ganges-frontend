#!/bin/bash

INSTALL_DIR="/usr/local/bin"
BIN_URL="https://ganges.psidharth.dev/bin/gangesMac"
FILE_NAME="gangesMac"

# Check if the file already exists, delete it if it does
if [ -f "$INSTALL_DIR/$FILE_NAME" ]; then
    echo "Deleting existing $FILE_NAME..."
    sudo rm -f "$INSTALL_DIR/$FILE_NAME"
fi

# Download the binary to the directory
echo "Downloading $FILE_NAME..."
curl -L $BIN_URL -o "$INSTALL_DIR/$FILE_NAME"

# Make the file executable
echo "Setting execute permissions for $FILE_NAME..."
sudo chmod +x "$INSTALL_DIR/$FILE_NAME"

# Completion message
echo "Installation Successful"