# auau_petshop

### Estrutura de desenvolvimento do projeto

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Estrutura de pastas HTML
- [x] Compilador webpack build SCSS
- [x] Estrutura de pastas SCSS
- [x] Construção layout HTML, mobile first
- [x] Adequação layout HTML, desktop
- [x] Implementação javascript modular
- [x] Estrutura base de dados Json
- [x] Persistência de dados via SessionStorage
- [x] Regra de negócio { Carrinho de compras }
- [x] Regra de negócio { Modal Newslatter }


### Webpack 5x[compilador scss], Node 12x

```
npm run build
```

### Estrutura de pastas
```
.
├── index.html
├── README.md
├── petshopdata.json
├── package.json
├── .gitignore
├── scss
│   ├── main.module.scss
│   └── components
│       ├── reset.module.scss
│       ├── variables.module.scss
│       └── sections
│           └── sections.module.scss
├── assets
│   ├── css[build]
│   └── imgs
└── modules
    ├── main.js
    ├── cart.js
    ├── petshopdata.js
    └── newsletter.js
```
