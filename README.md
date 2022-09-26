# openlimite-api

This API shows the Proof of Concept of OpenLimite algorithm

Note
We do not guarantee any risk related to the OpenLimite algorithm
This algorithm it's just a POC of our thesis

PART I: Download & Run on local environment
Method 1: From github
1) Clone the repository, install node packages and verify routes locally
//on local
git clone https://github.com/zowe/sample-node-api
cd sample-node-api
npm install
npm start
Open your local browser and verify the sample-node-api is working by accessing:
http://localhost:18000/accounts/
http://localhost:18000/accounts/1
http://localhost:18000/accounts/1/cars/

2) Transfer project files from local to remote host
Note
The node_modules folder will not be transferred, we can do npm install later on remote server itself to pull down required node packages

cd sample-node-api
npm run build
scp -r dist ibmuser@my.mainframe.com:</usr/lpp/extender>/sample-node-api
For the next step, ensure that you have node installed on z/OS and your PATH includes nodejs/bin directory.

ssh ibmuser@my.mainframe.com
. ~/.profile - (Skip if you can already run "npm" on z/OS)
cd </usr/lpp/extender>/sample-node-api
npm install
