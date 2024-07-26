## Shell command

```bash

for i in $(ls -1 _.json|sort -n|grep -v package.json); do time node puppet.js $i; done

for i in $(ls -1 _.json|sort -n|grep -v package.json); do time node puppet2.js $i; done
```
