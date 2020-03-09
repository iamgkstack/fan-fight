# fanFight

A simple checkout system written in node.js for problem-1

## Requirements

* NODE: `>= 10`
* YARN: `1.17.3`

## Setup

```bash
# clone the project
git clone https://github.com/iamgkstack/fan-fight.git && cd problem-1

# install the dependencies
yarn

# start the project
yarn start

# test in windows os
yarn test_windows_os

# test in linux os
yarn test_linux_os

```
* This starts the server on the port 5200

## APIs availabe

Get the final result

```curl
curl -X POST http://localhost:5200/api/v1/join-contest \
  -H 'Accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
    "entryFee": 400,
    "discount": 20
}'
```

checkout for problem-2

```
# got to the problem-2 folder
cd problem-2

# run the program
node ContigiousArraySum.js
```