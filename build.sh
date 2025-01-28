#!/bin/bash

function build() {

	mkdir -p "tmp/$1/src" dist
	rm -f "dist/$1"
	
	cp -r common/* popup/* "tmp/$1/src"
	cp "manifest.$1.json" "tmp/$1"
	cd "tmp/$1"
	mv "manifest.$1.json" manifest.json
	
	zip --quiet -r ../../dist/$1 *
	cd ../..
	rm -rf tmp

	echo "Created dist/$1.zip"
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
	build firefox
	;;
"sidebar")
	sidebar_build
	;;
*)
	build firefox
	sidebar_build
	;;
esac
