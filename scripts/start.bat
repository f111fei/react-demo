@echo off
setlocal

title React Dev

pushd %~dp0\..

:: Configuration
set NODE_ENV=development
set APP_DEV=1
set ELECTRON_DEFAULT_ERROR_MODE=1
set ELECTRON_ENABLE_LOGGING=1
set ELECTRON_ENABLE_STACK_DUMPING=1

:: Launch
electron --debug=5860 . %*
popd

endlocal