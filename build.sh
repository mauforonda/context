#!/bin/bash

firefox_path=dist/firefox.zip
chrome_path=dist/chrome.zip

function firefox_build() {
		rm $firefox_path
		zip --quiet -r $firefox_path src/*
		zip --quiet -r $firefox_path manifest.firefox.json
		printf "@ manifest.firefox.json\n@=manifest.json\n" | zipnote -w $firefox_path
		echo 'Created dist/firefox.zip'
}

function chrome_build() {
		rm $chrome_path
		zip --quiet -r $chrome_path src/*
		zip --quiet -r $chrome_path manifest.chrome.json
		printf "@ manifest.chrome.json\n@=manifest.json\n" | zipnote -w $chrome_path
		echo 'Created dist/chrome.zip'
}

case $1 in
    "firefox")
				firefox_build
				;;
		"chrome")
				chrome_build
				;;
		*)
				firefox_build
				chrome_build
				;;
esac
				
				
