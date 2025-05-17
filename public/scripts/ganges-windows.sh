@echo off
set INSTALL_DIR=%ProgramFiles%\ganges
set BIN_URL=https://ganges.psidharth.dev/bin/windows/ganges.exe

REM Check if the "ganges" folder exists
if not exist "%INSTALL_DIR%" (
    echo Creating directory "%INSTALL_DIR%"...
    mkdir "%INSTALL_DIR%"
) else (
    echo "%INSTALL_DIR%" already exists. Skipping directory creation.
)

REM Navigate to the directory
cd /d "%INSTALL_DIR%"

REM Check if ganges.exe exists, delete if it does
if exist "ganges.exe" (
    echo Deleting existing ganges.exe...
    del /f ganges.exe
)

REM Download the latest ganges.exe using curl (or wget)
echo Downloading ganges.exe...
curl -L %BIN_URL% -o ganges.exe

REM Check if the path is in the system environment variable, if not, add it
setlocal enabledelayedexpansion
set PATH_EXISTS=0
for %%A in ("%PATH%") do (
    if "%%~A"=="%INSTALL_DIR%" set PATH_EXISTS=1
)

if %PATH_EXISTS%==0 (
    echo Adding "%INSTALL_DIR%" to system PATH...
    setx PATH "%PATH%;%INSTALL_DIR%"
)

REM Completion message
echo Installation Successful
pause
