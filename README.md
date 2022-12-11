# Setup instructions for this space cadet

This website uses a deprecated create-react-app (yikes) but I am too lazy to update deprecated packages in a static website...

## Start building

(If you use fish, you will need to do [this](https://eshlox.net/2019/01/27/how-to-use-nvm-with-fish-shell) for nvm)
```
fisher install edc/bass # fish package manager
curl -o- {url to nvm version} | bash
vim ~/.config/fish/functions/nvm.fish

# add this:
function nvm
    bass source ~/.nvm/nvm.sh --no-use ';' nvm $argv
end
```

### The right way
```
# resolve dependencies
npm install package.json
```

### The wrong way 
```
nvm install 16.3.0
nvm run node --version # make sure its v16.3.0
npm install package.json
```

### Run locally:
```
npm start
npm stop
```

## To build
```
npm run build
```
Then, push to git as src and update repo settings to add web address.
```
git push origin source
```

## To deploy
```
npm run deploy
```

## To do
- [ ] Add markdown compiling
    - [ ] Integrate with blog page objects
    - [ ] Integrate with project page objects
- [ ] Add py_scripts to make a new text project and update projects.json
- [ ] Finish hobbies page
- [ ] Design nicer looking footer
- [ ] Add darkmode button
