#!/bin/bash

# Verificar si se proporcionó un parámetro
if [ $# -eq 0 ]; then
    echo "Se requiere un parámetro."
    exit 1
fi

# Almacenar el parámetro en una variable
commit=$1

ng build --configuration production

git add .

git commit -m "$commit"

git push