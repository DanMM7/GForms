@echo off
cls
cd C:\Dev\GFormsV3\GForms.ND
echo removing...
cordova platform rm android
echo adding...
cordova platform add android
echo building...
cordova build android
echo done
pause