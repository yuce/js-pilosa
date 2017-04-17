
.PHONY: all build clean cover generate-proto test test-all

all: build

build:
	npm install
	tsc

clean:
	rm -r lib/*

cover:
	npm run cover

generate-proto:
	npm run generate-proto

test:
	npm run test

test-all:
	npm run test-all
