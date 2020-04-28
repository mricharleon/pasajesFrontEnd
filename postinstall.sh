
#!/bin/bash
./node_modules/bower/bin/bower install

# build if there's a Gruntfile for
# this environment. Currently used
# to compress on staging deployment
GRUNTFILE="Gruntfile.js"
if [ -e "$GRUNTFILE" ]
then
  ./node_modules/grunt-cli/bin/grunt --gruntfile $GRUNTFILE build
fi

exit $?
