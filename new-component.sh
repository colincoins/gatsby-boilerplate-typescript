cd src/components && 
mkdir $1 && 
cd $1 && 
touch index.tsx page.module.scss page.module.scss.d.ts && 

echo '// required for scss module import'>>page.module.scss.d.ts &&
echo 'export const scssModulePlaceholder: string;'>>page.module.scss.d.ts &&

echo "import * as React from 'react';">>index.tsx &&
echo "import * as styles from './page.module.scss';">>index.tsx &&
echo "">>index.tsx &&
echo "export interface ${1}Props {">>index.tsx &&
echo "}">>index.tsx &&
echo "">>index.tsx &&
echo "export class ${1} extends React.PureComponent<${1}Props> {">>index.tsx &&
echo "  render() {">>index.tsx &&
echo "    return (">>index.tsx &&
echo "      <div className={styles['${1}']}>">>index.tsx &&
echo "        <p>Start Component Here</p>">>index.tsx &&
echo "      </div>">>index.tsx &&
echo "    );">>index.tsx &&
echo "  }">>index.tsx &&
echo "}">>index.tsx &&
echo "@import "~@/styles/module-import.global";">>page.module.scss &&
echo ".$1 {">>page.module.scss &&
echo "    color: black;">>page.module.scss &&
echo "}">>page.module.scss &&
cd ../..