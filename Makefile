
#IDIR = src
#ODIR = lib
#DEPS = $(patsubst %,$(IDIR)/)

build:
	tsc
	cp src/internal.* lib