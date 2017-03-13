INTERNAL_SOURCES = src/internal.js src/internal.d.ts
INTERNAL_OUT = $(patsubst src/%,lib/%,$(INTERNAL_SOURCES))

.PHONY: all build clean test

all: build

$(INTERNAL_SOURCES): internal/internal.proto
	npm run generate-proto

$(INTERNAL_OUT): $(INTERNAL_SOURCES)		

build: $(INTERNAL_OUT)
	tsc

clean:
	rm -r lib/*

test:
	npm run test-all