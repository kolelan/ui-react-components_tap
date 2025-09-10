create-struct: get-struct-creator run-struct-creator

create-project:
	npx create-react-app tap-test-project

run-struct-creator:
	python create_structure.py

run-struct-creator:
	python create_structure.py

get-struct-creator:
	curl -L -o create_structure.py https://raw.githubusercontent.com/kolelan/create_structure/main/create_structure.py