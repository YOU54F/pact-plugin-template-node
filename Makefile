prereq:
	echo 'node_modules'>.gitignore
	npm install grpc-tools --save-dev
	npm install grpc_tools_node_protoc_ts --save-dev

gen_files:
	mkdir -p node/static_codegen
	./node_modules/.bin/grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./node/static_codegen/ --grpc_out=grpc_js:./node/static_codegen plugin.proto
	protoc \
		--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
		--ts_out=./node/static_codegen \
		-I ./ \
		plugin.proto

compile:
	npm run compile && chmod +x build/server.js && cp build/server.js build/server