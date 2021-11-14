set -e

mongo <<EOF
use $GDEMO_API_DATABASE

db.createUser({
  user: '$GDEMO_API_USERNAME',
  pwd:  '$GDEMO_API_PASSWORD',
  roles: [{
    role: 'read',
    db: '$GDEMO_API_DATABASE'
  }]
})
EOF
