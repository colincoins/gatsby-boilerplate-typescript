cd src/components && 
mkdir $1 && 
cd $1 && 
touch index.tsx page.module.scss page.module.scss.d.ts && 
echo '// required for scss module import'>>page.module.scss.d.ts &&
echo 'export const scssModulePlaceholder: string;'>>page.module.scss.d.ts &&
cd ../..