#!/bin/bash
cd /home/ec2-user/app
nohup node app.js > output.log 2>&1 &