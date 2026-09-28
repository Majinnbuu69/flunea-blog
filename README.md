# flunea-blog

Articles du blog de [flunea.fr](https://flunea.fr/blog/), séparés du code de l'application.

- `articles/<slug>.md` : un article = un fichier (frontmatter + Markdown).
- Le robot SEO (n8n) écrit **uniquement ici**, jamais dans le repo de l'app.
- À chaque déploiement, le front (`flunea_app/frontend/Dockerfile`) télécharge ce repo
  et génère les pages, le sitemap et l'index du blog.
- Publier un article = ajouter un `.md` ici puis redéployer le front prod.

Le repo est public exprès : son contenu est de toute façon publié sur le site,
et le build le récupère sans clé d'accès.
