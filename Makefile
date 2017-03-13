PROTO_SOURCES = src/internal.js src/internal.d.ts
PROTO_OUT = $(patsubst src/%,lib/%,$(PROTO_SOURCES))

.PHONY: all build clean test

all: build

$(PROTO_SOURCES): internal/internal.proto
	npm run generate-proto

$(PROTO_OUT): $(PROTO_SOURCES)
	cp src/internal.* lib

build: $(PROTO_OUT)
	tsc

clean:
	rm -r lib/*

test:
	npm run test-all