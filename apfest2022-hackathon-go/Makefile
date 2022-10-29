build:
	env GOARCH=amd64 GOOS=linux go build -ldflags="-s -w" -o bin/databases databases/main.go

.PHONY: clean
clean:
	rm -rf ./bin

.PHONY: deploy
deploy: clean build
	sls deploy --verbose
