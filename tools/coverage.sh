CURR_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

. ~/.nvm/nvm.sh && nvm use 0.8 && cd ~/.nvm/bin/node_modules/node-coverage 
node server.js --function -d "$CURR_DIR/../" -i "test" -i "lib" -i "src" -i "tools" -i "jsava.min.js" -r "$CURR_DIR/../reports" &
google-chrome "http://localhost:8787" && google-chrome "http://localhost:8080/SpecRunner.html" && read -p "Press Enter when tests finished running..." && killall node
wait
