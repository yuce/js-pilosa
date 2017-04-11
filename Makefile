
.PHONY: all build clean generate-proto test

all: build

build:
	tsc

clean:
	rm -r lib/*

generate-proto:
	npm run generate-proto

test:
	npm run test

test-all:
	npm run test-all

cover:
	npm run cover
