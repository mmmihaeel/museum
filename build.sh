build_dir='./build'

npm run build

# Only remove the contents if it already exists
if [ -d "$build_dir" ]; then
  rm -r "$build_dir"/*
  echo "Deleted previous build contents in directory: $build_dir"
fi

if [ ! -d "$build_dir" ]; then
  mkdir -p "$build_dir"
  echo "Created build directory: $build_dir"
fi

cp -r "./.next" "$build_dir"
echo "Copied ./.next to $build_dir"

cp -r "./public" "$build_dir"
echo "Copied ./public assets to $build_dir"

cp -r "./dictionaries" "$build_dir"
echo "Copied ./dictionaries localizations to $build_dir"

cp "./next.config.js" "$build_dir"
echo "Copied ./next.config.js to $build_dir"

cp "./package.json" "$build_dir"
echo "Copied ./package.json to $build_dir"

cp "./package-lock.json" "$build_dir"
echo "Copied ./package-lock.json to $build_dir"

cp "./middleware.ts" "$build_dir"
echo "Copied ./middleware.ts to $build_dir"

cp "./i18n.config.ts" "$build_dir"
echo "Copied /i18n.config.ts to $build_dir"

cp "./start.sh" "$build_dir"
echo "Copied ./start.sh command to $build_dir"

echo "Copied all build files to $build_dir"