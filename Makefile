MAKEFLAGS = --no-print-directory --always-make --silent
MAKE = make $(MAKEFLAGS)

NODE_BIN = node_modules/.bin

.PHONY: build lint dev

build:
	@echo "Building project..."
	$(NODE_BIN)/webpack

lint:
	@echo "Running eslint..."
	$(NODE_BIN)/eslint --ext .js --ext .jsx src

dev:
	@echo "Starting webpack frontend..."
	$(NODE_BIN)/webpack-dev-server \
		--progress --colors \
		--hot --inline \
		--content-base build
