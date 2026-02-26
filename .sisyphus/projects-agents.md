# Projects Deployment Info

## Hosting

**Platform**: Render
**URL**: https://web-portfolio-k3id.onrender.com

## Deployment Configuration

The portfolio and mini-projects are deployed as static files on Render.

### render.yaml

```yaml
services:
  - type: web
    name: web-portfolio
    env: static
    buildCommand: npm run build
    publishDir: dist
    repo: https://github.com/T-C4t/web-portfolio.git
```

## Mini-Projects Static Files

Mini-projects are placed in the `public/` folder to be served as static content:

| Project | Folder | Live URL |
|---------|--------|----------|
| Tower of Hanoi | `public/tower-of-hanoi/` | https://web-portfolio-k3id.onrender.com/tower-of-hanoi/ |
| Semafor Demo | `public/semafor-demo/` | https://web-portfolio-k3id.onrender.com/semafor-demo/ |
| Pathfinding Visualizer | `public/pathfinding/` | https://web-portfolio-k3id.onrender.com/pathfinding/ |
| Tetris | `public/tetris/` | https://web-portfolio-k3id.onrender.com/tetris/ |

## Rebuild & Deploy

To deploy changes:
1. Commit changes to the `web-portfolio` repository
2. Render will automatically rebuild and deploy on push

Manual rebuild:
```bash
npm run build
```

The build output goes to `dist/` which Render publishes.
