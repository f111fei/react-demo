#!/usr/bin/env bash

if [[ "$OSTYPE" == "darwin"* ]]; then
	realpath() { [[ $1 = /* ]] && echo "$1" || echo "$PWD/${1#./}"; }
	ROOT=$(dirname $(dirname $(realpath "$0")))
else
	ROOT=$(dirname $(dirname $(readlink -f $0)))
fi

function start() {
	cd $ROOT

	# Configuration
	export NODE_ENV=development
	export APP_DEV=1
	export ELECTRON_ENABLE_LOGGING=1
	export ELECTRON_ENABLE_STACK_DUMPING=1

	# Launch Code
	if [[ "$OSTYPE" == "darwin"* ]]; then
		exec electron . "$@"
	else
		exec electron . "$@"
	fi
}

start "$@"
