#!/bin/bash

function firefox_build() {
	tmp=tmp/firefox
	zip=dist/firefox.zip
	rm $zip
	mkdir -p $tmp/src
	cp -r common/* $tmp/src
	cp -r popup/* $tmp/src
	cp manifest.firefox.json $tmp
	cd $tmp
	mv manifest.firefox.json manifest.json
	zip --quiet -r ../../$zip *
	cd ../..
	rm -rf $tmp
	echo 'Created dist/firefox.zip'
}

function chrome_build() {
	tmp=tmp/chrome
	zip=dist/chrome.zip
	rm $zip
	mkdir -p $tmp/src
	cp -r common/* $tmp/src
	cp -r popup/* $tmp/src
	cp manifest.chrome.json $tmp
	cd $tmp
	mv manifest.chrome.json manifest.json
	#zip --quiet -r ../../$zip *
	cd ../..
	#rm -rf $tmp
	echo 'Created dist/chrome.zip'
}

function sidebar_build() {
	tmp=tmp/sidebar
	zip=dist/sidebar.zip
	rm $zip
	mkdir -p $tmp/src
	cp -r common/* $tmp/src
	cp -r sidebar/* $tmp/src
	cp manifest.sidebar.json $tmp
	cd $tmp
	mv manifest.sidebar.json manifest.json
	zip --quiet -r ../../$zip *
	cd ../..
	rm -rf $tmp
	echo 'Created dist/sidebar.zip'
}

case $1 in
    "firefox")
				firefox_build
				;;
		"chrome")
				chrome_build
				;;
		"sidebar")
				sidebar_build
				;;
		*)
				firefox_build
				chrome_build
				sidebar_build
				;;
esac
				
				
