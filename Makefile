INTERNAL_SOURCES = src/internal.js src/internal.d.ts
INTERNAL_OUT = $(patsubst src/%,lib/%,$(INTERNAL_SOURCES))

.PHONY: all build clean generate-proto test

all: build

build:
	tsc

clean:
	rm -r lib/*

generate-proto:
	npm run generate-proto

test:
	npm run test-all