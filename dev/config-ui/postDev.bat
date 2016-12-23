@echo off
REM This script generate the osl ui bundle.js and bundle.min.js
REM 
REM And copy the two file to js/
REM Pre-requisite : prepare node js env
set pa=%~dp0
echo %pa%
call npm run build_prod >nul 2>nul
copy %pa%\app\bundle.js %pa%\js >nul 2>nul
call npm run minify >nul 2>nul
copy %pa%\app\bundle.min.js %pa%\js >nul 2>nul
del %pa%\app\bundle.min.js >nul 2>nul
del %pa%\app\bundle.js >nul 2>nul
echo bundle.js and bundle.min.js are generated in ./js folder.
echo Please upload the two file to Mecurial.
REM exit
