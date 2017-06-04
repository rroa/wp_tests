USERS=( max jesus rey rafael daniel arnulfo joseph juan )
HOST=45.55.65.103

for user in "${USERS[@]}"
do
    echo ""
    echo "======================================================================"
    echo "Executing tests for ${HOST}/${user}"
    echo "======================================================================"
    echo ""
	PORT=${user} HOST=${HOST} make test
done


